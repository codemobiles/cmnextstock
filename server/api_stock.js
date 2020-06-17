const express = require("express");
const products = require("./dummy");
const router = express.Router();

router.get("/product", (req, res) => {
  res.json(products);
});

module.exports = router;
