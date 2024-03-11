import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { NextPage } from "next";
import { ReactElement, ReactNode, useEffect } from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Kanit } from "next/font/google";
import { responsiveFontSizes } from "@mui/material";
import "./i18n";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  // const router = useRouter();

  // useEffect(() => {
  //   let detectedLocale = "en";
  //   const browserLang = navigator.language;
  //   const supportedLocales = ["en", "th"];

  //   if (supportedLocales.includes(browserLang)) {
  //     detectedLocale = browserLang;
  //   }

  //   if (router.pathname === "/register") {
  //   }
  // }, [router.pathname]);

  const getLayout = Component.getLayout || ((page) => page);

  let responsiveFontTheme = responsiveFontSizes(theme);

  return getLayout(
    <ThemeProvider theme={responsiveFontTheme}>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <main className={`${kanit.className}`}>
          <Component {...pageProps} />
        </main>
      </AppRouterCacheProvider>
    </ThemeProvider>
  );
};

export default appWithTranslation(App);
