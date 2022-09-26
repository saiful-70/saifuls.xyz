import "../styles/globals.css";
import type { AppProps } from "next/app";

import { ColorModeContextProvider } from "../lib/ColorModeContext";
import MainLayout from "../layout/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ColorModeContextProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ColorModeContextProvider>
  );
}

export default MyApp;
