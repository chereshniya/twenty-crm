import {
  defineNavigationMenuItem,
  NavigationMenuItemType,
} from 'twenty-sdk/define';

import { GEKTAR_MANAGER_OBJECT_UNIVERSAL_IDENTIFIER } from '../constants/universal-identifiers';

export default defineNavigationMenuItem({
  universalIdentifier: '97b7f488-c89d-4dbe-af08-558d8952869c',
  position: -2,
  type: NavigationMenuItemType.OBJECT,
  targetObjectUniversalIdentifier: GEKTAR_MANAGER_OBJECT_UNIVERSAL_IDENTIFIER,
});
