import React, { ReactElement } from "react";
import Header from "../components/layouts/header";
import Menu from "../components/layouts/menu";

interface Props {}

export default function Stock({}: Props): ReactElement {
  return (
    <div>
      <Header />
      <Menu />
      <h1>Stock</h1>
    </div>
  );
}
