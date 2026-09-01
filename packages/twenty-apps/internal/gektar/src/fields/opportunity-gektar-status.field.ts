import {
  FieldType,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
  defineField,
} from 'twenty-sdk/define';

import {
  OPPORTUNITY_GEKTAR_STATUS_FIELD_ID,
} from '../constants/universal-identifiers';

export enum GektarOpportunityStatus {
  NEW = 'NEW',
  QUALIFIED = 'QUALIFIED',
  PROPOSITION = 'PROPOSITION',
  WON = 'WON',
  LOST = 'LOST',
}

export default defineField({
  universalIdentifier: OPPORTUNITY_GEKTAR_STATUS_FIELD_ID,
  objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.opportunity.universalIdentifier,
  type: FieldType.SELECT,
  name: 'gektarStatus',
  label: 'Gektar Status',
  description: 'Gektar lead lifecycle; transitions are enforced by the website API',
  icon: 'IconRoute',
  defaultValue: `'${GektarOpportunityStatus.NEW}'`,
  options: [
    { id: 'd9f47f83-546b-43b9-9e42-65f0006e45fa', value: GektarOpportunityStatus.NEW, label: 'New', position: 0, color: 'gray' },
    { id: 'b43d0f82-7d06-436b-8ce2-3528a9abef12', value: GektarOpportunityStatus.QUALIFIED, label: 'Qualified', position: 1, color: 'blue' },
    { id: '833343ff-8a03-4659-ac08-1c500452055a', value: GektarOpportunityStatus.PROPOSITION, label: 'Proposition', position: 2, color: 'purple' },
    { id: 'cc2e2023-98c2-4f45-9b02-965b101b0dec', value: GektarOpportunityStatus.WON, label: 'Won', position: 3, color: 'green' },
    { id: '05777ac2-62d2-41f6-977f-68f773eafbd3', value: GektarOpportunityStatus.LOST, label: 'Lost', position: 4, color: 'red' },
  ],
});
