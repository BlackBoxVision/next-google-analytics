import React from "react";
import Script from "next/script";

type GoogleAnalyticsComponent = React.FC<GoogleAnalyticsProps>;
type GoogleAnalyticsProps = {
  id: string;
};

export const GoogleAnalytics: GoogleAnalyticsComponent = ({ id }) => {
  if (!id) {
    console.warn(
      `[GoogleAnalytics]: ID is missing, please, provide a valid Google Analytics ID`
    );
    return null;
  }

  return (
    <Script
      strategy={"afterInteractive"}
      src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
    />
  );
};

GoogleAnalytics.displayName = "GoogleAnalytics";
