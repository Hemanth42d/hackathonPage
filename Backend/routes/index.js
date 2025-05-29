const express = require("express");
const router = express.Router();
const userModel = require("../models/user-schema");

router.get("/", async (req, res) => {
  let user = await userModel.find();
  res.send(user[0].myHackathons);
});

module.exports = router;
