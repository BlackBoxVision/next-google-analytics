import { useEffect } from "react";
import { useRouter } from "next/router";

import { UseGoogleAnalyticsHook } from "../types";

import { googleAnalytics } from "../apis/ga";

export const useGoogleAnalytics: UseGoogleAnalyticsHook = (id) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (!id) {
        console.warn(
          `[useGoogleAnalytics]: ID is missing, please, provide a valid Google Analytics ID`
        );
        return;
      }

      googleAnalytics.pageview(id, url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [id, router.events]);
};
