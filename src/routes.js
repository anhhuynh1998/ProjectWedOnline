import CreateProduct from "./components/admin/product/CreateProduct";
import Product from "./components/admin/product/Product";
import ListUserInfo from "./components/user/ListUserInfo";

const dashboardRoutes = [
  {
    path: "/product",
    name: "Products",
    icon: "fa-solid fa-list",
    component: Product,
    layout: "/admin",
  },
  {
    path: "/userinfo",
    name: "Userinfo",
    icon: "fa-solid fa-list",
    component: ListUserInfo,
    layout: "/admin",
  },
];

export default dashboardRoutes;
