const express = require("express");
const router = express.Router();
const Hackathon = require("../models/hackathon-model");

router.get("/hackathons", async (req, res) => {
  try {
    const hackathons = await Hackathon.find();
    res.json(hackathons);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
