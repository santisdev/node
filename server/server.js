const path = require("path");

const bodyParser = require("body-parser");
const express = require("express");

const sequelize = require("./util/database");
const Product = require("./models/product");
const User = require("./models/user");
const Cart = require("./models/cart");
const CartItem = require("./models/cart-item");
const Order = require("./models/order");
const OrderItem = require("./models/order-item");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/error");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(async (req, res, next) => {
  try {
    const user = await User.findByPk(1);
    if (user) {
      req.user = user;
      next();
    }
  } catch (err) {
    console.log(err);
  }
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404);

Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product); //foreign key on Product
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, { through: OrderItem });

sequelize
  .sync()
  // .sync({ force: true })
  .then(async (result) => {
    let user = await User.findByPk(1);
    if (!user) {
      const user = await User.create({
        name: "Dummy",
        email: "email@email.com",
      });
      await user.createCart();
      console.log("Tables created successfully!! ");
    }
    app.listen(3000);
  })
  .catch((error) => {
    console.error("Unable to create tables ", error);
  });
