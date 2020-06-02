import React, { ReactElement } from "react";
import App from "next/app";
import { AppProps } from "next/app";
import Head from "next/head";

//lek1
interface Props {}

function CMApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CMNextStock</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default CMApp;
