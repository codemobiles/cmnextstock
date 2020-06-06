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
      <Footer
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100%",
          backgroundColor: "#EEEEEE",
          color: "black",
          fontSize: 13,
          textAlign: "left",
          height: 30,
          paddingLeft: 8,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          fontWeight: 900,
        }}
      />
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
