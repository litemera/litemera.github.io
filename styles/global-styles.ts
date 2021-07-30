"use strict";

import { createGlobalStyle } from "styled-components";

import { units } from "@styles/mixin/index";
import { theme } from "@styles/theme";

export const GlobalStyle = createGlobalStyle`
  html {
    line-height: 1.5;
    background-color: ${theme.colors.background};
  }

  body {
    color: ${theme.colors.white};
    padding: 0;
    margin: 0;
    font-family: "Pretendard", sans-serif;

    h1 {
      font-size: ${units(12)};
      font-weight: 900;
      text-align: center;
      margin-bottom: ${units(-2)};

      @media ${(props) => props.theme.mqbp.pablet} {
        font-size: 32px;
      }
    }

    h2 {
      font-size: ${units(6)};
      font-weight: 300;
      text-align: center;
      opacity: 0.54;

      @media ${(props) => props.theme.mqbp.pablet} {
        font-size: ${units(4)};
      }
    }

    button {
      border: 0;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    .section {
      padding: ${units(12)} 0 ${units(24)};
    }

    .wrapper {
      margin: 0 auto;

      @media ${(props) => props.theme.mqbp.desktop} {
        padding: 0 ${units(16)};
      }

      @media ${(props) => props.theme.mqbp.tablet} {
        padding: 0 ${units(8)};
      }

      @media ${(props) => props.theme.mqbp.pablet} {
        padding: 0 ${units(4)};
      }
    }
  }

  ::-moz-selection {
    color: ${theme.colors.background};
    background: ${theme.colors.white};
  }

  ::selection {
    color: ${theme.colors.background};
    background: ${theme.colors.white};
  }
`;
