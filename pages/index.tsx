import React from "react";

import { NextPage } from "next";

import Hero from "@components/index/Hero";
import Introduce from "@components/index/Introduce";
import MetaHead from "@components/misc/MetaHead";
import Layout from "@layout/index";
import {
  DOMAIN,
  TITLE,
  FACEBOOK_USERNAME,
  INSTAGRAM_USERNAME,
  TWITTER_USERNAME,
} from "@utils/constants";

const Index: NextPage = () => {
  const jsonLdData = `{
      "@context": "https://schema.org/",
      "@type": "Organization",
      "name": "${TITLE}",
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
      <MetaHead>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `${jsonLdData}`,
          }}
        />
      </MetaHead>
      <Layout>
        <Hero />
        <Introduce />
      </Layout>
    </>
  );
};

export default Index;
