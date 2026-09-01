import { FieldType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS, defineField } from 'twenty-sdk/define';
import { PERSON_TELEGRAM_USER_ID_FIELD_ID } from '../constants/universal-identifiers';
export default defineField({ universalIdentifier: PERSON_TELEGRAM_USER_ID_FIELD_ID, objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.universalIdentifier, type: FieldType.TEXT, name: 'telegramUserId', label: 'Telegram user ID', icon: 'IconBrandTelegram', isNullable: true, isUnique: true });
