"use strict";

import React from "react";

import Head from "next/head";

import {
  TITLE,
  PAGE_TITLE,
  DESCRIPTION,
  META_KEYWORDS,
  IOS_ID,
  ANDROID_PACKAGE,
  DEEPLINK,
} from "@utils/constants";
import { DOMAIN } from "utils/env";

interface MetaHeadPropsType {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  children?: any;
}

const MetaHead: React.FC<MetaHeadPropsType> = ({
  title = PAGE_TITLE,
  description = `📸 ${DESCRIPTION}`,
  keywords = META_KEYWORDS,
  canonical = DOMAIN,
  children,
}: MetaHeadPropsType) => {
  return (
    <Head>
      <title>{title}</title>

      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, viewport-fit=cover"
      />

      <meta property="og:title" content={TITLE} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/images/meta.jpg" />
      <meta property="og:image:alt" content={description} />
      <meta property="og:url" content={canonical} />

      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/images/meta.jpg" />
      <meta name="twitter:image:src" content="/images/meta.jpg" />
      <meta name="twitter:image:alt" content={description} />

      <meta property="al:ios:url" content={DEEPLINK} />
      <meta property="al:ios:app_store_id" content={IOS_ID} />
      <meta property="al:ios:app_name" content={TITLE} />

      <meta property="al:android:url" content={DEEPLINK} />
      <meta property="al:android:app_name" content={TITLE} />
      <meta property="al:android:package" content={ANDROID_PACKAGE} />
      <meta property="al:web:url" content={canonical} />

      {children ? children : null}

      <link rel="canonical" href={canonical} />
      <link rel="alternate" href={DEEPLINK} />
    </Head>
  );
};

export default MetaHead;
