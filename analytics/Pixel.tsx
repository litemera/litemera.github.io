import React from "react";

import { FACEBOOK_PIXEL_ID } from "@utils/constants";

interface PixelPropsType {
  id: string;
  children?: any;
}

const Pixel: React.FC<PixelPropsType> = ({
  id = FACEBOOK_PIXEL_ID,
  children,
}: PixelPropsType) => (
  <React.StrictMode>
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
          fbq('init', '${id}');
          fbq('track', 'PageView');
        `,
      }}
    />
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<img height="1" width="1" style="display: none" src="https://www.facebook.com/tr?id=${FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1" />`,
      }}
    />
    {children ? children : null}
  </React.StrictMode>
);

export default Pixel;
