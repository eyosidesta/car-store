import type { AppProps } from 'next/app'
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  <Head>
    <title>Car Store</title>
    <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
  </Head>
  return <Component {...pageProps} />
}

export default MyApp
