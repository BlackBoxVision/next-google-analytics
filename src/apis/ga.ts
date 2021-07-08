type WindowWithGtag = Window &
  typeof globalThis & {
    gtag?: any;
  };

export const ga = {
  pageview: (url: string, id: string) => {
    const global: WindowWithGtag = window;

    global?.gtag?.("config", id, {
      page_path: url,
    });
  },
  event: ({ action, params }: any) => {
    const global: WindowWithGtag = window;

    global?.gtag?.("event", action, params);
  },
};
