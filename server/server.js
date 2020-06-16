const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ result: "ok" });
});

app.listen(8085, () => {
  console.log("Backend is ready!");
});
