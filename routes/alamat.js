const express = require("express");
const alamatRouter = express.Router();
const { Alamat } = require("../models/alamat");

alamatRouter.get("/api/alamats/", async (req, res) => {
  try {
    const alamats = await Alamat.find({}).exec();
    res.json(alamats);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

alamatRouter.post("/api/add-alamat/", async (req, res) => {
  try {
    const { provinsi, kota, kecamatan, desa } = req.body;

    let alamat = new Alamat({
      provinsi,
      kota,
      kecamatan,
      desa,
    });

    alamat = await alamat.save();
    res.json(alamat);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = alamatRouter;
