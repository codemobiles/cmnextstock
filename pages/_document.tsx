import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core";
import React from "react";

export default class CMDoc extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/img/favicon.png"
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>
        <body style={{ backgroundColor: "#f1f1f1" }}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

CMDoc.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
    styles: [
      <React.Fragment key="styles">
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>,
    ],
  };
};
