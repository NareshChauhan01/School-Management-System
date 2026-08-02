const mongoose = require("mongoose");
require('dotenv').config()

exports.connectDB = () => {
  mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Database connected successfully.");
    })
    .catch((error) => {
      console.error("Failed to connect to the database.");
      console.error(error.message);
      process.exit(1);
    });
};

// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URL);

//     console.log("Database connected successfully.");
//   } catch (error) {
//     console.error("Database connection failed.");
//     console.error(error.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;