import React from "react";

import Head from "next/head";

import {
  DOMAIN,
  TITLE_EN,
  APP_FULL_NAME,
  DESCRIPTION_FULL,
  KEYWORDS,
} from "@utils/constants";

interface MetaHeadProps {
  domain?: string;
  children?: any;
}

const MetaHead: React.FC<MetaHeadProps> = ({
  domain = DOMAIN,
  children,
}: MetaHeadProps) => {
  return (
    <Head>
      <title>{APP_FULL_NAME}</title>

      <meta name="title" content={`${APP_FULL_NAME}`} />
      <meta name="description" content={DESCRIPTION_FULL} />
      <meta name="keywords" content={KEYWORDS} />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, viewport-fit=cover"
      />

      <meta property="og:title" content={TITLE_EN} />
      <meta property="og:site_name" content={APP_FULL_NAME} />
      <meta property="og:description" content={DESCRIPTION_FULL} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/images/meta.jpg" />
      <meta property="og:image:alt" content={DESCRIPTION_FULL} />
      <meta property="og:url" content={domain} />

      <meta name="twitter:title" content={TITLE_EN} />
      <meta name="twitter:description" content={DESCRIPTION_FULL} />
      <meta name="twitter:image" content="/images/meta.jpg" />
      <meta name="twitter:image:src" content="/images/meta.jpg" />
      <meta name="twitter:image:alt" content={DESCRIPTION_FULL} />

      {children}

      <link rel="canonical" href={domain} />
    </Head>
  );
};

export default MetaHead;
