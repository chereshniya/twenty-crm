import { FieldType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS, defineField } from 'twenty-sdk/define';
import { OPPORTUNITY_SOURCE_FIELD_ID } from '../constants/universal-identifiers';
export default defineField({ universalIdentifier: OPPORTUNITY_SOURCE_FIELD_ID, objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.opportunity.universalIdentifier, type: FieldType.TEXT, name: 'gektarSource', label: 'Gektar source', icon: 'IconAbc', isNullable: true });
