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
    </React.Fragment>
  );
}
