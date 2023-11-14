import { useEffect, useState } from "react"
import CategoryService from '../../../homeService/categoryService';



const Category = () => {
    // const [categories, setCategories] = useState([]);
    // const [categoryChildren, setCategoryChildren] = useState([]);
    const [gender, setGender] = useState([])

    useEffect(() => {
        async function getAllCategory() {
            let response = await CategoryService.getCategory();
            console.log("long tin chua", response.data);
            setGender(response.data)
            // setCategoryChildren(response.data.categoryChildren);

        }
        getAllCategory()

    }, [])

    return (
        <>
            <div className="htc__shop__cat">
                <h4 className="section-title-4">PRODUCT CATEGORIES</h4>
                <div className="category">
                    {gender.map((item, index) => (
                        <div className="btn-group dropright sidebar__list" key={index}>
                            <button
                                type="button"
                                className="btn bg-white text-dark dropdown-toggle"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                {item.name}
                            </button>
                            <div className="dropdown-menu">
                                {item.categoryChildren.map((category, categoryIndex) => (
                                    <div key={categoryIndex}>
                                        <a className="dropdown-item" href="#">
                                            {category.name}
                                        </a>
                                        {category.categoryChildren && (
                                            <ul className="submenu">
                                                {category.categoryChildren.map((subItem, subIndex) => (
                                                    <li key={subIndex}>
                                                        <a href="">{subItem.name}</a>
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
