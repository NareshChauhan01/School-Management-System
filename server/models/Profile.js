const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    gender: {
      type: String,
      enum: ["Male", "Eemale", "Other"],
    },

    dateOfBirth: {
      type: Date,
    },

    bloodGroup: {
      type: String,
      enum: [
        "A+",
        "A-",
        "B+",
        "B-",
        "AB+",
        "AB-",
        "O+",
        "O-",
      ],
    },

    address: {
      type: String,
      trim: true,
    },

    city: {
      type: String,
      trim: true,
    },

    state: {
      type: String,
      trim: true,
    },

    country: {
      type: String,
      trim: true,
      default: "India",
    },

    postalCode: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Profile", profileSchema);