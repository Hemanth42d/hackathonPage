const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    hackathonId: { type: mongoose.Schema.Types.ObjectId, ref: "Hackathon" },
    teamId: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },
    title: String,
    description: String,
    githubRepo: String,
    deploymentLink: String,
    techStack: [String],
    screenshots: [String],
    // status: {
    //   type: String,
    //   enum: ["submitted", "under review", "selected", "rejected"],
    //   default: "submitted",
    // },
    // rating: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
