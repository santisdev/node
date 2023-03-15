const Product = require("../models/product");

exports.postAddProduct = async (req, res, next) => {
  try {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;
    const product = await req.user.createProduct({
      title: title,
      price: price,
      imageUrl: imageUrl,
      description: description,
    });
    return res.json(product);
  } catch (err) {
    console.log(err);
  }
};

exports.getEditProduct = async (req, res, netx) => {
  try {
    const editMode = req.query.edit;
    const prodId = req.params.productId;

    // const products = await Product.findByPk(prodId);
    const product = await req.user.getProducts({ where: { id: prodId } });
    if (!product) {
      res.status(404);
      return res.json({
        error: "Product not found",
      });
    } else {
      return res.json(product);
    }
  } catch (err) {
    console.log(err);
  }
};

exports.postEditProduct = async (req, res, next) => {
  try {
    const prodId = req.body.id;
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;

    const product = await Product.findByPk(prodId);
    if (product) {
      product.title = title;
      product.imageUrl = imageUrl;
      product.description = description;
      product.price = price;
      const updatedProduct = await product.save();
      return res.json(updatedProduct);
    } else {
      res.status(404);
      return res.json({
        error: "Product not found",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.postDeleteProduct = async (req, res, next) => {
  try {
    const prodId = req.body.id;
    const product = await Product.findByPk(prodId);
    if (product) {
      await product.destroy();
      res.json({
        message: "Product Deleted",
      });
    } else {
      res.status(404);
      return res.json({
        error: "Product not found",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.getAddProducts = async (req, res, next) => {
  const products = await Product.findAll();
  return res.json(products);
};
