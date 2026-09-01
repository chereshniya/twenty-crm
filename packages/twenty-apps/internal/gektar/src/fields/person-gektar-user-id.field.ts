import {
  FieldType,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
  defineField,
} from 'twenty-sdk/define';

import { PERSON_GEKTAR_USER_ID_FIELD_ID } from '../constants/universal-identifiers';

export default defineField({
  universalIdentifier: PERSON_GEKTAR_USER_ID_FIELD_ID,
  objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.universalIdentifier,
  type: FieldType.TEXT,
  name: 'gektarUserId',
  label: 'Gektar user ID',
  description: 'Stable Better Auth user ID used for idempotent CRM synchronization',
  icon: 'IconKey',
  isNullable: true,
  isUnique: true,
});
