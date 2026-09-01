# Gektar Twenty app

Declarative Twenty metadata for the Gektar land catalogue and investor CRM.
The app owns only Gektar custom objects and extensions to standard Person,
Opportunity and Task objects. It does not modify Twenty core.

The Next.js compatibility API remains responsible for investor authentication
and lead lifecycle transitions. Configure its least-privilege Twenty API key
separately in the website runtime. Odoo and legacy Spaces credentials are
one-time migration inputs in the Gektar repository and never belong in the
Twenty or Next.js production runtime.

## Environment boundaries

There are three independent configuration scopes:

1. **Twenty runtime** — variables in [`deploy/.env.example`](deploy/.env.example):
   PostgreSQL, Redis, encryption/application secrets and `STORAGE_S3_*`.
2. **Gektar Next.js runtime** — `TWENTY_URL` plus a separate least-privilege
   `TWENTY_API_KEY`. It does not receive Twenty's database, Redis or S3 keys.
3. **One-time migration** — Odoo, legacy Spaces, field universal identifiers
   and a migration-scoped Twenty key. Keep these only in the Gektar
   `.env.migration` file and remove them after cutover.

Twenty and Better Auth may share a PostgreSQL host, but must use separate
databases and users. Separate instances are preferred in production so a CRM
database outage cannot take down investor login.

## Production deployment runbook for Oleg

Deploy in this order. Do not switch the Gektar website to the new CRM until the
server, worker, storage and declarative app have all passed the checks below.

### 1. Provision dependencies

Create the following before deploying the containers:

- a dedicated PostgreSQL database and database user for Twenty;
- a Redis instance reachable by both the server and worker;
- a private S3-compatible bucket for Twenty files;
- the `crm.example.com` DNS record and TLS-enabled reverse proxy;
- a container registry repository for the pinned Twenty image.

Twenty and Better Auth may use the same PostgreSQL server, but not the same
database or database user. Back up the Twenty database and S3 bucket on an
independent schedule. Keep Redis persistent when possible, but do not treat it
as the system of record.

Configure the bucket CORS policy to allow `PUT` from the exact `SERVER_URL`
origin and allow the `Content-Type` request header. Do not make the bucket
public.

### 2. Build and publish one immutable image

`deploy/docker-compose.yml` requires an immutable custom-image digest and uses
that same image for the server and worker. It requires S3-compatible durable
storage; no local media volume or `latest` fallback is defined.

Build the production target from the repository root:

```sh
docker build \
  --target twenty \
  -f packages/twenty-docker/twenty/Dockerfile \
  -t registry.example.com/gektar/twenty:<git-sha> \
  .
docker push registry.example.com/gektar/twenty:<git-sha>
```

Resolve the pushed image digest and set `TWENTY_IMAGE` to
`registry.example.com/gektar/twenty@sha256:...`. Never deploy `latest`, and use
the same digest for the server and worker.

### 3. Configure the Twenty runtime

Copy `deploy/.env.example` to a secret environment file in the deployment
platform and replace every placeholder. Generate `ENCRYPTION_KEY` and
`APP_SECRET` independently with `openssl rand -base64 32`. Never rotate or lose
`ENCRYPTION_KEY` without following a tested key-rotation procedure.

`SERVER_URL` must be the public HTTPS origin, without a path. Twenty listens on
port `3000` inside the container. The supplied Compose file publishes it as
host port `8082` by default (`TWENTY_PORT=8082`), so the mapping is
`8082:3000`. With a Coolify proxy, route the domain to container port `3000`;
do not configure `8082` as the container's exposed port.

Runtime secrets must be available to both server and worker. Do not expose
PostgreSQL, Redis or S3 credentials to the Gektar Next.js container.

### 4. Deploy the server and worker

The recommended Coolify setup is the supplied Compose file:

```sh
cd packages/twenty-apps/internal/gektar/deploy
docker compose --env-file .env pull
docker compose --env-file .env up -d
docker compose --env-file .env ps
```

The server performs database migrations and registers cron jobs. The worker
waits for the server health check and starts with both operations disabled.
There must be exactly one migration/cron-owning server during the initial
deployment.

When Coolify builds from source, configure:

```text
Base directory: /
Dockerfile location: /packages/twenty-docker/twenty/Dockerfile
Docker build stage target: twenty
Container port: 3000
```

Keep `PG_DATABASE_URL`, `REDIS_URL`, `ENCRYPTION_KEY`, `APP_SECRET` and S3
credentials runtime-only; do not enable Coolify's build-time option for them.
A single Dockerfile application runs only the server. Production also requires
the worker (`yarn worker:prod`), so the recommended deployment is the supplied
Compose file using the same immutable image for both services.

Wait for `https://crm.example.com/healthz` to return HTTP 200, then confirm that
both services remain healthy and that neither log contains database migration,
Redis, encryption-key or S3 errors.

### 5. Create the workspace and install the Gektar app

Open the CRM, create the production workspace and its first administrator, then
create a temporary API key with permission to install application metadata.
From this directory, build the app and preview the metadata changes:

```sh
yarn install --immutable
yarn twenty dev:build
yarn twenty remote:add \
  --url https://crm.example.com \
  --api-key "$TWENTY_API_KEY" \
  --as production
yarn twenty -r production plan
yarn twenty -r production apply
```

The API key here belongs to the deployment operator and is not a Twenty
container variable. Review `plan` before `apply`; use `--force` only for a
deliberately reviewed destructive metadata change. Re-run `plan` after apply;
it should report no unexpected changes.

The app puts Land Plots, Gektar Managers and Plot Groups first in that order.
Twenty's standard Opportunities, People and Companies entries remain available
after all three Gektar entries; their relative core order is not modified.

### 6. Connect Gektar Next.js

Create a separate least-privilege Twenty API key for the Gektar server. Set only
these CRM values in the Next.js runtime:

```dotenv
TWENTY_URL=https://crm.example.com
TWENTY_API_KEY=<gektar-server-api-key>
```

Do not reuse the deployment operator key. Restart the Next.js service after the
environment change, then run the inventory migration/backfill using the
migration-only environment from the Gektar repository.

### 7. Acceptance and rollback

Before production cutover, verify:

- the server health endpoint is HTTP 200 and the worker is running;
- Land Plots, Gektar Managers and Plot Groups are the first CRM object entries;
- Opportunities, People and Companies remain accessible after them;
- a test photo uploads once, opens from S3 and survives a container restart;
- the expected three plots, five managers and their group relations are present;
- Gektar can list a plot and create a test Person/Opportunity through its API;
- Better Auth login still succeeds if Twenty is temporarily unavailable.

For rollback, point Gektar back to the previous known-good CRM endpoint/image,
restore PostgreSQL and S3 as a matched backup pair if data was changed, and run
the previous app manifest's `plan` before applying it. Do not roll back only the
database while leaving newer S3 objects or application metadata unreviewed.

## File storage

`STORAGE_TYPE=s3` stores one object for each successfully uploaded file. Setting
`STORAGE_S3_PRESIGNED_URL_ENABLED=true` additionally makes the browser PUT
directly to S3 and makes Twenty redirect downloads to signed S3 URLs. Without
that flag, Twenty still stores files in S3 but proxies their bytes through the
server.

Configure bucket CORS to allow `PUT` from the exact `SERVER_URL` origin and the
`Content-Type` header. Creating a Land Plot and uploading one photo produces one
S3 object and one file reference; the first photo is reused as the catalogue
cover rather than copied to another field.
