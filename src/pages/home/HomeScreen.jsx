import { UseContext } from "../../components/layoutHome/UseContext";
import NavbarHome from "../../components/layoutHome/NavbarHome";
import { Route, Routes } from "react-router-dom";
import Cart from "../../components/layoutHome/Cart";
import Checkout from "../../components/layoutHome/CheckOut";
import ShopSideBar from "../../components/layoutHome/ShopSideBar/ShopSideBar";
import Login from "../../components/layoutHome/Login";
import Footer from "../../components/layoutHome/Footer";
import HomePage from "../../components/layoutHome/home/HomePage";


const HomeScreen = () => {

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
          <Route path="/sidebar" element={ <ShopSideBar />}
           />

          <Route path="/login" element={<Login />} />
        </Routes>
        <div className="htc__foooter__area">
          <Footer />
        </div>
      </div>
    </UseContext>
  );
};

export default HomeScreen;
