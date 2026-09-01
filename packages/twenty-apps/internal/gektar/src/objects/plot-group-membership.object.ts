import {
  FieldType,
  OnDeleteAction,
  RelationType,
  defineObject,
} from 'twenty-sdk/define';

import {
  LAND_PLOT_OBJECT_UNIVERSAL_IDENTIFIER,
  MEMBERSHIP_GROUP_FIELD_ID,
  MEMBERSHIP_KEY_FIELD_ID,
  MEMBERSHIP_LAND_PLOT_FIELD_ID,
  MEMBERSHIP_NAME_FIELD_ID,
  PLOT_GROUP_MEMBERSHIPS_FIELD_ID,
  PLOT_GROUP_OBJECT_UNIVERSAL_IDENTIFIER,
  PLOT_GROUP_MEMBERSHIP_OBJECT_UNIVERSAL_IDENTIFIER,
} from '../constants/universal-identifiers';

export default defineObject({
  universalIdentifier: PLOT_GROUP_MEMBERSHIP_OBJECT_UNIVERSAL_IDENTIFIER,
  nameSingular: 'plotGroupMembership',
  namePlural: 'plotGroupMemberships',
  labelSingular: 'Plot Group Membership',
  labelPlural: 'Plot Group Memberships',
  description: 'Junction between a Gektar land plot and a plot group',
  icon: 'IconLink',
  labelIdentifierFieldMetadataUniversalIdentifier: MEMBERSHIP_NAME_FIELD_ID,
  fields: [
    { universalIdentifier: MEMBERSHIP_NAME_FIELD_ID, type: FieldType.TEXT, name: 'name', label: 'Name', icon: 'IconTag' },
    { universalIdentifier: MEMBERSHIP_KEY_FIELD_ID, type: FieldType.TEXT, name: 'membershipKey', label: 'Membership key', icon: 'IconKey', isUnique: true },
    {
      universalIdentifier: MEMBERSHIP_LAND_PLOT_FIELD_ID,
      type: FieldType.RELATION,
      name: 'landPlot',
      label: 'Land plot',
      icon: 'IconMapPin',
      relationTargetObjectMetadataUniversalIdentifier: LAND_PLOT_OBJECT_UNIVERSAL_IDENTIFIER,
      relationTargetFieldMetadataUniversalIdentifier: '833343ff-8a03-4659-ac08-1c500452055a',
      universalSettings: { relationType: RelationType.MANY_TO_ONE, onDelete: OnDeleteAction.CASCADE, joinColumnName: 'landPlotId' },
    },
    {
      universalIdentifier: MEMBERSHIP_GROUP_FIELD_ID,
      type: FieldType.RELATION,
      name: 'plotGroup',
      label: 'Plot group',
      icon: 'IconFolders',
      relationTargetObjectMetadataUniversalIdentifier: PLOT_GROUP_OBJECT_UNIVERSAL_IDENTIFIER,
      relationTargetFieldMetadataUniversalIdentifier: PLOT_GROUP_MEMBERSHIPS_FIELD_ID,
      universalSettings: { relationType: RelationType.MANY_TO_ONE, onDelete: OnDeleteAction.CASCADE, joinColumnName: 'plotGroupId' },
    },
  ],
});
