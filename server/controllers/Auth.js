// Sign Up
exports.signup = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      accountType,
    } = req.body;

    console.log(req.body);

    return res.status(200).json({
      success: true,
      message: "Signup successful",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to sign up.",
    });
  }
};

// Login