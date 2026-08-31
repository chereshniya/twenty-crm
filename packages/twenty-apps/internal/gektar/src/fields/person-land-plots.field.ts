import {
  FieldType,
  RelationType,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
  defineField,
} from 'twenty-sdk/define';

import {
  LAND_PLOT_OBJECT_UNIVERSAL_IDENTIFIER,
  LAND_PLOT_OWNER_FIELD_ID,
  PERSON_LAND_PLOTS_FIELD_ID,
} from '../constants/universal-identifiers';

export default defineField({
  universalIdentifier: PERSON_LAND_PLOTS_FIELD_ID,
  objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.universalIdentifier,
  type: FieldType.RELATION,
  name: 'gektarLandPlots',
  label: 'Gektar land plots',
  icon: 'IconMapPin',
  relationTargetObjectMetadataUniversalIdentifier: LAND_PLOT_OBJECT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: LAND_PLOT_OWNER_FIELD_ID,
  universalSettings: { relationType: RelationType.ONE_TO_MANY },
});
