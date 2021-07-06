import React from "react";

import Head from "next/head";
import { css } from "styled-jsx/css";

import { TITLE } from "@utils/constants";

const style = css`
  img {
  }
`;

const Index = () => {
  return (
    <>
      <style jsx>{style}</style>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={TITLE} />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <div>
        <div>
          <img alt={TITLE} src="/images/launcher.svg" />
          <h1>{TITLE}</h1>
        </div>
      </div>
    </>
  );
};

export default Index;
