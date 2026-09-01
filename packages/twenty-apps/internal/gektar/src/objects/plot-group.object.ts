import { FieldType, RelationType, defineObject } from 'twenty-sdk/define';

import {
  PLOT_GROUP_DESCRIPTION_FIELD_ID,
  PLOT_GROUP_MEMBERSHIPS_FIELD_ID,
  PLOT_GROUP_NAME_FIELD_ID,
  PLOT_GROUP_TOTAL_AREA_FIELD_ID,
  PLOT_GROUP_MEMBERSHIP_OBJECT_UNIVERSAL_IDENTIFIER,
  PLOT_GROUP_OBJECT_UNIVERSAL_IDENTIFIER,
  MEMBERSHIP_GROUP_FIELD_ID,
} from '../constants/universal-identifiers';

export default defineObject({
  universalIdentifier: PLOT_GROUP_OBJECT_UNIVERSAL_IDENTIFIER,
  nameSingular: 'plotGroup',
  namePlural: 'plotGroups',
  labelSingular: 'Plot Group',
  labelPlural: 'Plot Groups',
  description: 'Curated collection of related Gektar land plots',
  icon: 'IconFolders',
  labelIdentifierFieldMetadataUniversalIdentifier: PLOT_GROUP_NAME_FIELD_ID,
  fields: [
    { universalIdentifier: PLOT_GROUP_NAME_FIELD_ID, type: FieldType.TEXT, name: 'name', label: 'Name', icon: 'IconTag' },
    { universalIdentifier: PLOT_GROUP_TOTAL_AREA_FIELD_ID, type: FieldType.NUMBER, name: 'totalArea', label: 'Total area (sotky)', icon: 'IconRulerMeasure', isNullable: true },
    { universalIdentifier: PLOT_GROUP_DESCRIPTION_FIELD_ID, type: FieldType.RICH_TEXT, name: 'description', label: 'Description', icon: 'IconMessage', isNullable: true },
    {
      universalIdentifier: PLOT_GROUP_MEMBERSHIPS_FIELD_ID,
      type: FieldType.RELATION,
      name: 'memberships',
      label: 'Plot memberships',
      icon: 'IconMapPins',
      relationTargetObjectMetadataUniversalIdentifier: PLOT_GROUP_MEMBERSHIP_OBJECT_UNIVERSAL_IDENTIFIER,
      relationTargetFieldMetadataUniversalIdentifier: MEMBERSHIP_GROUP_FIELD_ID,
      universalSettings: { relationType: RelationType.ONE_TO_MANY },
    },
  ],
});
