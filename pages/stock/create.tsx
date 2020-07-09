import React, { ReactElement } from "react";
import Header from "../../components/layouts/header";
import Menu from "../../components/layouts/menu";
import Layout from "../../components/layouts/layout";
import MaterialTable, { Action } from "material-table";
import { products } from "../api/dummy";
import { Typography, makeStyles } from "@material-ui/core";
import Moment from "react-moment";
import NumberFormat from "react-number-format";
import { Edit, DeleteOutline } from "@material-ui/icons";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { TextField } from "formik-material-ui";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions";
import Router from "next/router";
import CircularProgress from "@material-ui/core/CircularProgress";
import { StockCreateReducer } from "../../types/stockCreate.reducer.types";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
  },
  field: {
    marginTop: 16,
  },
  card: {
    padding: 20,
  },
}));

interface Props {}

export default function StockCreate({}: Props): ReactElement {
  const classes = useStyles();
  const stockCreateReducer = useSelector((state) => state.stockCreateReducer);
  const dispatch = useDispatch();

  const showPreviewImage = (values) => {
    if (values.file_obj) {
      return (
        <img src={values.file_obj} style={{ height: 100, marginTop: 16 }} />
      );
    }
  };

  const showForm = ({ values, setFieldValue, isValid, dirty }) => {
    return (
      <Form>
        <Card className={classes.card} elevation={10}>
          <CardContent>
            <Typography gutterBottom variant="h3">
              Create Stock
            </Typography>

            <Field
              className={classes.field}
              fullWidth
              component={TextField}
              name="name"
              type="text"
              label="Name"
            />
            <br />
            <Field
              className={classes.field}
              fullWidth
              component={TextField}
              name="price"
              type="number"
              label="Price"
            />

            <Field
              className={classes.field}
              fullWidth
              component={TextField}
              name="stock"
              type="number"
              label="Stock"
            />

            <div>{showPreviewImage(values)}</div>

            <div className={classes.field}>
              <img
                src="/static/img/ic_photo.png"
                style={{ width: 25, height: 20 }}
              />
              <span
                style={{ color: "#00B0CD", marginLeft: 10, marginRight: 10 }}
              >
                Add Picture
              </span>
              <input
                type="file"
                onChange={(e) => {
                  e.preventDefault();
                  setFieldValue("file", e.target.files[0]); // for upload
                  setFieldValue(
                    "file_obj",
                    URL.createObjectURL(e.target.files[0])
                  ); // for preview image
                }}
                name="image"
                click-type="type1"
                className="picupload"
                multiple
                accept="image/*"
                id="files"
                style={{ padding: "20px 0" }}
              />
            </div>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={!(isValid && dirty) || stockCreateReducer.isFetching}
            >
              Create
              {stockCreateReducer.isFetching && (
                <CircularProgress
                  color="secondary"
                  size={20}
                  style={{ marginLeft: 8 }}
                />
              )}
            </Button>
            <Button
              onClick={() => {
                Router.back();
              }}
            >
              Cancel
            </Button>
          </CardActions>
        </Card>
      </Form>
    );
  };

  return (
    <Layout>
      <Formik
        validate={(values) => {
          let errors: any = {};
          if (!values.name) errors.name = "Enter name";
          if (values.stock <= 0) errors.stock = "Enter stock";
          if (!values.price) errors.price = "Enter price";
          return errors;
        }}
        initialValues={{ name: "", price: 10, stock: 100 }}
        onSubmit={(values: any, { setSubmitting }) => {
          let formData = new FormData();
          formData.append("name", values.name);
          formData.append("price", values.price);
          formData.append("stock", values.stock);
          formData.append("image", values.file);
          dispatch(actions.createStock(formData));
        }}
      >
        {(props) => showForm(props)}
      </Formik>
    </Layout>
  );
}
