import { useEffect, useState } from "react"
import CategoryService from '../../../homeService/categoryService';
import ProductService from "../../../homeService/productService";



const Category = ({setCategories}) => {
    const [gender, setGender] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    
    useEffect(() => {
        async function getAllCategory() {
            let response = await CategoryService.getCategory();
            console.log("long tin chua", response.data);
            setGender(response.data)
        }
        getAllCategory()

    }, [])
    const handleCategoryClick = async (category) => {
        setSelectedCategory(category);
        if(category){
            let response = await ProductService.getProductsByCategory(category.id);
            console.log("o dayyyyyyy",response.data);
        }
    }
    const getProductsFromCategory = async (products) => {
        setSelectedProduct(products);
        if (products) {
            let response = await ProductService.getProductByFilter(category.id)
            console.log("loai san pham", response.data);
        }
    }

    return (
        <>
            <div className="htc__shop__cat">
                <h4 className="section-title-4">PRODUCT CATEGORIES</h4>
                <div className="category">
                    {gender.map((item, index) => (
                        <div key={index}
                        className={`btn-group dropright sidebar__list  btn-outline ${selectedCategory === item ? 'active' : ''}`}
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
                                                        <a href="" className={`text-dark ${selectedProduct === subItem ? 'active' : ''}`}
                                                        onClick={() =>  getProductsFromCategory(subItem)}>{subItem.name}</a>
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
