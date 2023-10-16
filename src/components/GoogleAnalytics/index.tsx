import React from 'react';
import Script from 'next/script';

import { GoogleAnalyticsComponent } from '../../types';

import { useGoogleAnalytics } from '../../hooks/useGoogleAnalytics';

export const GoogleAnalytics: GoogleAnalyticsComponent = ({ id }) => {
  useGoogleAnalytics(id);

  if (!id) {
    console.warn(
      `[GoogleAnalytics]: ID is missing, please, provide a valid Google Analytics ID`
    );
    return null;
  }

  return (
    <>
      <Script
        strategy={'afterInteractive'}
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
      />
      <Script
        strategy={'afterInteractive'}
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
    </>
  );
};

GoogleAnalytics.displayName = 'GoogleAnalytics';
