import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

const Register = () => {

    const navigate = useNavigate();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const registerUser = async (e) => {

        e.preventDefault();

        try {

            const response = await api.post("/users/register", {

                fullName,
                email,
                phone,
                password

            });

            toast.success(response.data.message);

            navigate("/");

        }

        catch (error) {

            console.log(error);

            toast.error(

                error.response?.data?.message ||

                "Registration Failed"

            );

        }

    };

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-6">

                    <div className="card shadow">

                        <div className="card-header bg-success text-white text-center">

                            <h2>

                                User Registration

                            </h2>

                        </div>

                        <div className="card-body">

                            <form onSubmit={registerUser}>

                                <div className="mb-3">

                                    <label className="form-label">

                                        Full Name

                                    </label>

                                    <input

                                        type="text"

                                        className="form-control"

                                        placeholder="Enter Full Name"

                                        value={fullName}

                                        onChange={(e)=>

                                            setFullName(e.target.value)

                                        }

                                        required

                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">

                                        Email

                                    </label>

                                    <input

                                        type="email"

                                        className="form-control"

                                        placeholder="Enter Email"

                                        value={email}

                                        onChange={(e)=>

                                            setEmail(e.target.value)

                                        }

                                        required

                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">

                                        Phone Number

                                    </label>

                                    <input

                                        type="text"

                                        className="form-control"

                                        placeholder="Enter Phone Number"

                                        value={phone}

                                        onChange={(e)=>

                                            setPhone(e.target.value)

                                        }

                                        required

                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">

                                        Password

                                    </label>

                                    <input

                                        type="password"

                                        className="form-control"

                                        placeholder="Enter Password"

                                        value={password}

                                        onChange={(e)=>

                                            setPassword(e.target.value)

                                        }

                                        required

                                    />

                                </div>

                                <button

                                    type="submit"

                                    className="btn btn-success w-100"

                                >

                                    Register

                                </button>

                            </form>

                            <div className="text-center mt-3">

                                <p>

                                    Already have an account?

                                </p>

                                <Link

                                    to="/"

                                    className="btn btn-primary"

                                >

                                    Login

                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default Register;