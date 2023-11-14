// import { Route, Router } from "react-router-dom";
// import DashboardApp from "./components/DashboardApp";
// import Sidebar from "./components/Sidebar";

import { Route, Routes } from 'react-router-dom';
import HomePage from './components/layoutHome/home/HomePage';
import Cart from './components/layoutHome/Cart';
import Checkout from './components/layoutHome/CheckOut';
import NavbarHome from './components/layoutHome/NavbarHome';
import Footer from './components/layoutHome/Footer';
import ShopSideBar from './components/layoutHome/ShopSideBar/ShopSideBar';
import { UseContext } from './components/layoutHome/UseContext';

function App() {

  return (
    <UseContext>
      <div className="wrapper fixed__footer">
        <header id="header" className="htc-header">
          <NavbarHome />
        </header>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/sidebar" element={<ShopSideBar />} />
        </Routes>
        <div className="htc__foooter__area">
          <Footer />
        </div>
      </div>
    </UseContext>
  )
}

export default App