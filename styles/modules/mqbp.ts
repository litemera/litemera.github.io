import { breakPoints } from "@styles/modules/breakPoints";

export const mqbp = {
  // 1200px
  desktop: `screen and (max-width: ${breakPoints.desktop_size})`,
  // 768px
  tablet: `screen and (max-width: ${breakPoints.tablet_size})`,
  // 420px
  pablet: `screen and (max-width: ${breakPoints.pablet_size})`,
  // 375px
  mobile: `screen and (max-width: ${breakPoints.mobile_size})`,
  // 360px
  android: `screen and (max-width: ${breakPoints.android_size})`,
  // 320px
  small: `screen and (max-width: ${breakPoints.small_size})`,
};
