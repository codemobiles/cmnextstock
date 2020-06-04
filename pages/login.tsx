import React, { ReactElement } from "react";
import { makeStyles, createStyles } from "@material-ui/core";
import loginStyle from "../styles/login.style";
import loginCSS from "../public/static/css/login.module.css";
interface Props {}

const useStyles = makeStyles(loginStyle);

export default function Login({}: Props): ReactElement {
  const classes = useStyles();

  return (
    <div>
      <h1>Login</h1>
      <div className={classes.title}>Title</div>
      <div className={classes.subtitle}>subtitle</div>
      <div className={loginCSS.section}>subtitle</div>
    </div>
  );
}
