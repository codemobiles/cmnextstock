import React, { ReactElement } from "react";
import Header from "../components/layouts/header";
import Menu from "../components/layouts/menu";
import Layout from "../components/layouts/layout";
import MaterialTable from "material-table";
import { products } from "./api/dummy";
import { Typography } from "@material-ui/core";

interface Props {}

export default function Stock({}: Props): ReactElement {
  const columns = [
    {
      title: "ID",
      render: (item) => (
        <Typography variant="body1" color="secondary">
          {item.id}
        </Typography>
      ),
    },
    {
      title: "IMAGE",
      field: "image",
    },
    {
      title: "NAME",
      cellStyle: { minWidth: 700 },
      render: (item) => <Typography variant="body1">{item.name}</Typography>,
    },
    {
      title: "PRICE",
      field: "price",
    },
    {
      title: "STOCK",
      field: "stock",
    },
    {
      title: "CREATED",
      field: "updatedAt",
    },
  ];

  return (
    <Layout>
      <MaterialTable columns={columns} data={products} title="Courses" />
    </Layout>
  );
}
