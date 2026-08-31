import { FieldType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS, defineField } from 'twenty-sdk/define';
import { OPPORTUNITY_UTM_MEDIUM_FIELD_ID } from '../constants/universal-identifiers';
export default defineField({ universalIdentifier: OPPORTUNITY_UTM_MEDIUM_FIELD_ID, objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.opportunity.universalIdentifier, type: FieldType.TEXT, name: 'utmMedium', label: 'UTM medium', icon: 'IconAbc', isNullable: true });
