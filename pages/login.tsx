import React, { ReactElement } from "react";
import { makeStyles, createStyles } from "@material-ui/core";

interface Props {}

const styles = createStyles({
  section: {
    color: "red",
    fontSize: 100,
  },
});

const useStyles = makeStyles(styles);

export default function Login({}: Props): ReactElement {
  const classes = useStyles();

  return (
    <div>
      <h1>Login</h1>
      <div className={classes.section}>test</div>
    </div>
  );
}
