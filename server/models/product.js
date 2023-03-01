const Cart = require("./cart");
const db = require("../util/database");

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.query(
      "INSERT INTO ecommerce.products (title, price, description, image_url) VALUES ($1, $2, $3, $4) RETURNING *",
      [this.title, this.price, this.description, this.imageUrl]
    );
  }

  static deleteById(id) {}

  static fetchAll() {
    //with static you can call this function for the whole class
    return db.query("SELECT * FROM ecommerce.products");
  }

  static findById(id) {
    return db.query(
      "SELECT * FROM ecommerce.products AS products WHERE products.id = $1",
      [id]
    );
  }
};
