
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Admin from '../../components/admin/layouts/Admin';
import HomeScreen from '../../pages/home/HomeScreen';
import PrivateRoute from './PrivateRouter';
import HomePage from '../layoutHome/home/HomePage';

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/*" element={<HomeScreen />} />
            <Route
                path="/admin/*"
                element={
                    <Admin />
                }
            />
        </Routes>

    );
};

export default AppRoutes;
