import React, { ReactElement } from "react";
import App from "next/app";
import { AppProps } from "next/app";
import Head from "next/head";
import { wrapper } from "../redux";
import httpClient, { setInterceptor } from "./../utils/httpClient";
import { useDispatch } from "react-redux";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

interface Props {}

function CMApp({ Component, pageProps }: AppProps) {
  // https://material-ui.com/customization/theming/
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#135ab8",
      },
      secondary: {
        main: "#e85f5f",
      },
    },
  });

  setInterceptor(useDispatch());
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

CMApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default wrapper.withRedux(CMApp);
