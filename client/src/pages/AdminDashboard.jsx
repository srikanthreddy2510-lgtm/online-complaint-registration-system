import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";
import { toast } from "react-toastify";

const AdminDashboard = () => {

    const [complaints, setComplaints] = useState([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");

    const [statusFilter, setStatusFilter] = useState("All");

    useEffect(() => {

        fetchComplaints();

    }, []);

    const fetchComplaints = async () => {

        try {

            const response = await api.get("/complaints/all");

            setComplaints(response.data);

        }

        catch (error) {

            console.log(error);

            toast.error("Failed to load complaints");

        }

        finally {

            setLoading(false);

        }

    };

    const updateStatus = async (id, status) => {

        try {

            await api.put(`/complaints/${id}`, {

                status

            });

            toast.success("Complaint Status Updated");

            fetchComplaints();

        }

        catch (error) {

            console.log(error);

            toast.error("Status Update Failed");

        }

    };

    const deleteComplaint = async (id) => {

        const confirmDelete = window.confirm(

            "Delete this complaint?"

        );

        if (!confirmDelete) return;

        try {

            await api.delete(`/complaints/${id}`);

            toast.success("Complaint Deleted");

            fetchComplaints();

        }

        catch (error) {

            console.log(error);

            toast.error("Delete Failed");

        }

    };

    if (loading) {

        return (

            <>

                <Navbar />

                <div className="container mt-5 text-center">

                    <div className="spinner-border text-primary"></div>

                    <h4 className="mt-3">

                        Loading...

                    </h4>

                </div>

            </>

        );

    }

    const filteredComplaints = complaints.filter((complaint) => {

        const searchMatch =

            complaint.title
                .toLowerCase()
                .includes(search.toLowerCase());

        const statusMatch =

            statusFilter === "All"

                ||

            complaint.status === statusFilter;

        return searchMatch && statusMatch;

    });

    const total = complaints.length;

    const pending = complaints.filter(

        c => c.status === "Pending"

    ).length;

    const progress = complaints.filter(

        c => c.status === "In Progress"

    ).length;

    const resolved = complaints.filter(

        c => c.status === "Resolved"

    ).length;

    return (

        <>

            <Navbar />

            <div className="container mt-4">

                <h2 className="text-center mb-4">

                    Admin Dashboard

                </h2>

                <div className="row mb-4">

                    <div className="col-md-3">

                        <div className="card bg-primary text-white shadow">

                            <div className="card-body text-center">

                                <h5>Total</h5>

                                <h2>{total}</h2>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-3">

                        <div className="card bg-warning shadow">

                            <div className="card-body text-center">

                                <h5>Pending</h5>

                                <h2>{pending}</h2>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-3">

                        <div className="card bg-info text-white shadow">

                            <div className="card-body text-center">

                                <h5>In Progress</h5>

                                <h2>{progress}</h2>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-3">

                        <div className="card bg-success text-white shadow">

                            <div className="card-body text-center">

                                <h5>Resolved</h5>

                                <h2>{resolved}</h2>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="row mb-4">

                    <div className="col-md-8">

                        <input

                            type="text"

                            className="form-control"

                            placeholder="Search Complaint"

                            value={search}

                            onChange={(e)=>setSearch(e.target.value)}

                        />

                    </div>

                    <div className="col-md-4">

                        <select

                            className="form-select"

                            value={statusFilter}

                            onChange={(e)=>setStatusFilter(e.target.value)}

                        >

                            <option>All</option>

                            <option>Pending</option>

                            <option>In Progress</option>

                            <option>Resolved</option>

                        </select>

                    </div>

                </div>

                <div className="row">
                                  {

                    filteredComplaints.length === 0 ?

                    (

                        <div className="alert alert-warning text-center">

                            No Complaints Found

                        </div>

                    )

                    :

                    (

                        filteredComplaints.map((complaint) => (

                            <div
                                className="col-md-6 mb-4"
                                key={complaint._id}
                            >

                                <div className="card shadow h-100">

                                    {

                                        complaint.image &&

                                        (

                                            <img

                                                src={`https://online-complaint-registration-system-cigw.onrender.com/uploads//${complaint.image}`}

                                                alt="Complaint"

                                                className="card-img-top"

                                                style={{

                                                    height: "220px",

                                                    objectFit: "cover"

                                                }}

                                            />

                                        )

                                    }

                                    <div className="card-body">

                                        <h4>

                                            {complaint.title}

                                        </h4>

                                        <hr />

                                        <p>

                                            <strong>User :</strong>

                                            {" "}

                                            {complaint.user?.fullName}

                                        </p>

                                        <p>

                                            <strong>Email :</strong>

                                            {" "}

                                            {complaint.user?.email}

                                        </p>

                                        <p>

                                            <strong>Phone :</strong>

                                            {" "}

                                            {complaint.user?.phone}

                                        </p>

                                        <p>

                                            <strong>Description :</strong>

                                            <br />

                                            {complaint.description}

                                        </p>

                                        <p>

                                            <strong>Category :</strong>

                                            {" "}

                                            {complaint.category}

                                        </p>

                                        <p>

                                            <strong>Location :</strong>

                                            {" "}

                                            {complaint.location}

                                        </p>

                                        <p>

                                            <strong>Status :</strong>

                                            {" "}

                                            {

                                                complaint.status === "Resolved"

                                                ?

                                                (

                                                    <span className="badge bg-success">

                                                        Resolved

                                                    </span>

                                                )

                                                :

                                                complaint.status === "In Progress"

                                                ?

                                                (

                                                    <span className="badge bg-info">

                                                        In Progress

                                                    </span>

                                                )

                                                :

                                                (

                                                    <span className="badge bg-warning text-dark">

                                                        Pending

                                                    </span>

                                                )

                                            }

                                        </p>

                                        <div className="d-grid gap-2 mt-3">

                                            <button

                                                className="btn btn-warning"

                                                onClick={() =>

                                                    updateStatus(

                                                        complaint._id,

                                                        "Pending"

                                                    )

                                                }

                                            >

                                                Pending

                                            </button>

                                            <button

                                                className="btn btn-info"

                                                onClick={() =>

                                                    updateStatus(

                                                        complaint._id,

                                                        "In Progress"

                                                    )

                                                }

                                            >

                                                In Progress

                                            </button>

                                            <button

                                                className="btn btn-success"

                                                onClick={() =>

                                                    updateStatus(

                                                        complaint._id,

                                                        "Resolved"

                                                    )

                                                }

                                            >

                                                Resolved

                                            </button>

                                            <button

                                                className="btn btn-danger"

                                                onClick={() =>

                                                    deleteComplaint(

                                                        complaint._id

                                                    )

                                                }

                                            >

                                                Delete Complaint

                                            </button>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))

                    )

                }

            </div>

        </div>

    </>

);

};

export default AdminDashboard;