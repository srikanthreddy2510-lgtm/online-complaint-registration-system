import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import SubmitComplaint from "../pages/SubmitComplaint";
import MyComplaints from "../pages/MyComplaints";
import AdminDashboard from "../pages/AdminDashboard";
import NotFound from "../pages/NotFound";

import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";

const AppRoutes = () => {

    return (

        <BrowserRouter>

            <Routes>

                {/* Public Routes */}

                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                {/* Protected Routes */}

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/submit-complaint"
                    element={
                        <ProtectedRoute>
                            <SubmitComplaint />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/my-complaints"
                    element={
                        <ProtectedRoute>
                            <MyComplaints />
                        </ProtectedRoute>
                    }
                />

                {/* Admin Route */}

                <Route
                    path="/admin"
                    element={
                        <AdminRoute>
                            <AdminDashboard />
                        </AdminRoute>
                    }
                />

                {/* 404 Page */}

                <Route
                    path="*"
                    element={<NotFound />}
                />

            </Routes>

        </BrowserRouter>

    );

};

export default AppRoutes;