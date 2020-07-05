import React, { ReactElement } from "react";
import App from "next/app";
import { AppProps } from "next/app";
import Head from "next/head";
import { wrapper } from "../redux";
import httpClient, { setInterceptor } from "./../utils/httpClient";
import { useDispatch } from "react-redux";

interface Props {}

function CMApp({ Component, pageProps }: AppProps) {

  setInterceptor(useDispatch());
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

CMApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default wrapper.withRedux(CMApp);
