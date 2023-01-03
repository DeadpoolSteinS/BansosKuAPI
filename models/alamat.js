const mongoose = require("mongoose");

const alamatSchema = mongoose.Schema({
  provinsi: {
    type: String,
    required: true,
  },
  kota: {
    type: String,
    required: true,
  },
  kecamatan: {
    type: String,
    required: true,
  },
  desa: {
    type: String,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Alamat = mongoose.model("Alamat", alamatSchema);
module.exports = { Alamat, alamatSchema };
