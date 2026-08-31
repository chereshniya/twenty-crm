import {
  FieldType,
  RelationType,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
  defineField,
} from 'twenty-sdk/define';

import {
  LAND_PLOT_WORKSPACE_MEMBER_FIELD_ID,
  LAND_PLOT_OBJECT_UNIVERSAL_IDENTIFIER,
  WORKSPACE_MEMBER_LAND_PLOTS_FIELD_ID,
} from '../constants/universal-identifiers';

export default defineField({
  universalIdentifier: WORKSPACE_MEMBER_LAND_PLOTS_FIELD_ID,
  objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  type: FieldType.RELATION,
  name: 'gektarLandPlots',
  label: 'Gektar land plots',
  icon: 'IconMapPin',
  relationTargetObjectMetadataUniversalIdentifier: LAND_PLOT_OBJECT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: LAND_PLOT_WORKSPACE_MEMBER_FIELD_ID,
  universalSettings: { relationType: RelationType.ONE_TO_MANY },
});
