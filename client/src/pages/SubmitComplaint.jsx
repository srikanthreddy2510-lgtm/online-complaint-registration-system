import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import api from "../services/api";

const SubmitComplaint = () => {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState("");

    const imageChange = (e) => {

        const file = e.target.files[0];

        setImage(file);

        if (file) {

            setPreview(URL.createObjectURL(file));

        }

    };

    const submitComplaint = async (e) => {

        e.preventDefault();

        try {

            const formData = new FormData();

            formData.append("title", title);
            formData.append("description", description);
            formData.append("category", category);
            formData.append("location", location);

            if (image) {

                formData.append("image", image);

            }

            const response = await api.post(

                "/complaints",

                formData,

                {

                    headers: {

                        "Content-Type": "multipart/form-data"

                    }

                }

            );

            toast.success(response.data.message);

            navigate("/my-complaints");

        }

        catch (error) {

            console.log(error);

            toast.error(

                error.response?.data?.message ||

                "Complaint Submission Failed"

            );

        }

    };

    return (

        <>

            <Navbar />

            <div className="container mt-4">

                <div className="row justify-content-center">

                    <div className="col-md-8">

                        <div className="card shadow">

                            <div className="card-header bg-danger text-white">

                                <h3>

                                    Submit New Complaint

                                </h3>

                            </div>

                            <div className="card-body">

                                <form onSubmit={submitComplaint}>

                                    <div className="mb-3">

                                        <label className="form-label">

                                            Complaint Title

                                        </label>

                                        <input

                                            type="text"

                                            className="form-control"

                                            value={title}

                                            onChange={(e)=>setTitle(e.target.value)}

                                            required

                                        />

                                    </div>

                                    <div className="mb-3">

                                        <label className="form-label">

                                            Description

                                        </label>

                                        <textarea

                                            rows="4"

                                            className="form-control"

                                            value={description}

                                            onChange={(e)=>setDescription(e.target.value)}

                                            required

                                        />

                                    </div>

                                    <div className="mb-3">

                                        <label className="form-label">

                                            Category

                                        </label>

                                        <select

                                            className="form-select"

                                            value={category}

                                            onChange={(e)=>setCategory(e.target.value)}

                                            required

                                        >

                                            <option value="">

                                                Select Category

                                            </option>

                                            <option>

                                                Roads

                                            </option>

                                            <option>

                                                Water

                                            </option>

                                            <option>

                                                Electricity

                                            </option>

                                            <option>

                                                Garbage

                                            </option>

                                            <option>

                                                Drainage

                                            </option>

                                            <option>

                                                Others

                                            </option>

                                        </select>

                                    </div>

                                    <div className="mb-3">

                                        <label className="form-label">

                                            Location

                                        </label>

                                        <input

                                            type="text"

                                            className="form-control"

                                            value={location}

                                            onChange={(e)=>setLocation(e.target.value)}

                                            required

                                        />

                                    </div>

                                    <div className="mb-3">

                                        <label className="form-label">

                                            Upload Image

                                        </label>

                                        <input

                                            type="file"

                                            className="form-control"

                                            accept="image/*"

                                            onChange={imageChange}

                                        />

                                    </div>

                                    {

                                        preview &&

                                        (

                                            <div className="text-center mb-3">

                                                <img

                                                    src={preview}

                                                    alt="Preview"

                                                    className="img-fluid rounded"

                                                    style={{

                                                        maxHeight:"250px"

                                                    }}

                                                />

                                            </div>

                                        )

                                    }

                                    <button

                                        type="submit"

                                        className="btn btn-danger w-100"

                                    >

                                        Submit Complaint

                                    </button>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );

};

export default SubmitComplaint;