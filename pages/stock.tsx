import React, { ReactElement } from "react";
import Header from "../components/layouts/header";
import Menu from "../components/layouts/menu";
import Layout from "../components/layouts/layout";
import MaterialTable from "material-table";
import { products } from "./api/dummy";

interface Props {}

export default function Stock({}: Props): ReactElement {
  const columns = [
    {
      title: "ID",
      field: "id",
    },
    {
      title: "IMAGE",
      field: "image",
    },
    {
      title: "NAME",
      field: "name",
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
