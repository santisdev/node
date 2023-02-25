const path = require("path");

const bodyParser = require("body-parser");
const express = require("express");

const db = require("./util/database");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/error");

// async function testdb() {
//   const { rows } = await db.query("SELECT * FROM ecommerce.products");
//   console.log(rows[0]);
// }

// testdb();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404);

app.listen(3000);
