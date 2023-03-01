const Cart = require("../models/cart");
const Product = require("../models/product");

exports.getProducts = async (req, res, next) => {
  try {
    const { rows } = await Product.fetchAll();
    return res.json(rows);
  } catch (err) {
    console.log(err);
  }
};

exports.getProduct = async (req, res, next) => {
  const prodId = req.params.productId;
  try {
    const { rows } = await Product.findById(prodId);
    return res.json(rows);
  } catch (err) {
    console.log(err);
  }
};

exports.getCart = (req, res, next) => {
  const cartProducts = [];
  Cart.getCart((cart) => {
    Product.fetchAll((products) => {
      for (product of products) {
        const cartProductData = cart.products.find(
          (prod) => prod.id === product.id
        );
        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty });
        }
      }
      return res.json(cartProducts);
    });
  });
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product) => {
    Cart.DeleteProduct(prodId, product.price);
    return res.json(product);
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product) => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect("/");
};

exports.getOrders = (req, res, next) => {};

exports.getCheckout = (req, res, next) => {};
