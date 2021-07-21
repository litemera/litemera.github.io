import "@styles/globals.scss";
import React from "react";

import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "@styles/global-styles";
import { theme } from "@styles/theme";

const Litemera = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default Litemera;
