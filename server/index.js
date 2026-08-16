require("dotenv").config();
const express = require('express')
const app = express();

const PORT = process.env.PORT || 7000
const { connectDB } = require('./config/database');
const authRoutes = require('./routes/User')

connectDB();

app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("School Management System API is running...");
});

// Authentication Routes
app.use('/api/v1/auth', authRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
