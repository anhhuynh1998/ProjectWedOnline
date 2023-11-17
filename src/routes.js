import CreateProduct from "./components/admin/product/CreateProduct";
import Product from "./components/admin/product/Product";

const dashboardRoutes = [
    {
        path: "/product",
        name: "Products",
        icon: "fa-solid fa-list",
        component: Product,
        layout: "/admin"
    },
    {
        path: "/product/add",
        component: CreateProduct,
        layout: "/admin"
    },
];

export default dashboardRoutes;
