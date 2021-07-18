# Next Google Analytics [![npm version](https://badge.fury.io/js/%40blackbox-vision%2Fnext-google-analytics.svg)](https://badge.fury.io/js/%40blackbox-vision%2Fnext-google-analytics) [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

:rocket: Integrate Google Analytics in next.js with ease

## Installation

### NPM

```bash
npm i @blackbox-vision/next-google-analytics
```

### YARN

```bash
yarn add @blackbox-vision/next-google-analytics
```

## Integration Steps

1. Generate a Google Analytics account if you don't have one.

2. Get the Google Analytics tracking ID.

3. Create a `.env.local` with following content:

```bash
NEXT_PUBLIC_GOOGLE_ANALYTICS=your_tracking_id
```

3. Create a custom `app` and add the following contents:

```js
+ import { GoogleAnalytics } from '@blackbox-vision/next-google-analytics';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
```

## Track events

You can track custom events with this API by doing the following:

```js
import { googleAnalytics } from "@blackbox-vision/next-google-analytics";

googleAnalytics.event("my_event", {
  my_param: "xyz",
});
```

## Compatibility

We're supporting next.js v11 only for now, but we've a `GoogleAnalyticsLegacy` component in the works and intentions to support older versions of next.
