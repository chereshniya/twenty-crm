import { FieldType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS, defineField } from 'twenty-sdk/define';
import { OPPORTUNITY_TELEGRAM_USERNAME_FIELD_ID } from '../constants/universal-identifiers';
export default defineField({ universalIdentifier: OPPORTUNITY_TELEGRAM_USERNAME_FIELD_ID, objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.opportunity.universalIdentifier, type: FieldType.TEXT, name: 'telegramUsername', label: 'Telegram username', icon: 'IconBrandTelegram', isNullable: true });
