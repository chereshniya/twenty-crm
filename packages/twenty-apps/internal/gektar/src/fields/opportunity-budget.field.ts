import { FieldType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS, defineField } from 'twenty-sdk/define';
import { OPPORTUNITY_BUDGET_FIELD_ID } from '../constants/universal-identifiers';
export default defineField({ universalIdentifier: OPPORTUNITY_BUDGET_FIELD_ID, objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.opportunity.universalIdentifier, type: FieldType.CURRENCY, name: 'budget', label: 'Budget (USD)', icon: 'IconCurrencyDollar', isNullable: true });
