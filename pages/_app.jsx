import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { Breakpoint, BreakpointProvider } from "react-socks";
import Head from "next/head";
import { DefaultSeo } from "next-seo";

import Main from "../components/layouts/Main";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  return (
    <BreakpointProvider>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultSeo
        title="The Mallard Order"
        description="The Mallard Order is a secret society of ducks, hell-bent on dominating Cardano"
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://themallardorder.io",
          site_name: "The Mallard Order",
        }}
        twitter={{
          handle: "@mallardorder",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />

      <Main>
        <Component {...pageProps} />
      </Main>
    </BreakpointProvider>
  );
}

export default MyApp;
