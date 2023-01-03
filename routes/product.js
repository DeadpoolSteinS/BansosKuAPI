const express = require("express");
const productRouter = express.Router();
const { Product } = require("../models/product");

const { User } = require("../models/user");
const mongoose = require("mongoose");
const toId = mongoose.Types.ObjectId;

productRouter.get("/api/products/", async (req, res) => {
  try {
    //const products = await Product.find({}).exec();
    const products = await Product.find({}).populate({
      path: "user_id",
      model: "User",
    });

    res.json(products);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

productRouter.post("/api/add-product/", async (req, res) => {
  try {
    const { jenis, merk, satuan, kuantitas, userid } = req.body;
    //console.log("tes1" + userid);
    var user_id = toId(userid);
    let product = new Product({
      jenis,
      merk,
      satuan,
      kuantitas,
      user_id,
    });
    //console.log("tes2");
    product = await product.save();
    // console.log("tes3");
    res.json(product);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = productRouter;
