import React, { ReactElement } from "react";
import App from "next/app";
import { AppProps } from "next/app";
import Head from "next/head";

interface Props {}

function CMApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CMNextStock</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default CMApp;
