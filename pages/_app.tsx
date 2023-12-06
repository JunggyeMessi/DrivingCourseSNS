import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import "../styles/style.css";
import GlobalStyle from "../styles/GlobalStyle";
import { theme } from "../styles/theme";
import Script from "next/script";

declare global {
  interface Window {
    naver: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
      <Script
        strategy="beforeInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`}
      ></Script>
    </ThemeProvider>
  );
}

export default MyApp;
