import { NavLink } from "react-router-dom"


const NavbarHome = () => {
    
    return (
        
        <div
            id="sticky-header-with-topbar"
            className="mainmenu__area sticky__header">
              <div className="container">
              <div className="row">
                  <div className="col-md-2 col-lg-2 col-sm-3 col-xs-3">
                      <div className="logo">
                          <a href="/home">
                              <img src="images/logo/uniqlo.png" alt="logo" />
                          </a>
                      </div>
                  </div>
                  {/* Start MAinmenu Ares */}
                  <div className="col-md-8 col-lg-8 col-sm-6 col-xs-6">
                      <nav className="mainmenu__nav hidden-xs hidden-sm">
                          <ul className="main__menu" >
                              <li className="drop" >
                                  <a href="/home">Trang Chủ</a>
                              </li>
                              {/* Nam */}
                              <li className="drop">
                                  <a href="about.html" >Nam</a>
                                  <ul className="dropdown mega_dropdown">
                                      {/* Start Single Mega MEnu */}
                                      <li>
                                          <a className="mega__title" href="shop.html">
                                              Áo
                                          </a>
                                          <ul className="mega__item">
                                              <li>
                                                  <a href="shop.html">Tất Cả Áo</a>
                                              </li>
                                              <li>
                                                  <a href="shop-sidebar.html">Áo Sơ mi</a>
                                              </li>
                                              <li>
                                                  <a href="cart.html">Áo Thun</a>
                                              </li>
                                              <li>
                                                  <a href="checkout.html">Áo Khoác</a>
                                              </li>
                                              <li>
                                                  <a href="wishlist.html">Áo Khoác</a>
                                              </li>
                                          </ul>
                                      </li>
                                      {/* End Single Mega MEnu */}
                                      {/* Start Single Mega MEnu */}
                                      <li>
                                          <a className="mega__title" href="shop.html">
                                              Quần
                                          </a>
                                          <ul className="mega__item">
                                              <li>
                                                  <a href="#">Tất Cả Quần</a>
                                              </li>
                                              <li>
                                                  <a href="#">Quần Jean</a>
                                              </li>
                                              <li>
                                                  <a href="wishlist.html">Quần Tây</a>
                                              </li>
                                              <li>
                                                  <a href="cart.html">Quần Short</a>
                                              </li>
                                              <li>
                                                  <a href="checkout.html">Quần Nỉ</a>
                                              </li>
                                          </ul>
                                      </li>
                                      {/* End Single Mega MEnu */}
                                      {/* Start Single Mega MEnu */}
                                      <li>
                                          <a className="mega__title" href="shop.html">
                                              Phụ Kiện
                                          </a>
                                          <ul className="mega__item">
                                              <li>
                                                  <a href="#">Mũ</a>
                                              </li>
                                              <li>
                                                  <a href="#">Túi</a>
                                              </li>
                                          </ul>
                                      </li>
                                      {/* End Single Mega MEnu */}
                                  </ul>
                              </li>

                              {/* Nữ */}
                              <li className="drop">
                                  <a href="about.html" >Nữ</a>
                                  <ul className="dropdown mega_dropdown">
                                      {/* Start Single Mega MEnu */}
                                      <li>
                                          <a className="mega__title" href="shop.html">
                                              Áo
                                          </a>
                                          <ul className="mega__item">
                                              <li>
                                                  <a href="shop.html">Tất Cả Áo</a>
                                              </li>
                                              <li>
                                                  <a href="shop-sidebar.html">Áo Sơ mi</a>
                                              </li>
                                              <li>
                                                  <a href="cart.html">Áo Thun</a>
                                              </li>
                                              <li>
                                                  <a href="checkout.html">Áo Len</a>
                                              </li>
                                              <li>
                                                  <a href="wishlist.html">Áo Hoodie</a>
                                              </li>
                                              <li>
                                                  <a href="wishlist.html">Áo Lông Cừu</a>
                                              </li>
                                          </ul>
                                      </li>
                                      {/* End Single Mega MEnu */}
                                      {/* Start Single Mega MEnu */}
                                      <li>
                                          <a className="mega__title" href="shop.html">
                                              Quần
                                          </a>
                                          <ul className="mega__item">
                                              <li>
                                                  <a href="#">Tất Cả Quần</a>
                                              </li>
                                              <li>
                                                  <a href="#">Quần Jean</a>
                                              </li>
                                              <li>
                                                  <a href="wishlist.html">Quần Tây</a>
                                              </li>
                                              <li>
                                                  <a href="cart.html">Quần Ống Rộng</a>
                                              </li>
                                              <li>
                                                  <a href="checkout.html">Quần Nỉ</a>
                                              </li>
                                              <li>
                                                  <a href="checkout.html">Quần Legging</a>
                                              </li>
                                          </ul>
                                      </li>
                                      <li>
                                          <a className="mega__title" href="shop.html">
                                              Đầm & Chân Váy
                                          </a>
                                          <ul className="mega__item">
                                              <li>
                                                  <a href="#">Váy</a>
                                              </li>
                                              <li>
                                                  <a href="#">Đầm</a>
                                              </li>
                                          </ul>
                                      </li>
                                      {/* End Single Mega MEnu */}
                                      {/* Start Single Mega MEnu */}
                                      <li>
                                          <a className="mega__title" href="shop.html">
                                              Phụ Kiện
                                          </a>
                                          <ul className="mega__item">
                                              <li>
                                                  <a href="#">Túi</a>
                                              </li>
                                              <li>
                                                  <a href="#">Mũ</a>
                                              </li>
                                              <li>
                                                  <a href="#">Kính</a>
                                              </li>
                                              <li>
                                                  <a href="#">Giày</a>
                                              </li>
                                          </ul>
                                      </li>
                                      {/* End Single Mega MEnu */}
                                  </ul>
                              </li>

                              {/* sidebar */}
                              <li>
                                  <a href="/sidebar" style={{ textDecoration: "none" }}>Shop Sidebar</a>
                              </li>

                              <li>
                                  <a href="contact.html" style={{ textDecoration: "none" }}>Liên Hệ</a>
                              </li>
                          </ul>
                      </nav>

                  </div>
                  {/* End MAinmenu Ares */}
                  <div className="col-md-2 col-sm-4 col-xs-3">
                      <ul className="menu-extra">

                          <li style={{ paddingRight: "0px" }}>
                              <span className="ti-user col-md-2" data-toggle="modal"
                                  data-target="#exampleLogin" />
                          </li>
                          
                          <NavLink to={`/cart`}>
                              <li className="cart__menu">
                                  <span className="ti-shopping-cart col-md-2" />
                              </li>
                          </NavLink>

                          <li className="toggle__menu hidden-xs hidden-sm">
                              <span className="ti-menu" />
                          </li>
                      </ul>
                  </div>
                  
              </div>
              <div className="mobile-menu-area" />
          </div>
            

        </div>
    )
}
export default NavbarHome