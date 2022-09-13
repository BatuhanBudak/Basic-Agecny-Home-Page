import "../styles/globals.css";
import "../styles/header.css";
import "../styles/home.css";
import "../styles/intro-home.css";
import "../styles/logo-fade.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
