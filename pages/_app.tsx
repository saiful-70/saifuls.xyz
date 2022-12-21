import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { AnimatePresence } from "framer-motion";

import { ThemeContextProvider } from "../lib/ThemeContext";
import MainLayout from "../components/layout/MainLayout";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <React.Fragment>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="afterInteractive" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>

      <ThemeContextProvider>
        <MainLayout>
          <AnimatePresence
            mode="wait"
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </MainLayout>
      </ThemeContextProvider>
    </React.Fragment>
  );
}

export default MyApp;
