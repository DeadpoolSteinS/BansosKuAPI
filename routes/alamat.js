const express = require("express");
const alamatRouter = express.Router();
const { Alamat } = require("../models/alamat");

const mongoose = require("mongoose");
const toId = mongoose.Types.ObjectId;

alamatRouter.get("/api/alamats/", async (req, res) => {
  try {
    const alamats = await Alamat.find({}).populate({
      path: "user_id",
      model: "User",
    });
    //res.send("tes");
    res.json(alamats);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

alamatRouter.post("/api/add-alamat/", async (req, res) => {
  // const { tes } = req.body;
  // console.log(tes);
  try {
    const { provinsi, kota, kecamatan, desa, userid } = req.body;
    // const provinsi = "tes";
    // const kota = "tes";
    // const kecamatan = "tes";
    // const desa = "tes";
    var user_id = toId(userid);

    let alamat = new Alamat({
      provinsi,
      kota,
      kecamatan,
      desa,
      user_id,
    });

    alamat = await alamat.save();
    res.json(alamat);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = alamatRouter;
