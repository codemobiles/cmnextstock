import React, { ReactElement } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Head from "next/head";

interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  })
);

export default function index({}: Props): ReactElement {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Home</h1>
      <div className={classes.root}>
        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
        </Button>

        <div>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            className={classes.margin}
          >
            Small
          </Button>
          <Button
            variant="outlined"
            size="medium"
            color="primary"
            className={classes.margin}
          >
            Medium
          </Button>
          <Button
            variant="outlined"
            size="large"
            color="primary"
            className={classes.margin}
          >
            Large
          </Button>

          <div>
            <IconButton
              aria-label="delete"
              className={classes.margin}
              size="small"
            >
              <ArrowDownwardIcon fontSize="inherit" />
            </IconButton>
            <IconButton aria-label="delete" className={classes.margin}>
              <DeleteIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="delete" className={classes.margin}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete" className={classes.margin}>
              <DeleteIcon fontSize="large" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
