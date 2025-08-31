//this is product.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    image: { type: String }, // yaha tum image ka URL store kar sakte ho
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
