import { Schema, models, model } from "mongoose";

const ProductSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  category: String,
  stock: Number,
});

const Product = models?.Product || model("Product", ProductSchema);

export default Product;
