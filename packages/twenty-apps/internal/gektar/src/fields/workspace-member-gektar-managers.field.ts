import {
  FieldType,
  RelationType,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
  defineField,
} from 'twenty-sdk/define';

import {
  GEKTAR_MANAGER_OBJECT_UNIVERSAL_IDENTIFIER,
  GEKTAR_MANAGER_WORKSPACE_MEMBER_FIELD_ID,
  WORKSPACE_MEMBER_GEKTAR_MANAGERS_FIELD_ID,
} from '../constants/universal-identifiers';

export default defineField({
  universalIdentifier: WORKSPACE_MEMBER_GEKTAR_MANAGERS_FIELD_ID,
  objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  type: FieldType.RELATION,
  name: 'gektarManagers',
  label: 'Gektar manager profiles',
  icon: 'IconUserStar',
  relationTargetObjectMetadataUniversalIdentifier: GEKTAR_MANAGER_OBJECT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: GEKTAR_MANAGER_WORKSPACE_MEMBER_FIELD_ID,
  universalSettings: { relationType: RelationType.ONE_TO_MANY },
});
