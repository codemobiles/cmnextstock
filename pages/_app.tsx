import React, { ReactElement } from "react";
import App from "next/app";
import { AppProps } from "next/app";
import Head from "next/head";
import "../public/assets/css/index.css";
import Nav from "../components/nav";

interface Props {}

function CMApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default CMApp;
