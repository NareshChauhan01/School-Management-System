const Profile = require('../models/Profile');
const User = require('../models/User');
const bcrupt = require('bcrypt');


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
      role,
    } = req.body

    // Validate Process
    if (!firstName || !lastName || !email || !password || !role) {
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
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already registered!"
      })
    }

    // Hash Password
    const hashedPassword = await bcrupt.hash(password, 15);

    // Profile Creation
    // const profileDetails = await Profile.create({
    //   gender: null,
    //   dateOfBirth: null,
    //   bloodGroup: null,
    //   address: null,
    //   city: null,
    //   state: null,
    //   country: null,
    //   postalCode: null
    // });

    const profileDetails = await Profile.create({});

    // Entry create in db
    await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role,
      profileImage: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
      additionalDetails: profileDetails._id,
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
exports.login = async (req, res) => {
  try {
    // Fetch data from req ki body

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error occurred while logging in.",
      error: error.message,
    });
  }
}