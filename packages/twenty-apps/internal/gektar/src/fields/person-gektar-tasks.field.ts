import {
  FieldType,
  RelationType,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
  defineField,
} from 'twenty-sdk/define';

import {
  PERSON_GEKTAR_TASKS_FIELD_ID,
  TASK_INVESTOR_FIELD_ID,
} from '../constants/universal-identifiers';

export default defineField({
  universalIdentifier: PERSON_GEKTAR_TASKS_FIELD_ID,
  objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.universalIdentifier,
  type: FieldType.RELATION,
  name: 'gektarTasks',
  label: 'Gektar tasks',
  icon: 'IconChecklist',
  relationTargetObjectMetadataUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.task.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier: TASK_INVESTOR_FIELD_ID,
  universalSettings: { relationType: RelationType.ONE_TO_MANY },
});
