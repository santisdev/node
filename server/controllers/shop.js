const Cart = require("../models/cart");
const CartItem = require("../models/cart-item");
const Product = require("../models/product");
const User = require("../models/user");

exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.findAll();
    return res.json(products);
  } catch (err) {
    console.log(err);
  }
};

exports.getProduct = async (req, res, next) => {
  const prodId = req.params.productId;
  try {
    const product = await Product.findByPk(prodId);
    return res.json(product);
    // const products = await Product.findAll({ where: { id: prodId } });
    // return res.json(products[0]);
  } catch (err) {
    console.log(err);
  }
};

exports.getCart = async (req, res, next) => {
  try {
    const userCart = await req.user.getCart();
    const cartProducts = await userCart.getProducts();
    return res.json(cartProducts);
  } catch (err) {
    console.log(err);
  }

  // const cartProducts = [];
  // Cart.getCart((cart) => {
  //   Product.fetchAll((products) => {
  //     for (product of products) {
  //       const cartProductData = cart.products.find(
  //         (prod) => prod.id === product.id
  //       );
  //       if (cartProductData) {
  //         cartProducts.push({ productData: product, qty: cartProductData.qty });
  //       }
  //     }
  //     return res.json(cartProducts);
  //   });
  // });
};

exports.postCartDeleteProduct = async (req, res, next) => {
  const prodId = req.body.productId;

  const userCart = await req.user.getCart();
  const cartProducts = await userCart.getProducts({ where: { id: prodId } });
  if (Object.keys(cartProducts).length > 0) {
    const product = cartProducts[0];
    product.cartItem.destroy();
    return res.json({ msg: "Product deleted" });
  } else {
    return res.json({ msg: "No matches found" });
  }
};

exports.postCart = async (req, res, next) => {
  try {
    const prodId = req.body.productId;
    const userCart = await req.user.getCart();
    const cartProducts = await userCart.getProducts({ where: { id: prodId } }); //returns a list
    let newQuantity = 1;
    if (Object.keys(cartProducts).length > 0) {
      const product = cartProducts[0];
      const oldQuantity = product.cartItem.quantity;
      newQuantity = oldQuantity + 1;
      await userCart.addProduct(product, {
        through: { quantity: newQuantity },
      });
      return res.json({ msg: "Product added" });
    } else {
      const product = await Product.findByPk(prodId);
      if (product) {
        console.log(product);
        const newCartProduct = await userCart.addProduct(product, {
          through: { quantity: newQuantity },
        });
        return res.json(newCartProduct);
      } else {
        res.status(400).json({ error: "product not found" });
        throw new Error("product not found");
      }
    }
  } catch (err) {
    console.log(err);
  }
  // const prodId = req.body.productId;
  // Product.findById(prodId, (product) => {
  //   Cart.addProduct(prodId, product.price);
  // });
  // res.redirect("/");
};

exports.getOrders = (req, res, next) => {};

exports.getCheckout = (req, res, next) => {};
