import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Product from './Product'
import CreateProduct from './CreateProduct'
import DashboardAdmin from '../DashboardAdmin'
// import Dashboard from './Dashboard'

const ProductRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='' element={<DashboardAdmin />}>

                </Route>


            </Routes>
        </div>
    )


}

export default ProductRouter