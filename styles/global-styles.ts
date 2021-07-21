import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

import { theme } from "@styles/theme";

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    background-color: ${theme.colors.background};
  }
  
  body {
    color: #FFFFFF;
    padding: 0;
    margin: 0;
    line-height: 1.5;
    font-family: "Pretendard", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;

    button {
      border: 0;
    }
  
    a {
      color: inherit;
      cursor: pointer;
      text-decoration: none;
    }
  }

  ::-moz-selection {
    color: ${theme.colors.background};
    background: #FFFFFF;
  }

  ::selection {
    color: ${theme.colors.background};
    background: #FFFFFF;
  }

  .section {
    padding: 48px 0 96px;
  }
`;
