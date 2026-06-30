import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    return (

        <>

            <Navbar />

            <div className="container mt-5">

                <div className="row">

                    <div className="col-md-12">

                        <div className="card shadow">

                            <div className="card-header bg-primary text-white">

                                <h2>

                                    Welcome, {user?.fullName}

                                </h2>

                            </div>

                            <div className="card-body">

                                <p className="lead">

                                    Welcome to the Online Complaint Registration System.

                                    You can submit complaints, view your submitted

                                    complaints and track their status.

                                </p>

                                <hr />

                                <div className="row">

                                    <div className="col-md-4 mb-3">

                                        <div className="card text-center shadow">

                                            <div className="card-body">

                                                <h4>

                                                    Submit Complaint

                                                </h4>

                                                <p>

                                                    Register a new complaint.

                                                </p>

                                                <button

                                                    className="btn btn-success"

                                                    onClick={() =>

                                                        navigate("/submit-complaint")

                                                    }

                                                >

                                                    Open

                                                </button>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="col-md-4 mb-3">

                                        <div className="card text-center shadow">

                                            <div className="card-body">

                                                <h4>

                                                    My Complaints

                                                </h4>

                                                <p>

                                                    View all submitted complaints.

                                                </p>

                                                <button

                                                    className="btn btn-warning"

                                                    onClick={() =>

                                                        navigate("/my-complaints")

                                                    }

                                                >

                                                    Open

                                                </button>

                                            </div>

                                        </div>

                                    </div>

                                    {

                                        user?.role === "Admin" &&

                                        (

                                            <div className="col-md-4 mb-3">

                                                <div className="card text-center shadow">

                                                    <div className="card-body">

                                                        <h4>

                                                            Admin Dashboard

                                                        </h4>

                                                        <p>

                                                            Manage all complaints.

                                                        </p>

                                                        <button

                                                            className="btn btn-info"

                                                            onClick={() =>

                                                                navigate("/admin")

                                                            }

                                                        >

                                                            Open

                                                        </button>

                                                    </div>

                                                </div>

                                            </div>

                                        )

                                    }

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );

};

export default Dashboard;