const User = require('../models/User')
// Sign Up
exports.signup = async (req, res) => {
  try {
    //  Fetch data form req ki body
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      accountType,
    } = req.body

    // Validate Process
    if (!firstName || !lastName || !email || !password || !accountType) {
      return res.status(403).json({
        success: false,
        message: "All fields are required"
      })
    }

    // Password Matching
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password does not matched, it should be same!"
      })
    }

    //check user existance
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already registered!"
      })
    }

    // Entry create in db
    await User.create({
      firstName,
      lastName,
      email,
      password,
      accountType,
      profileImage: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
    })
    // return res
    return res.status(200).json({
      success: true,
      message: "User is registered successfully"
    })

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      error: error.message,
      success: false,
      message: "Getting error while registering user!"
    })
  }
};

// Login