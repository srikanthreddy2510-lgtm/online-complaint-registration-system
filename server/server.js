const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const complaintRoutes = require("./routes/complaintRoutes");

const app = express();

// ==============================
// Middleware
// ==============================

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Static Folder for Uploaded Images

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ==============================
// MongoDB Connection
// ==============================

mongoose.connect(process.env.MONGODB_URI)

.then(() => {

    console.log("✅ MongoDB Connected Successfully");

})

.catch((error) => {

    console.log("❌ MongoDB Connection Failed");

    console.log(error);

});

// ==============================
// Routes
// ==============================

app.use("/api/users", userRoutes);

app.use("/api/complaints", complaintRoutes);

// ==============================
// Home Route
// ==============================

app.get("/", (req, res) => {

    res.status(200).json({

        success: true,

        message: "Online Complaint Registration System Backend Running",

        version: "1.0.0",

        author: "Srikanth Reddy"

    });

});

// ==============================
// Invalid Route
// ==============================

app.use((req, res) => {

    res.status(404).json({

        success: false,

        message: "API Route Not Found"

    });

});

// ==============================
// Start Server
// ==============================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`🚀 Server Running on Port ${PORT}`);

});