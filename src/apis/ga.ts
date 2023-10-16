import { GoogleAnalyticsApi } from '../types';

export const googleAnalytics: GoogleAnalyticsApi = {
  pageview: (url, id) => {
    (window as any)?.gtag?.('config', id, {
      page_path: url,
    });
  },
  event: (name, params) => {
    (window as any)?.gtag?.('event', name, params);
  },
};
