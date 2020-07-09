import React, { ReactElement, ReactNode } from "react";
import Header from "./header";
import Menu from "./menu";
import Footer from "./footer";
import { Toolbar, Container } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

interface Props {
  children: ReactNode;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      paddingLeft: 280,
      height: "100vh",
      backgroundColor: "#ffffff",
      backgroundPosition: "bottom",
    },
  })
);
export default function Layout({ children }: Props): ReactElement {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Header />
      <Menu />
      <main className={classes.content}>
        <Toolbar />
        <Container>{children}</Container>
      </main>
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
