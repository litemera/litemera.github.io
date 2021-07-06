import "@styles/globals.scss";
import React from "react";

import type { AppProps } from "next/app";

const Litemera = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default Litemera;
