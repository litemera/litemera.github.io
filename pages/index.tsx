import React from "react";

import { NextPage } from "next";
import { css } from "styled-jsx/css";

import Footer from "@components/index/Footer";
import DownloadBtn from "@components/misc/DownloadBtn";
import MetaHead from "@components/misc/MetaHead";
import {
  DOMAIN,
  TITLE_EN,
  TITLE_KO,
  DESCRIPTION,
  FACEBOOK_USERNAME,
  INSTAGRAM_USERNAME,
  TWITTER_USERNAME,
} from "@utils/constants";

const style = css`
  .index {
    margin: 96px auto 0;
    text-align: center;
  }

  .index > div {
    display: inline-block;
  }

  h1 {
    margin-bottom: -16px;
  }

  @media screen and (max-width: 320px) {
    .index {
      margin: 64px auto 0;
      text-align: center;
    }
  }
`;

const Index: NextPage = () => {
  const jsonLdData = `{
      "@context": "https://schema.org/",
      "@type": "Organization",
      "name": "${TITLE_EN}",
      "url": "${DOMAIN}",
      "sameAs": [
        "https://www.facebook.com/${FACEBOOK_USERNAME}",
        "https://www.instagram.com/${INSTAGRAM_USERNAME}",
        "https://twitter.com/${TWITTER_USERNAME}",
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
      <div className="index">
        <div>
          <img
            width="96px"
            height="96px"
            alt={TITLE_EN}
            src="/images/launcher.svg"
          />
          <h1>{TITLE_EN}</h1>
          <h2>
            {DESCRIPTION} - {TITLE_KO}
          </h2>
          <DownloadBtn />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Index;
