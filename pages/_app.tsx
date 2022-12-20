import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { AnimatePresence, motion } from "framer-motion";

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
          <AnimatePresence>
            <motion.div
              key={router.route}
              initial="pageInit"
              animate="pageAnimate"
              exit="pageExit"
              variants={{
                pageInit: { y: 50, opacity: 0 },
                pageAnimate: { y: 0, opacity: 1 },
                // pageExit: { y: 150, opacity: 0 },
              }}
              transition={{
                y: { delay: 0.1, duration: 0.7, ease: "linear" },
                opacity: { delay: 0.1, duration: 0.5, ease: "easeIn" },
              }}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </MainLayout>
      </ThemeContextProvider>
    </React.Fragment>
  );
}

export default MyApp;
