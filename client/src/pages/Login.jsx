import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const loginUser = async (e) => {

        e.preventDefault();

        try {

            const response = await api.post("/users/login", {

                email,
                password

            });

            localStorage.setItem(

                "token",

                response.data.token

            );

            localStorage.setItem(

                "user",

                JSON.stringify(response.data.user)

            );

            toast.success(response.data.message);

            if (response.data.user.role === "Admin") {

                navigate("/admin");

            }

            else {

                navigate("/dashboard");

            }

        }

        catch (error) {

            console.log(error);

            toast.error(

                error.response?.data?.message ||

                "Login Failed"

            );

        }

    };

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-6">

                    <div className="card shadow">

                        <div className="card-header bg-primary text-white text-center">

                            <h2>

                                Online Complaint Registration System

                            </h2>

                        </div>

                        <div className="card-body">

                            <form onSubmit={loginUser}>

                                <div className="mb-3">

                                    <label className="form-label">

                                        Email

                                    </label>

                                    <input

                                        type="email"

                                        className="form-control"

                                        placeholder="Enter Email"

                                        value={email}

                                        onChange={(e) =>

                                            setEmail(e.target.value)

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

                                        onChange={(e) =>

                                            setPassword(e.target.value)

                                        }

                                        required

                                    />

                                </div>

                                <button

                                    type="submit"

                                    className="btn btn-primary w-100"

                                >

                                    Login

                                </button>

                            </form>

                            <div className="text-center mt-3">

                                <p>

                                    Don't have an account?

                                </p>

                                <Link

                                    to="/register"

                                    className="btn btn-success"

                                >

                                    Register Here

                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default Login;