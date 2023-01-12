const http = require("http");

const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("This always runs");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("In the add middleware");
  res.send("<h1>The 'Add product' Page</h1>");
});

// app.use("/", (req, res, next) => {
//   console.log("In the another middleware");
//   res.send("<h1>Hello</h1>");
// });

app.listen(3000);
