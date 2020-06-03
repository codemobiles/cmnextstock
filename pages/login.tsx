import React, { ReactElement } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import login from "../public/assets/css/login.js";
interface Props {}

const useStyles = makeStyles(login);

export default function Login({}: Props): ReactElement {
  const classes = useStyles(login);
  return (
    <React.Fragment>
      <div className={classes.section}>lek</div>
    </React.Fragment>
  );
}
