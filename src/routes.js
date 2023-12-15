// import CreateProduct from "./components/admin/product/CreateProduct";
import Product from "./components/admin/product/Product";
import ListUserInfo from "./components/user/ListUserInfo";
import Revenue from "./components/admin/revenue/Revenue";
import Cart from "./components/admin/cart/cart";

const dashboardRoutes = [
  {
    path: "/revenue",
    name: "Doanh Thu",
    icon: "fa-regular fa-file-lines",
    component: Revenue,
    layout: "/admin",
  },
  {
    path: "/product",
    name: "Sản Phẩm",
    icon: "fa-solid fa-list",
    component: Product,
    layout: "/admin",
  },
  {
    path: "/userinfo",
    name: "Khách Hàng",
    icon: "fa-solid fa-list",
    component: ListUserInfo,
    layout: "/admin",
  },
  {
    path: "/cart",
    name: "Giỏ Hàng",
    icon: "fa-solid fa-cart-shopping",
    component: Cart,
    layout: "/admin",
  },
];

export default dashboardRoutes;
