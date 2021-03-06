"use strict";

import React, { useEffect } from "react";

import { NextPage } from "next";
import Router from "next/router";

import MetaHead from "@components/misc/MetaHead";
import { TITLE, IOS_URL, AND_URL } from "@utils/constants";
import { userAgent } from "@utils/index";
import { DOMAIN } from "utils/env";

const AppBridge: NextPage = () => {
  useEffect(() => {
    userAgent(AND_URL, IOS_URL);
    setTimeout(() => {
      Router.push("/");
    }, 1000);
  }, []);

  const title = `Download ${TITLE} app`;

  const jsonLdData = `{
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "${TITLE}",
    "operatingSystem" : [
      "Android",
      "iOS"
    ],
    "applicationCategory": "https://schema.org/MobileApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "KRW"
    }
  }`;

  return (
    <React.StrictMode>
      <MetaHead title={title} canonical={`${DOMAIN}/app`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `${jsonLdData}`,
          }}
        />
      </MetaHead>
    </React.StrictMode>
  );
};

export default AppBridge;
