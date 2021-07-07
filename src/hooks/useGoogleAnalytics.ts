import { useEffect } from "react";
import { useRouter } from "next/router";

import { ga as GoogleAnalytics } from "../apis/ga";

export const useGoogleAnalytics = (id: string) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (!id) {
        console.warn(
          `[GoogleAnalyticsApi]: ID is missing, please, provide a valid Google Analytics ID`
        );
        return;
      }

      GoogleAnalytics.pageview(id, url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [id, router.events]);
};
