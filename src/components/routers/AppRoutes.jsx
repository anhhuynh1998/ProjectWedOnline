import React from 'react'
import { Route, Routes } from "react-router-dom";
// import Admin from "../components/admin/layouts/Admin";
import Admin from "../../components/admin/layouts/Admin"
import HomeScreen from "../../pages/home/HomeScreen";

const AppRoutes = () => {
    return (
        <><Routes>
            <Route path="/admin/*" element={<Admin />} />
            <Route path="/*" element={<HomeScreen />} />
        </Routes></>
    )
}

export default AppRoutes