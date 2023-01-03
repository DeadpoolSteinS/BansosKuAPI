const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  jenis: {
    type: String,
    required: true,
  },
  merk: {
    type: String,
    required: true,
  },
  satuan: {
    type: String,
    required: true,
  },
  kuantitas: {
    type: String,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = { Product, productSchema };
