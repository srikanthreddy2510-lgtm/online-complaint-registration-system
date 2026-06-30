const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {

    try {

        let token;

        if (

            req.headers.authorization &&

            req.headers.authorization.startsWith("Bearer")

        ) {

            token = req.headers.authorization.split(" ")[1];

        }

        if (!token) {

            return res.status(401).json({

                message: "Access Denied. No Token Provided"

            });

        }

        const decoded = jwt.verify(

            token,

            process.env.JWT_SECRET

        );

        const user = await User.findById(decoded.id).select("-password");

        if (!user) {

            return res.status(404).json({

                message: "User Not Found"

            });

        }

        req.user = user;

        next();

    }

    catch (error) {

        console.log(error);

        res.status(401).json({

            message: "Invalid Token"

        });

    }

};

module.exports = protect;