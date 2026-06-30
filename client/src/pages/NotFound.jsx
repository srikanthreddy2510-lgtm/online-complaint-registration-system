import { Link } from "react-router-dom";

const NotFound = () => {

    return (

        <div className="container mt-5 text-center">

            <h1 className="display-1 text-danger">

                404

            </h1>

            <h3>

                Page Not Found

            </h3>

            <p>

                The page you are looking for does not exist.

            </p>

            <Link

                to="/dashboard"

                className="btn btn-primary"

            >

                Go to Dashboard

            </Link>

        </div>

    );

};

export default NotFound;