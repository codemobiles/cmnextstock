import React, { ReactElement } from "react";
import { GetServerSideProps } from "next";

interface Props {
  id: string;
  action: string;
}

export default function Action({ action, id }: Props): ReactElement {
  return (
    <div>
      <h1>
        Action - {action} ; {id}
      </h1>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      id: context.query.id,
      action: context.query.action,
    },
  };
};
