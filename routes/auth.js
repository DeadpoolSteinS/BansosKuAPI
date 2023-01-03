const express = require("express");
const actions = require("../usecase/auth");
const authteRouter = express.Router();

authteRouter.post("/api/adduser", actions.addNew);

authteRouter.post("/api/auth", actions.authenticate);

authteRouter.get("/api/getinfo", actions.getinfo);

module.exports = authteRouter;
