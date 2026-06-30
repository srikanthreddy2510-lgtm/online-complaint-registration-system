const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ==========================
// Register User
// ==========================

const registerUser = async (req, res) => {

    try {

        const {

            fullName,
            email,
            phone,
            password

        } = req.body;

        // Check Existing Email

        const existingUser = await User.findOne({

            email

        });

        if (existingUser) {

            return res.status(400).json({

                message: "Email already exists"

            });

        }

        // Hash Password

        const hashedPassword = await bcrypt.hash(

            password,

            10

        );

        // Create User

        const newUser = new User({

            fullName,

            email,

            phone,

            password: hashedPassword

        });

        await newUser.save();

        res.status(201).json({

            message: "User Registered Successfully"

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            message: "Server Error"

        });

    }

};

// ==========================
// Login User
// ==========================

const loginUser = async (req, res) => {

    try {

        const {

            email,
            password

        } = req.body;

        // Check User

        const user = await User.findOne({

            email

        });

        if (!user) {

            return res.status(404).json({

                message: "User Not Found"

            });

        }

        // Compare Password

        const isMatch = await bcrypt.compare(

            password,

            user.password

        );

        if (!isMatch) {

            return res.status(401).json({

                message: "Invalid Password"

            });

        }

        // Generate JWT

        const token = jwt.sign(

            {

                id: user._id,

                role: user.role

            },

            process.env.JWT_SECRET,

            {

                expiresIn: "1d"

            }

        );

        res.status(200).json({

            message: "Login Successful",

            token,

            user: {

                id: user._id,

                fullName: user.fullName,

                email: user.email,

                phone: user.phone,

                role: user.role

            }

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            message: "Server Error"

        });

    }

};

module.exports = {

    registerUser,

    loginUser

};