import React from "react";
import { Route, Navigate, Router } from "react-router-dom";
import { useAuth } from "./AuthProvider";
// import { useAuth } from "../routers/AuthContext";

const PrivateRoute = ({ props }) => {
    const { isLoggedIn } = useAuth();

    return (
        <Router>
            <Route
                {...rest}
                element={isLoggedIn ? <Component /> : <Navigate to="/" />}
            />
        </Router>

    );
};

export default PrivateRoute;
