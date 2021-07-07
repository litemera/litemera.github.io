import React from "react";

import Document, { Html, Head, Main, NextScript } from "next/document";

import {
  TITLE,
  FACEBOOK_APP_ID,
  FACEBOOK_PAGE_ID,
  FACEBOOK_DOMAIN_ID,
  TWITTER_USERNAME,
} from "@utils/constants";

class Litemera extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css"
          />

          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta charSet="UTF-8" />

          <meta
            name="google-site-verification"
            content="vceGUL0YSQHRaQfOUAckEH-473T4Oz9w9d0uGvOkBLs"
          />
          <meta property="fb:app_id" content={FACEBOOK_APP_ID} />
          <meta property="fb:page_id" content={FACEBOOK_PAGE_ID} />
          <meta
            name="facebook-domain-verification"
            content={FACEBOOK_DOMAIN_ID}
          />

          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />

          <meta name="author" content={TITLE} />
          <meta property="og:locale" content="ko_KR" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={`@${TWITTER_USERNAME}`} />
          <meta name="twitter:creator" content={`@${TWITTER_USERNAME}`} />
          <meta name="twitter:card" content="summary_large_image" />

          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/favicon/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/favicon/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/favicon/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/favicon/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/favicon/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/favicon/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/favicon/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/favicon/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/favicon/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicon/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/manifest.json" />
          <meta name="msapplication-TileColor" content="#121212" />
          <meta
            name="msapplication-TileImage"
            content="/favicon/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#121212" />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Litemera;
