import CreateProduct from "./components/admin/product/CreateProduct";
import Product from "./components/admin/product/Product";
import ListUserInfo from "./components/user/ListUserInfo";
import Revenue from './components/admin/revenue/Revenue';


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
    name: "Người Dùng",
    icon: "fa-solid fa-user",
    component: ListUserInfo,
    layout: "/admin",
  }

];

export default dashboardRoutes;
