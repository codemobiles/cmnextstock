import React, { ReactElement } from "react";
import Layout from "../../components/layouts/layout";
import { GetServerSideProps } from "next";

interface Props {
  data: number[];
}

export default function StockEdit({ data }: Props): ReactElement {
  return (
    <Layout>
      <h1>Edit</h1>
      <span>{JSON.stringify(data)}</span>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: { data: [1, 2, 3, 4, 5, parseInt(context.query.id.toString())] },
  };
};
