import {
  defineNavigationMenuItem,
  NavigationMenuItemType,
} from 'twenty-sdk/define';

import { LAND_PLOTS_VIEW_UNIVERSAL_IDENTIFIER } from '../constants/universal-identifiers';

export default defineNavigationMenuItem({
  universalIdentifier: '4a69f981-3d15-4d79-b54d-3811ecff02b6',
  position: -3,
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: LAND_PLOTS_VIEW_UNIVERSAL_IDENTIFIER,
});
