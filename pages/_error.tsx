import React, { ReactElement } from "react";

interface Props {
  statusCode: string;
}

export default function Error({ statusCode }: Props): ReactElement {
  return (
    <div>
      <h1>Error {statusCode}</h1>
    </div>
  );
}

// Called in server-side
Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  if (statusCode == 404) {
    res.writeHead(301, { Location: "/" });
    res.end();
    return {};
  } else {
    return { statusCode };
  }
};
