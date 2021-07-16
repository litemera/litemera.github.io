import React from "react";

import { GA_TRACKING_ID } from "@utils/constants";

interface GoogleAnalyticsPropsType {
  id: string;
}

const GoogleAnalytics: React.FC<GoogleAnalyticsPropsType> = ({
  id = GA_TRACKING_ID,
}: GoogleAnalyticsPropsType) => {
  return (
    <React.StrictMode>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${id}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </React.StrictMode>
  );
};

export default GoogleAnalytics;
