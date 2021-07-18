import React from "react";
import Head from "next/head";

import { useGoogleAnalytics } from "../../hooks/useGoogleAnalytics";

type GoogleAnalyticsLegacyComponent = React.FC<GoogleAnalyticsLegacyProps>;
type GoogleAnalyticsLegacyProps = {
  id: string;
};

export const GoogleAnalyticsLegacy: GoogleAnalyticsLegacyComponent = ({
  id,
}) => {
  useGoogleAnalytics(id);

  if (!id) {
    console.warn(
      `[GoogleAnalyticsLegacy]: ID is missing, please, provide a valid Google Analytics ID`
    );
    return null;
  }

  return (
    <Head>
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
    </Head>
  );
};

GoogleAnalyticsLegacy.displayName = "GoogleAnalyticsLegacy";
