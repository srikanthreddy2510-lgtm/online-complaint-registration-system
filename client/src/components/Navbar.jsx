import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/");

    };

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="container">

                <Link
                    className="navbar-brand fw-bold"
                    to="/dashboard"
                >
                    Online Complaint Registration
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                >

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">

                            <Link
                                className="nav-link"
                                to="/dashboard"
                            >
                                Dashboard
                            </Link>

                        </li>

                        <li className="nav-item">

                            <Link
                                className="nav-link"
                                to="/submit-complaint"
                            >
                                Submit Complaint
                            </Link>

                        </li>

                        <li className="nav-item">

                            <Link
                                className="nav-link"
                                to="/my-complaints"
                            >
                                My Complaints
                            </Link>

                        </li>

                        {

                            user?.role === "Admin" &&

                            (

                                <li className="nav-item">

                                    <Link
                                        className="nav-link"
                                        to="/admin"
                                    >
                                        Admin Dashboard
                                    </Link>

                                </li>

                            )

                        }

                        <li className="nav-item">

                            <button

                                className="btn btn-danger ms-3"

                                onClick={logout}

                            >

                                Logout

                            </button>

                        </li>

                    </ul>

                </div>

            </div>

        </nav>

    );

};

export default Navbar;