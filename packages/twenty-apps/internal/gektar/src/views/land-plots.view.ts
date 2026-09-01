import { defineView, ViewType } from 'twenty-sdk/define';

import {
  LAND_PLOT_AREA_SOTKY_FIELD_ID,
  LAND_PLOT_CADASTRAL_NUMBER_FIELD_ID,
  LAND_PLOT_LIFECYCLE_FIELD_ID,
  LAND_PLOT_NAME_FIELD_ID,
  LAND_PLOT_OBJECT_UNIVERSAL_IDENTIFIER,
  LAND_PLOT_PHOTOS_FIELD_ID,
  LAND_PLOT_PRICE_PER_SOTKA_USD_FIELD_ID,
  LAND_PLOT_PRICE_USD_FIELD_ID,
  LAND_PLOT_REGION_SELECT_FIELD_ID,
  LAND_PLOTS_VIEW_UNIVERSAL_IDENTIFIER,
} from '../constants/universal-identifiers';

export default defineView({
  universalIdentifier: LAND_PLOTS_VIEW_UNIVERSAL_IDENTIFIER,
  name: 'Gektar Land Plots',
  objectUniversalIdentifier: LAND_PLOT_OBJECT_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconPhoto',
  position: 0,
  fields: [
    { universalIdentifier: '26c8660d-0671-424b-b60b-574a596b88f4', fieldMetadataUniversalIdentifier: LAND_PLOT_NAME_FIELD_ID, position: 0, isVisible: true, size: 180 },
    { universalIdentifier: 'e5ce2855-143b-44d2-81fe-ff9a0986ec3e', fieldMetadataUniversalIdentifier: LAND_PLOT_PHOTOS_FIELD_ID, position: 1, isVisible: true, size: 240 },
    { universalIdentifier: '4c6c1bf0-ea77-45fd-b765-a89426b0d2c6', fieldMetadataUniversalIdentifier: LAND_PLOT_CADASTRAL_NUMBER_FIELD_ID, position: 3, isVisible: true, size: 210 },
    { universalIdentifier: '8c01e344-098b-495b-8b01-d441f5b41eaf', fieldMetadataUniversalIdentifier: LAND_PLOT_AREA_SOTKY_FIELD_ID, position: 4, isVisible: true, size: 130 },
    { universalIdentifier: '7c08ff9e-c8dc-45bd-8382-c5a38634579b', fieldMetadataUniversalIdentifier: LAND_PLOT_PRICE_USD_FIELD_ID, position: 5, isVisible: true, size: 140 },
    { universalIdentifier: '6a511234-2d6a-4cab-96c6-9a3bb4f2ff0d', fieldMetadataUniversalIdentifier: LAND_PLOT_PRICE_PER_SOTKA_USD_FIELD_ID, position: 6, isVisible: true, size: 170 },
    { universalIdentifier: 'f54032cd-9a44-48d8-a1c3-230c83a8db14', fieldMetadataUniversalIdentifier: LAND_PLOT_REGION_SELECT_FIELD_ID, position: 7, isVisible: true, size: 170 },
    { universalIdentifier: '3e79b00b-d29b-4e75-9f38-c99e5642184f', fieldMetadataUniversalIdentifier: LAND_PLOT_LIFECYCLE_FIELD_ID, position: 8, isVisible: true, size: 130 },
  ],
});
