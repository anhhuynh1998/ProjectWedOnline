// import CreateProduct from "./components/admin/product/CreateProduct";
import Product from "./components/admin/product/Product";
import ListUserInfo from "./components/user/ListUserInfo";
import Revenue from "./components/admin/revenue/Revenue";
import Cart from "./components/admin/cart/cart";
import AddProduct from "./components/admin/cart/AddProduct";

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
    icon: "fa-solid fa-user-tie",
    component: ListUserInfo,
    layout: "/admin",
  },
  {
    path: "/cart",
    name: "Đơn Hàng",
    icon: "fa-solid fa-cart-shopping",
    component: Cart,
    layout: "/admin",
  },
  {
    path: "/addPro",

    name: "Mua Sản Phẩm",
    icon: "fa-solid fa-vest-patches",  
    component: AddProduct,
    layout: "/admin",
  },
];

export default dashboardRoutes;
