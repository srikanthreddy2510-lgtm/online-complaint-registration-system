const Complaint = require("../models/Complaint");

// ===============================
// Create Complaint
// ===============================

const createComplaint = async (req, res) => {

    try {

        const {

            title,
            description,
            category,
            location

        } = req.body;

        const complaint = new Complaint({

            user: req.user._id,

            title,

            description,

            category,

            location,

            image: req.file ? req.file.filename : ""

        });

        await complaint.save();

        res.status(201).json({

            message: "Complaint Submitted Successfully",

            complaint

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            message: "Server Error"

        });

    }

};

// ===============================
// Get Logged In User Complaints
// ===============================

const getMyComplaints = async (req, res) => {

    try {

        const complaints = await Complaint.find({

            user: req.user._id

        })

        .sort({

            createdAt: -1

        });

        res.status(200).json(

            complaints

        );

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            message: "Server Error"

        });

    }

};

// ===============================
// Get All Complaints (Admin)
// ===============================

const getAllComplaints = async (req, res) => {

    try {

        const complaints = await Complaint.find()

        .populate(

            "user",

            "fullName email phone"

        )

        .sort({

            createdAt: -1

        });

        res.status(200).json(

            complaints

        );

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            message: "Server Error"

        });

    }

};

// ===============================
// Update Complaint Status
// ===============================

const updateComplaintStatus = async (req, res) => {

    try {

        const complaint = await Complaint.findById(

            req.params.id

        );

        if (!complaint) {

            return res.status(404).json({

                message: "Complaint Not Found"

            });

        }

        complaint.status = req.body.status;

        await complaint.save();

        res.status(200).json({

            message: "Complaint Status Updated Successfully"

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            message: "Server Error"

        });

    }

};

// ===============================
// Delete Complaint
// ===============================

const deleteComplaint = async (req, res) => {

    try {

        const complaint = await Complaint.findById(

            req.params.id

        );

        if (!complaint) {

            return res.status(404).json({

                message: "Complaint Not Found"

            });

        }

        await complaint.deleteOne();

        res.status(200).json({

            message: "Complaint Deleted Successfully"

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            message: "Server Error"

        });

    }

};
// ===============================
// Export Controllers
// ===============================

module.exports = {

    createComplaint,

    getMyComplaints,

    getAllComplaints,

    updateComplaintStatus,

    deleteComplaint

};