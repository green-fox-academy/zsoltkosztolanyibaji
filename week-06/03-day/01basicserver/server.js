"use strict";

const express = require("express");
const app = express();

const PORT = 3000;
app.use(express.static("assets"));
app.listen(PORT, () => console.log(`I am listening to port ${PORT}`));
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});
