import { FieldType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS, defineField } from 'twenty-sdk/define';
import { OPPORTUNITY_TELEGRAM_CHAT_ID_FIELD_ID } from '../constants/universal-identifiers';
export default defineField({ universalIdentifier: OPPORTUNITY_TELEGRAM_CHAT_ID_FIELD_ID, objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.opportunity.universalIdentifier, type: FieldType.TEXT, name: 'telegramChatId', label: 'Telegram chat ID', icon: 'IconBrandTelegram', isNullable: true });
