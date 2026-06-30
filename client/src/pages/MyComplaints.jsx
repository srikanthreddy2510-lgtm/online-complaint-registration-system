import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";
import { toast } from "react-toastify";

const MyComplaints = () => {

    const [complaints, setComplaints] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {

        fetchComplaints();

    }, []);

    const fetchComplaints = async () => {

        try {

            const response = await api.get("/complaints");

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

    if (loading) {

        return (

            <>
                <Navbar />

                <div className="container mt-5 text-center">

                    <div className="spinner-border text-primary"></div>

                    <p className="mt-3">

                        Loading Complaints...

                    </p>

                </div>

            </>

        );

    }

    const filteredComplaints = complaints.filter((complaint) =>

        complaint.title
            .toLowerCase()
            .includes(search.toLowerCase())

    );

    return (

        <>

            <Navbar />

            <div className="container mt-4">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <h2>

                        My Complaints

                    </h2>

                    <span className="badge bg-primary fs-6">

                        Total : {filteredComplaints.length}

                    </span>

                </div>

                <div className="mb-4">

                    <input

                        type="text"

                        className="form-control"

                        placeholder="Search Complaint..."

                        value={search}

                        onChange={(e)=>setSearch(e.target.value)}

                    />

                </div>

                {

                    filteredComplaints.length === 0 ?

                    (

                        <div className="alert alert-warning text-center">

                            No Complaints Found

                        </div>

                    )

                    :

                    (

                        <div className="row">

                            {

                                filteredComplaints.map((complaint)=>(

                                    <div
                                        className="col-md-6 mb-4"
                                        key={complaint._id}
                                    >

                                        <div className="card shadow h-100">

                                            {

                                                complaint.image &&

                                                (

                                                    <img

                                                            src={`https://online-complaint-registration-system-cigw.onrender.com/uploads/${complaint.image}`}

                                                        alt="Complaint"

                                                        className="card-img-top"

                                                        style={{

                                                            height:"220px",

                                                            objectFit:"cover"

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

                                            </div>

                                        </div>

                                    </div>

                                ))

                            }

                        </div>

                    )

                }

            </div>

        </>

    );

};

export default MyComplaints;