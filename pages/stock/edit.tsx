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
import { Formik, Form, Field } from "formik";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { TextField } from "formik-material-ui";
import { GetServerSideProps, NextPageContext } from "next";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions";

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

interface Props {
  id: string;
  name: string;
  price: number;
  stock: number;
  image: string;
}

export default function StockEdit({
  id,
  name,
  price,
  stock,
  image,
}: Props): ReactElement {
  const classes = useStyles();
  const stockEditReducer = useSelector((state) => state.stockEditReducer);
  const dispatch = useDispatch();

  const showPreviewImage = (values) => {
    if (values.file_obj) {
      return <img src={values.file_obj} style={{ height: 100 }} />;
    } else if (values.image) {
      return (
        <img
          src={`${process.env.NEXT_PUBLIC_APP_BASE_IMAGE_URL}/${values.image}`}
          style={{ height: 100, marginTop: 20 }}
        />
      );
    }
  };

  const showForm = ({ values, setFieldValue, isValid, dirty }) => {
    return (
      <Form>
        <Card className={classes.card} elevation={10}>
          <CardContent>
            <Typography gutterBottom variant="h3">
              Edit Stock
            </Typography>

            <Field
              className={classes.field}
              fullWidth
              component={TextField}
              name="id"
              disabled
              type="text"
              label="ProductID"
            />
            <br />

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
              disabled={!(isValid && dirty)}
            >
              Edit
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
        enableReinitialize
        initialValues={{ id, name, price, stock, image }}
        onSubmit={(values: any, { setSubmitting }) => {
          let formData = new FormData();
          formData.append("id", values.id);
          formData.append("name", values.name);
          formData.append("price", values.price);
          formData.append("stock", values.stock);
          if (values.file) {
            formData.append("image", values.file);
          }
          dispatch(actions.editStock(formData));
        }}
      >
        {(props) => showForm(props)}
      </Formik>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const result = await actions.doGetStockById(context.query.id);
  return {
    props: {
      ...result,
    },
  };
};
