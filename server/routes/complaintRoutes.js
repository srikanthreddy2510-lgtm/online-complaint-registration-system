const express = require("express");

const router = express.Router();

const {

    createComplaint,

    getMyComplaints,

    getAllComplaints,

    updateComplaintStatus,

    deleteComplaint

} = require("../controllers/complaintController");

const protect = require("../middleware/authMiddleware");

const upload = require("../middleware/uploadMiddleware");

// ==================================
// Submit Complaint
// ==================================

router.post(

    "/",

    protect,

    upload.single("image"),

    createComplaint

);

// ==================================
// Logged In User Complaints
// ==================================

router.get(

    "/",

    protect,

    getMyComplaints

);

// ==================================
// Admin - Get All Complaints
// ==================================

router.get(

    "/all",

    protect,

    getAllComplaints

);

// ==================================
// Update Complaint Status
// ==================================

router.put(

    "/:id",

    protect,

    updateComplaintStatus

);

// ==================================
// Delete Complaint
// ==================================

router.delete(

    "/:id",

    protect,

    deleteComplaint

);

module.exports = router;