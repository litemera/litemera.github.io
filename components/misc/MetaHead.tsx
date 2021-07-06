import React from "react";

import Head from "next/head";

import { DOMAIN, TITLE, DESCRIPTION, KEYWORDS } from "@utils/constants";

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
      <title>{TITLE}</title>

      <meta name="title" content={TITLE} />
      <meta name="description" content={DESCRIPTION} />
      <meta name="keywords" content={KEYWORDS} />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, viewport-fit=cover"
      />

      <meta property="og:title" content={TITLE} />
      <meta property="og:site_name" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/images/meta.jpg" />
      <meta property="og:image:alt" content={DESCRIPTION} />
      <meta property="og:url" content={domain} />

      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:image" content="/images/meta.jpg" />
      <meta name="twitter:image:src" content="/images/meta.jpg" />
      <meta name="twitter:image:alt" content={DESCRIPTION} />

      {children}

      <link rel="canonical" href={domain} />
    </Head>
  );
};

export default MetaHead;
