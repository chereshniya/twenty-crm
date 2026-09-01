import {
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
  defineApplicationRole,
} from 'twenty-sdk/define';

import {
  GEKTAR_MANAGER_OBJECT_UNIVERSAL_IDENTIFIER,
  LAND_PLOT_OBJECT_UNIVERSAL_IDENTIFIER,
  PLOT_GROUP_MEMBERSHIP_OBJECT_UNIVERSAL_IDENTIFIER,
  PLOT_GROUP_OBJECT_UNIVERSAL_IDENTIFIER,
} from '../constants/universal-identifiers';
import { GEKTAR_DEFAULT_ROLE_UNIVERSAL_IDENTIFIER } from '../constants/role-identifiers';

const readWrite = {
  canReadObjectRecords: true,
  canUpdateObjectRecords: true,
  canSoftDeleteObjectRecords: true,
  canDestroyObjectRecords: false,
};

export default defineApplicationRole({
  universalIdentifier: GEKTAR_DEFAULT_ROLE_UNIVERSAL_IDENTIFIER,
  label: 'Gektar API role',
  description:
    'Least-privilege app role for Gektar catalogue, investor synchronization and lead workflow',
  canReadAllObjectRecords: false,
  canUpdateAllObjectRecords: false,
  canSoftDeleteAllObjectRecords: false,
  canDestroyAllObjectRecords: false,
  canUpdateAllSettings: false,
  canBeAssignedToUsers: false,
  canBeAssignedToAgents: false,
  canBeAssignedToApiKeys: true,
  objectPermissions: [
    { objectUniversalIdentifier: GEKTAR_MANAGER_OBJECT_UNIVERSAL_IDENTIFIER, ...readWrite },
    { objectUniversalIdentifier: LAND_PLOT_OBJECT_UNIVERSAL_IDENTIFIER, ...readWrite },
    { objectUniversalIdentifier: PLOT_GROUP_OBJECT_UNIVERSAL_IDENTIFIER, ...readWrite },
    { objectUniversalIdentifier: PLOT_GROUP_MEMBERSHIP_OBJECT_UNIVERSAL_IDENTIFIER, ...readWrite },
    { objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.universalIdentifier, ...readWrite },
    { objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.opportunity.universalIdentifier, ...readWrite },
    { objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.task.universalIdentifier, ...readWrite },
    { objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier, canReadObjectRecords: true, canUpdateObjectRecords: false, canSoftDeleteObjectRecords: false, canDestroyObjectRecords: false },
  ],
  fieldPermissions: [],
});
