import React, { ReactElement, useState } from "react";
import Header from "../../components/layouts/header";
import Menu from "../../components/layouts/menu";
import Layout from "../../components/layouts/layout";
import MaterialTable, { Action, MTableToolbar } from "material-table";
import { products } from "../api/dummy";
import { Typography, Chip, Button, Paper } from "@material-ui/core";
import Moment from "react-moment";
import NumberFormat from "react-number-format";
import { Edit, DeleteOutline } from "@material-ui/icons";
import Router from "next/router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import stockActions from "../../redux/actions";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

interface Props {}

export default function Stock({}: Props): ReactElement {
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const handleClickOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    {
      title: "ID",
      field: "id",
      render: (item) => <Typography variant="body1">{item.id}</Typography>,
    },
    {
      title: "IMAGE",
      cellStyle: { padding: 5 },
      render: (item) => (
        <img
          src={`${process.env.NEXT_PUBLIC_APP_BASE_IMAGE_URL}/${
            item.image
          }?version=${Math.random().toString()}`}
          style={{ width: 50, height: 50, borderRadius: "5%" }}
        />
      ),
    },
    {
      title: "NAME",
      field: "name",
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
      icon: () => <Edit color="secondary" style={{ color: "#91979c" }} />,
      tooltip: "Edit",
      onClick: (event, rowData) => {
        Router.push(`/stock/edit?id=${rowData.id}`);
      },
    },
    {
      icon: () => <DeleteOutline color="secondary" />,
      iconProps: { color: "action" },
      tooltip: "Delete",
      onClick: (event, rowData) => {
        handleClickOpen(rowData);
      },
    },
  ];

  const showDeletionConfirmDlg = () => {
    return selectedItem ? (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Are you sure to delete this item Id : {selectedItem.id}?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img
                src={`${process.env.NEXT_PUBLIC_APP_BASE_IMAGE_URL}/${
                  selectedItem.image
                }?version=${Math.random().toString()}`}
                style={{ width: 50, height: 50, borderRadius: "5%" }}
              />
              <span style={{ marginLeft: 20 }}>{selectedItem.name}</span>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              dispatch(stockActions.deleteStock(selectedItem.id, dispatch));
              handleClose();
            }}
            color="primary"
            autoFocus
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    ) : null;
  };

  const stockListReducer = useSelector((state) => state.stockListReducer);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(stockActions.feedStockList());
  }, []);

  return (
    <Layout>
      <MaterialTable
        columns={columns}
        data={stockListReducer.result ? stockListReducer.result : []}
        title="Stock"
        options={{
          search: true,
          pageSize: 8,
          rowStyle: (rowData, index) => ({
            backgroundColor: index % 2 == 0 ? "#f8faf9" : "#fff",
          }),
        }}
        actions={actions}
        components={{
          Container: (props) => <Paper {...props} elevation={10} />,
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

      {showDeletionConfirmDlg()}
    </Layout>
  );
}
