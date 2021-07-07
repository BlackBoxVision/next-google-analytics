import React from "react";
import Head from "next/head";

type GoogleAnalyticsLegacyComponent = React.FC<GoogleAnalyticsLegacyProps>;
type GoogleAnalyticsLegacyProps = {
  id: string;
};

export const GoogleAnalyticsLegacy: GoogleAnalyticsLegacyComponent = ({
  id,
}) => {
  if (!id) {
    console.warn(
      `[GoogleAnalyticsLegacy]: ID is missing, please, provide a valid Google Analytics ID`
    );
    return null;
  }

  return (
    <Head>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`} />
    </Head>
  );
};

GoogleAnalyticsLegacy.displayName = "GoogleAnalyticsLegacy";
