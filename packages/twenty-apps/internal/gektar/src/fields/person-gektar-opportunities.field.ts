import {
  FieldType,
  RelationType,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
  defineField,
} from 'twenty-sdk/define';

import {
  OPPORTUNITY_INVESTOR_FIELD_ID,
  PERSON_GEKTAR_OPPORTUNITIES_FIELD_ID,
} from '../constants/universal-identifiers';

export default defineField({
  universalIdentifier: PERSON_GEKTAR_OPPORTUNITIES_FIELD_ID,
  objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.universalIdentifier,
  type: FieldType.RELATION,
  name: 'gektarOpportunities',
  label: 'Gektar opportunities',
  icon: 'IconTargetArrow',
  relationTargetObjectMetadataUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.opportunity.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier: OPPORTUNITY_INVESTOR_FIELD_ID,
  universalSettings: { relationType: RelationType.ONE_TO_MANY },
});
