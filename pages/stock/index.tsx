import React, { ReactElement, useState } from "react";
import Header from "../../components/layouts/header";
import Menu from "../../components/layouts/menu";
import Layout from "../../components/layouts/layout";
import MaterialTable, { Action, MTableToolbar } from "material-table";
import { products } from "../api/dummy";
import { Typography, Chip, Button } from "@material-ui/core";
import Moment from "react-moment";
import NumberFormat from "react-number-format";
import { Edit, DeleteOutline } from "@material-ui/icons";
import Router from "next/router";
import axios from "axios";

interface Props {}

export default function Stock({}: Props): ReactElement {
  const columns = [
    {
      title: "ID",
      render: (item) => <Typography variant="body1">{item.id}</Typography>,
    },
    {
      title: "IMAGE",
      cellStyle: { padding: 5 },
      render: (item) => (
        <img
          src="http://www.codemobiles.com/biz/images/cm_logo.png?ref=10"
          style={{ width: 50, height: 50, borderRadius: "5%" }}
        />
      ),
    },
    {
      title: "NAME",
      cellStyle: { minWidth: 500 },
      render: (item) => <Typography variant="body1">{item.name}</Typography>,
    },
    {
      title: "PRICE",
      render: (item) => (
        <Typography variant="body1">
          <NumberFormat
            value={item.price}
            displayType={"text"}
            thousandSeparator={true}
            decimalScale={2}
            fixedDecimalScale={true}
            prefix={"฿"}
          />
        </Typography>
      ),
    },
    {
      title: "STOCK",
      render: (item) => (
        <Typography variant="body1">
          <NumberFormat
            value={item.stock}
            displayType={"text"}
            thousandSeparator={true}
            decimalScale={0}
            fixedDecimalScale={true}
            suffix={" pcs"}
          />
        </Typography>
      ),
    },
    {
      title: "CREATED",
      render: (item) => (
        <Typography>
          <Moment format="DD/MM/YYYY">{item.updatedAt}</Moment>
        </Typography>
      ),
    },
  ];

  const actions: Action<any>[] = [
    {
      icon: () => <Edit color="secondary" />,
      tooltip: "Edit",
      onClick: (event, rowData) => {
        // Router.push(`/stock/edit?id=${rowData.id}`)
        // Router.push({
        //   pathname: "/stock/edit",
        //   query: { id: rowData.id },
        // });

        Router.push(`/stock/edit?id=${rowData.id}`);
        // Router.push("/stock/[action]/[id]", "/stock/action2/11");
      },
    },
    {
      icon: () => <DeleteOutline color="secondary" />,
      iconProps: { color: "action" },
      tooltip: "Delete",
      onClick: (event, rowData) => {},
    },
  ];
  const [data, setData] = React.useState([]);

  const loadData = async () => {
    // const result = await axios.get("/api/products");
    const result = await axios.get(
      "http://localhost:8085/api/v2/stock/product"
    );
    // alert(JSON.stringify(result.data));
    setData(result.data);
  };

  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <Layout>
      <MaterialTable
        columns={columns}
        data={data ? data : []}
        title="Stock"
        actions={actions}
        components={{
          Toolbar: (props) => (
            <div>
              <MTableToolbar {...props} />
              <div style={{ padding: "0px 10px" }}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    Router.push("/stock/create");
                  }}
                >
                  Create
                </Button>
              </div>
            </div>
          ),
        }}
      />
    </Layout>
  );
}
