"use strict";

import React from "react";

import { NextPage } from "next";

import Hero from "@components/index/Hero";
import Introduce from "@components/index/Introduce";
import Mock from "@components/index/Mock";
import MetaHead from "@components/misc/MetaHead";
import Layout from "@layout/index";
import {
  TITLE,
  FACEBOOK_USERNAME,
  INSTAGRAM_USERNAME,
  TWITTER_USERNAME,
} from "@utils/constants";
import { DOMAIN } from "utils/env";

const Index: NextPage = () => {
  const jsonLdData = `{
      "@context": "https://schema.org/",
      "@type": "Organization",
      "name": "${TITLE}",
      "url": "${DOMAIN}",
      "sameAs": [
        "https://www.facebook.com/${FACEBOOK_USERNAME}",
        "https://www.instagram.com/${INSTAGRAM_USERNAME}",
        "https://twitter.com/${TWITTER_USERNAME}"
      ]
    }`;

  return (
    <React.StrictMode>
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
        <Mock />
      </Layout>
    </React.StrictMode>
  );
};

export default Index;
