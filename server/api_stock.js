const express = require("express");
const router = express.Router();

router.get("/product", (req, res) => {
  res.json([1, 2, 3, 4]);
});

module.exports = router;
