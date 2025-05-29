const express = require("express");
const router = express.Router();
const User = require("../models/user-schema");

router.get("/user/:id/hackathons", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId).populate("myHackathons");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user.myHackathons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/user/:id/registered-hackathons", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId).populate("registeredHackathons");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user.registeredHackathons);
    console.log("Registered hackathons:", user.registeredHackathons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
