/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react"
import CategoryService from '../../../service/homeService/categoryService';
import { UseProduct } from "../UseContext";

const Category = () => {
    const { setCategoryId, setPage, filter, setFilter } = useContext(UseProduct);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        async function getAllCategory() {
            let response = await CategoryService.getCategory();
            setCategories(response.data)
        }
        getAllCategory();
    }, [])

    const getProducts = (cate) => {
        setSelectedCategory(cate.id);
        setPage(0);
        setCategoryId(cate.id);
        const cateUrl = {
            ...filter,
            categoryId: cate.id
        }
        setFilter(cateUrl);
    }

    return (
        <>
            <div className="htc__shop__cat">
                <h4 className="section-title-4">PRODUCT CATEGORIES</h4>
                <div className="category">
                    {categories.map((item, index) => (
                        <div key={index}
                            className={`btn-group dropright sidebar__list  btn-outline
                         `}
                        >
                            <button
                                type="button"
                                className="btn btn-outline-secondary text-dark dropdown-toggle"
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
                                                        <a type="button" className={`${selectedCategory === subItem.id ?
                                                            'btn btn-secondary rounded-3 text-white ' : 'btn btn-outline-secondary rounded-3'}`}
                                                            onClick={() => getProducts(subItem)}>
                                                            {subItem.name}
                                                        </a>
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
