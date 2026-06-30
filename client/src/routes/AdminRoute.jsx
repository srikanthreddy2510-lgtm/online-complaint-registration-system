import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {

    const token = localStorage.getItem("token");

    const user = JSON.parse(localStorage.getItem("user"));

    // User is not logged in
    if (!token) {

        return <Navigate to="/" replace />;

    }

    // User is logged in but not an Admin
    if (user?.role !== "Admin") {

        return <Navigate to="/dashboard" replace />;

    }

    // Admin user
    return children;

};

export default AdminRoute;