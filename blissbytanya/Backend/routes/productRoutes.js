//this is productroutes.js
import express from "express";
import Product from "../models/product.js";

const router = express.Router();

// ✅ GET all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// ✅ POST new product
router.post("/", async (req, res) => {
  const { name, description, price, image } = req.body;

  try {
    const newProduct = new Product({ name, description, price, image });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error("❌ Product Save Error:", error); // 👈 add this
    res.status(400).json({ message: "Invalid product data", error });
  }
});


export default router;
