const Product = require("../models/product");

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const description = req.body.description;
  const price = req.body.price;
  const product = new Product(null, title, imageUrl, description, price);
  product.save();
  res.redirect("/");
};

exports.getEditProduct = (req, res, netx) => {
  const editMode = req.query.edit;
  // if(!editMode) {
  // return res.send("Error")
  // }
  const prodId = req.params.productId;

  Product.findById(prodId, (product) => {
    if (!product) {
      res.status(404);
      return res.send("Error: Product not found");
    } else {
      return res.json(product);
    }
  });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.id;
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const description = req.body.description;
  const price = req.body.price;
  const updatedProduct = new Product(
    prodId,
    title,
    imageUrl,
    description,
    price
  );
  updatedProduct.save();
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product) => {
    Product.deleteById(prodId, product.price);
  });
  return res.json("Product deleted");
};

exports.getAddProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.send(products);
  });
};
