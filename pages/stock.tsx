import React, { ReactElement } from "react";
import Header from "../components/layouts/header";
import Menu from "../components/layouts/menu";
import Layout from "../components/layouts/layout";
import MaterialTable from "material-table";

interface Props {}

export default function Stock({}: Props): ReactElement {
  return (
    <Layout>
      <MaterialTable
        columns={[
          { title: "No", field: "no" },
          { title: "Name", field: "name" },
        ]}
        data={[
          { no: 1, name: "Angular" },
          { no: 2, name: "React" },
          { no: 3, name: "Vue" },
        ]}
        title="Courses"
      />
    </Layout>
  );
}
