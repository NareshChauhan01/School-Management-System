const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    role: {
      type: String,
      enum: ["Admin", "Teacher", "Student"],
      required: true
    },
    additionalDetails: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Profile'
    },
    profileImage: {
      type: String,
      required: true,
      default: ''
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    token: {
      type: String
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("User", userSchema);