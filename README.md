# Next Google Analytics

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

```diff
// _app.tsx|js
+ import { GoogleAnalytics, useGoogleAnalytics } from '@blackbox-vision/next-google-analytics';

+  const id = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

function MyApp({ Component, pageProps }) {
+  useGoogleAnalytics(id);

-  return <Component {...pageProps} />
+  return (
+    <>
+      <GoogleAnalytics id={id} />
+      <Component {...pageProps} />
+    </>
+  );
}

export default MyApp
```