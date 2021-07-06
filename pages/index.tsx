import React from "react";

import { NextPage } from "next";
import { css } from "styled-jsx/css";

import DownloadBtn from "@components/DownloadBtn";
import MetaHead from "@components/MetaHead";
import { DOMAIN, TITLE, DESCRIPTION } from "@utils/constants";

const style = css`
  .body {
    margin: 96px auto 0;
    text-align: center;
  }

  .body > div {
    display: inline-block;
  }

  img {
  }

  h1 {
    margin-bottom: -16px;
  }
`;

const Index: NextPage = () => {
  const jsonLdData = `{
      "@context": "https://schema.org/",
      "@type": "Organization",
      "name": "${TITLE}",
      "url": "${DOMAIN}",
      "sameAs": [
        "https://github.com/litemera"
      ]
    }`;

  return (
    <>
      <style jsx>{style}</style>
      <MetaHead>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `${jsonLdData}`,
          }}
        />
      </MetaHead>
      <div className="body">
        <div>
          <img alt={TITLE} src="/images/launcher.svg" />
          <h1>{TITLE}</h1>
          <h3>{DESCRIPTION}</h3>
          <DownloadBtn />
        </div>
      </div>
    </>
  );
};

export default Index;
