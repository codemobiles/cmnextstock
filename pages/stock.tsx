import React, { ReactElement } from "react";
import Header from "../components/layouts/header";
import Menu from "../components/layouts/menu";
import Layout from "../components/layouts/layout";

interface Props {}

export default function Stock({}: Props): ReactElement {
  return (
    <Layout>
      <h1>Stock</h1>
      <span>1234</span>
    </Layout>
  );
}
