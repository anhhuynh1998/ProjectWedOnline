import { useEffect, useState } from "react"
<<<<<<< Updated upstream
import CategoryService from '../../../service/homeService/categoryService';
import ProductService from "../../../service/homeService/productService";



const Category = ({ setCategories }) => {
    const [gender, setGender] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
=======
import CategoryService from '../../../homeService/categoryService';

const Category = ({ setCategoryId }) => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
>>>>>>> Stashed changes

    useEffect(() => {
        async function getAllCategory() {
            let response = await CategoryService.getCategory();
            console.log("long tin chua", response.data);
            setCategories(response.data)
        }
        getAllCategory();
    }, [])

    const handleCategoryClick = async (category) => {
        setSelectedCategory(category);
<<<<<<< Updated upstream
        if (category) {
            let response = await ProductService.getProductsByCategory(category.id);
            console.log("o dayyyyyyy", response.data);
        }
=======



>>>>>>> Stashed changes
    }
    const getProducts = (category) => {
        setCategoryId(category.id);
    }

    return (
        <>
            <div className="htc__shop__cat">
                <h4 className="section-title-4">PRODUCT CATEGORIES</h4>
                <div className="category">
                    {categories.map((item, index) => (
                        <div key={index}
<<<<<<< Updated upstream
                            className={`btn-group dropright sidebar__list  btn-outline ${selectedCategory === item ? 'active' : ''}`}
=======
                            className={`btn-group dropright sidebar__list  btn-outline
                         ${selectedCategory === item ? 'active' : ''}`}
>>>>>>> Stashed changes
                            onClick={() => handleCategoryClick(item)}>
                            <button
                                type="button"
                                className="btn btn-outline-secondary text-dark dropdown-toggle "
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                {item.name}
                            </button>
                            <div className="dropdown-menu cart shadow p-3 mb-5 bg-white rounded " >
                                {item.categoryChildren.map((category, categoryIndex) => (
                                    <div key={categoryIndex}>
                                        <a className="dropdown-item bg-secondary text-white" href="#" >
                                            {category.name}
                                        </a>
                                        {category.categoryChildren && (
                                            <ul className="submenu " style={{ paddingLeft: "15px" }}>
                                                {category.categoryChildren.map((subItem, subIndex) => (
                                                    <li key={subIndex}>
<<<<<<< Updated upstream
                                                        <a href="" className={`text-dark ${selectedProduct === subItem ? 'active' : ''}`}
                                                            onClick={() => getProductsFromCategory(subItem)}>{subItem.name}</a>
=======
                                                        <button type="button" className="btn btn-outline-secondary rounded-3"
                                                            onClick={() => getProducts(subItem)}>
                                                            {subItem.name}</button>
>>>>>>> Stashed changes
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>

    )

}
export default Category
