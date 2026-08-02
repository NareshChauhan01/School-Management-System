require("dotenv").config();
const express = require('express')
const app = express();
const PORT = process.env.PORT || 7000
const { connectDB } = require('./config/database');


connectDB();

// Test Route
app.get("/", (req, res) => {
  res.send("School Management System API is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
