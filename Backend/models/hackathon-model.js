const mongoose = require("mongoose");

const prizeSchema = new mongoose.Schema({
  title: String,
  description: String,
  amount: Number,
});

const hackathonSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    image: String,
    organizer: {
      name: String,
      email: String,
    },
    startDate: Date,
    endDate: Date,
    registrationDeadline: Date,
    location: String,
    eligibility: [String],
    prizes: [prizeSchema],
    announcementDate: Date,
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hackathon", hackathonSchema);
