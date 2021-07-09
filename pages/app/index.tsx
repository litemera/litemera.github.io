import React, { useEffect } from "react";

import { NextPage } from "next";
import Router from "next/router";

import MetaHead from "@components/misc/MetaHead";
import {
  DOMAIN,
  TITLE_EN,
  META_KEYWORDS,
  IOS_ID,
  IOS_URL,
  ANDROID_PACKAGE,
  AND_URL,
  DEEPLINK,
} from "@utils/constants";
import { userAgent } from "@utils/index";

const AppBridge: NextPage = () => {
  useEffect(() => {
    userAgent(AND_URL, IOS_URL);
    setTimeout(() => {
      Router.push("/");
    }, 1000);
  }, []);

  const title = `${TITLE_EN} 앱 다운받기`;

  const jsonLdData = `{
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "${TITLE_EN}",
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
      <MetaHead
        title={title}
        keywords={META_KEYWORDS}
        canonical={`${DOMAIN}/app`}
      >
        <meta property="al:ios:url" content={DEEPLINK} />
        <meta property="al:ios:app_store_id" content={`${IOS_ID}`} />
        <meta property="al:ios:app_name" content={TITLE_EN} />
        <meta property="al:android:url" content={DEEPLINK} />
        <meta property="al:android:app_name" content={TITLE_EN} />
        <meta property="al:android:package" content={ANDROID_PACKAGE} />
        <link rel="alternate" href={DEEPLINK} />
        <meta property="al:web:url" content={`${DOMAIN}`} />
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
