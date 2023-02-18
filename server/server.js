const path = require("path");

const bodyParser = require("body-parser");
const express = require("express");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/error");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404);

app.listen(3000);
