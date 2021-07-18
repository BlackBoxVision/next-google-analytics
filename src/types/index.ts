import React from "react";

// Components

type GoogleAnalyticsProps = {
  id: string;
};

export type GoogleAnalyticsComponent = React.FC<GoogleAnalyticsProps>;

// Hooks

export type UseGoogleAnalyticsHook = (id: string) => void;

// Api

export type GoogleAnalyticsApi = {
  pageview: (url: string, id: string) => void;
  event: (name: string, params: Record<string, any>) => void;
};
