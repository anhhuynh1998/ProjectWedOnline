// import { Route, Router } from "react-router-dom";
// import DashboardApp from "./components/DashboardApp";
// import Sidebar from "./components/Sidebar";

import { Route, Routes } from 'react-router-dom';
import HomePage from './components/layoutHome/HomePage';
import Cart from './components/layoutHome/Cart';
import Login from './components/layoutHome/Login';
import Checkout from './components/layoutHome/Checkout';
// import Checkout from './components/layoutHome/CheckOut';


function App() {
  return (

    <div>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />

      </Routes>
      {/* <div className="dashboard">
        <Sidebar />
        <DashboardApp />
      </div>
      <div className="shapes__one"></div>
      <div className="shapes__two"></div>
      <div className="shapes__three"></div> */}
    </div>
  )
}

export default App