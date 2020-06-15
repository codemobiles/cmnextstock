import React, { ReactElement } from "react";
import { GetServerSideProps } from "next";

interface Props {
  id: string;
}

export default function Update({ id }: Props): ReactElement {
  return (
    <div>
      <h1>Update ; {id}</h1>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      id: context.query.id,
    },
  };
};
