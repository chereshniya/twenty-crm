import {
  defineNavigationMenuItem,
  NavigationMenuItemType,
} from 'twenty-sdk/define';

import { LAND_PLOT_OBJECT_UNIVERSAL_IDENTIFIER } from '../constants/universal-identifiers';

export default defineNavigationMenuItem({
  universalIdentifier: '16cbdf3c-5947-4c9d-8ceb-535f21399090',
  position: 4,
  type: NavigationMenuItemType.OBJECT,
  targetObjectUniversalIdentifier: LAND_PLOT_OBJECT_UNIVERSAL_IDENTIFIER,
});
