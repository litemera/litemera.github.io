/* eslint-disable @next/next/no-sync-scripts */
import React from "react";

import Document, { Html, Head, Main, NextScript } from "next/document";

import {
  TITLE_EN,
  FACEBOOK_APP_ID,
  FACEBOOK_PAGE_ID,
  FACEBOOK_DOMAIN_ID,
  TWITTER_USERNAME,
  KAKAO_APP_KEY,
  GA_TRACKING_ID,
  FACEBOOK_PIXEL_ID,
} from "@utils/constants";

const GtagScript = () => {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};

const Pixel = () => (
  <>
    <script
      async
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${FACEBOOK_PIXEL_ID}');
          fbq('track', 'PageView');
        `,
      }}
    />
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<img height="1" width="1" style="display: none" src="https://www.facebook.com/tr?id=${FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1"></img>`,
      }}
    />
  </>
);

class Litemera extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <GtagScript />

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

          <meta name="author" content={TITLE_EN} />
          <meta property="og:locale" content="ko_KR" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={`@${TWITTER_USERNAME}`} />
          <meta name="twitter:creator" content={`@${TWITTER_USERNAME}`} />
          <meta name="twitter:card" content="summary_large_image" />

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

          <Pixel />
        </Head>
        <body>
          <Main />
          <NextScript />

          <script src="https://developers.kakao.com/sdk/js/kakao.min.js" />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.Kakao.init("${KAKAO_APP_KEY}")`,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default Litemera;
