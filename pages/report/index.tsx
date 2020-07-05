import React, { ReactElement } from "react";
import Header from "../../components/layouts/header";
import Menu from "../../components/layouts/menu";
import Layout from "../../components/layouts/layout";
import MaterialTable, { Action } from "material-table";
import { products } from "../api/dummy";
import { Typography, makeStyles } from "@material-ui/core";
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
import { Line, Bar, Pie } from "react-chartjs-2";

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

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [15, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function Report({}: Props): ReactElement {
  const classes = useStyles();
  const stockCreateReducer = useSelector((state) => state.stockCreateReducer);
  const dispatch = useDispatch();

  return (
    <Layout>
      <div style={{ height: 300 }}>
        <Line
          data={data}
          width={100}
          height={100}
          options={{ maintainAspectRatio: false }}
        />
      </div>
      <div style={{ height: 300 }}>
        <Bar
          data={data}
          width={100}
          height={100}
          options={{ maintainAspectRatio: false }}
        />
      </div>

      <div style={{ height: 300 }}>
        <Pie
          data={data}
          width={100}
          height={100}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    </Layout>
  );
}
