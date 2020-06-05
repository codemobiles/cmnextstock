import React, { ReactElement, ReactNode } from "react";
import Header from "./header";
import Menu from "./menu";
import Footer from "./footer";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props): ReactElement {
  return (
    <React.Fragment>
      <Header />
      <Menu />
      {children}
      <Footer />
      <style jsx global>
        {`
          body {
            margin: 0px;
          }
        `}
      </style>
    </React.Fragment>
  );
}
