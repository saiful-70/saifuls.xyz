import "../styles/globals.css";
import type { AppProps } from "next/app";

import { ColorModeContextProvider } from "../lib/ColorModeContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ColorModeContextProvider>
      <Component {...pageProps} />
    </ColorModeContextProvider>
  );
}

export default MyApp;
