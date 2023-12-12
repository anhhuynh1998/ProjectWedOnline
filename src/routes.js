// import CreateProduct from "./components/admin/product/CreateProduct";
import Product from "./components/admin/product/Product";
import ListUserInfo from "./components/user/ListUserInfo";
import Revenue from "./components/admin/revenue/Revenue";

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
    icon: "fa-brands fa-houzz",
    component: Product,
    layout: "/admin",
  },
  {
    path: "/userinfo",
    name: "Danh Sách Khách Hàng",
    icon: "fa-solid fa-list",
    component: ListUserInfo,
    layout: "/admin",
  },
];

export default dashboardRoutes;
