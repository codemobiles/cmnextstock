import React, { ReactElement } from "react";
import Header from "../../components/layouts/header";
import Menu from "../../components/layouts/menu";
import Layout from "../../components/layouts/layout";
import MaterialTable, { Action } from "material-table";
import { products } from "../api/dummy";
import { Typography, makeStyles } from "@material-ui/core";
import Moment from "react-moment";
import NumberFormat from "react-number-format";
import { Edit, DeleteOutline } from "@material-ui/icons";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { TextField } from "formik-material-ui";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions";
import Router from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
  },
  field: {
    marginTop: 16,
  },
  card: {
    padding: 20,
  },
}));

interface Props {}

export default function Report({}: Props): ReactElement {
  const classes = useStyles();
  const stockCreateReducer = useSelector((state) => state.stockCreateReducer);
  const dispatch = useDispatch();

  return (
    <Layout>
      <h1>Report</h1>
    </Layout>
  );
}
