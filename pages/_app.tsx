import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

import { ThemeContextProvider } from "../lib/ThemeContext";
import MainLayout from "../components/layout/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {
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
          <Component {...pageProps} />
        </MainLayout>
      </ThemeContextProvider>
    </React.Fragment>
  );
}

export default MyApp;
