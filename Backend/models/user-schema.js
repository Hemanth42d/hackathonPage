const mongoose = require("mongoose");
const HackathonSchema = require("../models/hackathon-model");

mongoose.connect(`mongodb://127.0.0.1:27017/HackathonPage`).then(() => {
  console.log("Data base connected");
});

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: String,
    phone: String,
    profilePhoto: String,
    bio: String,
    linkedIn: String,
    github: String,
    portfolio: String,
    myHackathons: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hackathon",
      },
    ],
    registeredHackathons: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Hackathon" },
    ],
    submittedProjects: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

/*
User.findById(userId).populate("myHackathons").exec();
*/
