const mongoose = require("mongoose");

const salurkanSchema = mongoose.Schema({
  tujuan: {
    type: String,
    required: true,
  },
  pesan: {
    type: String,
    required: true,
  },
  tema: {
    type: String,
    required: true,
  },
  jargon: {
    type: String,
    required: true,
  },
});

const Salurkan = mongoose.model("Salurkan", salurkanSchema);
module.exports = { Salurkan, salurkanSchema };
