import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    breakPoints: {
      desktop_size: string;
      tablet_size: string;
      pablet_size: string;
      mobile_size: string;
      android_size: string;
      small_size: string;
    };

    colors: {
      primary: string;
      background: string;
      lightgrey: string;
      darkgrey: string;
      white: string;
    };

    mqbp: {
      desktop: string;
      tablet: string;
      pablet: string;
      mobile: string;
      android: string;
      small: string;
    };
  }
}
