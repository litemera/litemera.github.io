import { breakPoints } from "@styles/modules/breakPoints";

export const mqbp = {
  desktop: `screen and (max-width: ${breakPoints.desktop_size})`,
  tablet: `screen and (max-width: ${breakPoints.tablet_size})`,
  pablet: `screen and (max-width: ${breakPoints.pablet_size})`,
  mobile: `screen and (max-width: ${breakPoints.mobile_size})`,
  small: `screen and (max-width: ${breakPoints.small_size})`,
};
