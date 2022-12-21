const express = require("express");
const productRouter = express.Router();
const { Product } = require("../models/product");

productRouter.get("/api/products/", async (req, res) => {
  try {
    const products = await Product.find({}).exec();
    res.json(products);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

productRouter.post("/api/add-product/", async (req, res) => {
  try {
    const { jenis, merk, satuan, kuantitas } = req.body;

    let product = new Product({
      jenis,
      merk,
      satuan,
      kuantitas,
    });

    product = await product.save();
    res.json(product);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = productRouter;
