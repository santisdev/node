const Product = require("../models/product");

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getAddProducts = (req, res, next) => {
  const products = Product.fetchAll();
  console.log(products);
};
