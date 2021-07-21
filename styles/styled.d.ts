import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    breakPoints: {
      desktop_size: string;
      tablet_size: string;
      pablet_size: string;
      mobile_size: string;
      small_size: string;
    };

    colors: {
      primary: string;
      background: string;
      lightgrey: string;
      darkgrey: string;
    };

    mqbp: {
      desktop: string;
      tablet: string;
      pablet: string;
      mobile: string;
      small: string;
    };
  }
}
