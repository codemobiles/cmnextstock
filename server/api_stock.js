const express = require("express");
const router = express.Router();
const product = require("./models/product");
const Sequelize = require("sequelize");
const constants = require("./constant");
const formidable = require("formidable");
const path = require("path");
const fs = require("fs-extra");
const Op = Sequelize.Op;

router.get("/product", async (req, res) => {
  const data = await product.findAll({});
  res.json(data);
});

module.exports = router;
