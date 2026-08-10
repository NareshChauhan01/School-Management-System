const mongosse = require('mongoose')

const userSchema = new mongosse.Schema(
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
      trim: true,
      required: true,
    },
    accountType: {
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

module.exports = mongosse.module("User", userSchema)