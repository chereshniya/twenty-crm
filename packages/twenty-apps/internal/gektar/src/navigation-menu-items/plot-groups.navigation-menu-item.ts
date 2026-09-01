import {
  defineNavigationMenuItem,
  NavigationMenuItemType,
} from 'twenty-sdk/define';

import { PLOT_GROUP_OBJECT_UNIVERSAL_IDENTIFIER } from '../constants/universal-identifiers';

export default defineNavigationMenuItem({
  universalIdentifier: '1119144b-4453-4b7a-846b-e268dce13e4f',
  position: -1,
  type: NavigationMenuItemType.OBJECT,
  targetObjectUniversalIdentifier: PLOT_GROUP_OBJECT_UNIVERSAL_IDENTIFIER,
});
