type WindowWithGtag = Window &
  typeof globalThis & {
    gtag?: any;
  };

export const pageview = (url: string, id: string) => {
  const global: WindowWithGtag = window;

  global.gtag("config", id, {
    page_path: url,
  });
};

export const event = ({ action, params }: any) => {
  const global: WindowWithGtag = window;

  global.gtag("event", action, params);
};
