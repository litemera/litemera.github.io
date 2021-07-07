import React from "react";

import Head from "next/head";

import {
  DOMAIN,
  TITLE_EN,
  APP_FULL_NAME,
  DESCRIPTION_FULL,
  META_KEYWORDS,
} from "@utils/constants";

interface MetaHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  children?: any;
}

const MetaHead: React.FC<MetaHeadProps> = ({
  title = APP_FULL_NAME,
  description = DESCRIPTION_FULL,
  keywords = META_KEYWORDS,
  canonical = DOMAIN,
  children,
}: MetaHeadProps) => {
  return (
    <Head>
      <title>{title}</title>

      <meta name="title" content={`${title}`} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, viewport-fit=cover"
      />

      <meta property="og:title" content={TITLE_EN} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/images/meta.jpg" />
      <meta property="og:image:alt" content={description} />
      <meta property="og:url" content={canonical} />

      <meta name="twitter:title" content={TITLE_EN} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/images/meta.jpg" />
      <meta name="twitter:image:src" content="/images/meta.jpg" />
      <meta name="twitter:image:alt" content={description} />

      {children}

      <link rel="canonical" href={canonical} />
    </Head>
  );
};

export default MetaHead;
