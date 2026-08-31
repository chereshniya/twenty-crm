import { FieldType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS, defineField } from 'twenty-sdk/define';
import { OPPORTUNITY_TELEGRAM_FORUM_THREAD_ID_FIELD_ID } from '../constants/universal-identifiers';
export default defineField({ universalIdentifier: OPPORTUNITY_TELEGRAM_FORUM_THREAD_ID_FIELD_ID, objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.opportunity.universalIdentifier, type: FieldType.TEXT, name: 'telegramForumThreadId', label: 'Telegram forum thread ID', icon: 'IconBrandTelegram', isNullable: true });
