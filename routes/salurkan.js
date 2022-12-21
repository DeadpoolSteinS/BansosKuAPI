const express = require("express");
const salurkanRouter = express.Router();
const { Salurkan } = require("../models/salurkan");

salurkanRouter.get("/api/salurkans/", async (req, res) => {
  try {
    const salurkans = await Salurkan.find({}).exec();
    res.json(salurkans);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

salurkanRouter.post("/api/add-salurkan/", async (req, res) => {
  try {
    const { tujuan, pesan, tema, jargon } = req.body;

    let salurkan = new Salurkan({
      tujuan,
      pesan,
      tema,
      jargon,
    });

    salurkan = await salurkan.save();
    res.json(salurkan);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = salurkanRouter;
