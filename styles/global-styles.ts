import { createGlobalStyle } from "styled-components";

import { theme } from "@styles/theme";

export const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${theme.colors.background};
  }
  
  body {
    color: ${theme.colors.white};
    padding: 0;
    margin: 0;
    line-height: 1.5;
    font-family: "Pretendard", sans-serif;

    h1 {
      font-size: 48px;
      font-weight: 900;
      text-align: center;
      margin-bottom: -8px;
      
      @media ${(props) => props.theme.mqbp.pablet} {
        font-size: 32px;
      }
    }

    h2 {
      font-size: 24px;
      font-weight: 300;
      text-align: center;
      opacity: 0.54;
      
      @media ${(props) => props.theme.mqbp.pablet} {
        font-size: 16px;
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
      padding: 48px 0 96px;
    }

    .wrapper {
      margin: 0 auto;

      @media ${(props) => props.theme.mqbp.desktop} {
        padding: 0 64px;
      }

      @media ${(props) => props.theme.mqbp.tablet} {
        padding: 0 32px;
      }

      @media ${(props) => props.theme.mqbp.pablet} {
        padding: 0 16px;
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
