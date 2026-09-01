# Gektar Twenty app

Declarative Twenty metadata for the Gektar land catalogue and investor CRM.
The app owns only Gektar custom objects and extensions to standard Person,
Opportunity and Task objects. It does not modify Twenty core.

The Next.js compatibility API remains responsible for investor authentication,
lead lifecycle transitions and Odoo-to-Twenty data migration. Configure its
least-privilege API key separately in the website environment.

Build and validate the manifest with:

```sh
yarn twenty dev:build
yarn twenty plan
yarn twenty apply
```

`deploy/docker-compose.yml` requires an immutable custom-image digest and uses
that same image for the server and worker. It requires S3-compatible durable
storage; no local media volume or `latest` fallback is defined.
