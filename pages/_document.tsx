import React, { ReactElement } from "react";
import { Html, Head, Main, NextScript, DocumentProps } from "next/document";

interface Props {}

export default function CMDoc({}: DocumentProps) {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// 2. This no longer causes a type error
CMDoc.getInitialProps = async () => {
  return {};
};
