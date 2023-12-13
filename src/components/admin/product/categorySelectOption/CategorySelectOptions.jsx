import React, { useEffect, useState } from 'react'
import SkeletonSelectOption from '../skeleton/SkeletonSelectOption'
import { ProductService } from '../../../../service/admin/product/productService'
const CategorySelectOptions = ({
    nestedCategories, setNestedCategories,
    selectedCategory, setSelectedCategory,
    selectedSubCategories, setSelectedSubCategories,
    categories,
    register,
    isLoadingSubCategories, setIsLoadingSubCategories,
    isLoadingNestedCategories, setIsLoadingNestedCategories,
    isLoadingCategories,
    errors

}) => {

    const [subCategories, setSubCategories] = useState([])

    const handleChangeCategory = (e) => {
        const selectedCategoryValue = e.target.value;
        setSelectedCategory(selectedCategoryValue)

    }


    const handleChangeSelectedSubCategories = (e) => {
        setSelectedSubCategories(e.target.value)
    }

    useEffect(() => {

        setIsLoadingSubCategories(true);

        const fetchSubcategories = async () => {
            try {

                if (selectedCategory) {
                    const subcategoriesData = await ProductService.getAllSubCategories(selectedCategory);

                    setSubCategories(subcategoriesData);
                    setIsLoadingSubCategories(false)
                }
            } catch (error) {
                console.error('Error fetching subcategories:', error);
                setIsLoadingSubCategories(false);
            }
        };


        ;
        setTimeout(fetchSubcategories, 200);
    }, [selectedCategory]);


    useEffect(() => {
        setIsLoadingNestedCategories(true)
        const fetchNestedCategories = async () => {
            try {

                if (selectedSubCategories) {
                    const nestedCategoriesData = await ProductService.getAllNestedCategories(selectedSubCategories);
                    setNestedCategories(nestedCategoriesData);
                    setIsLoadingNestedCategories(false)
                }
            } catch (error) {
                console.error('Error fetching nested categories:', error);
                setIsLoadingNestedCategories(false)
            }
        };
        setTimeout(fetchNestedCategories, 200);
    }, [selectedSubCategories]);



    return (
        <>
            <div className="col-4 mb-2">
                <label className="fw-bold" htmlFor="">
                    Đối tượng
                </label>
                {isLoadingCategories ? (
                    <SkeletonSelectOption />
                ) : (
                    <select
                        className="form-control"
                        value={selectedCategory}
                        onChange={handleChangeCategory}
                        name='gender'
                        id='categoryGranParentIdSelect'
                    >
                        <option value="-1"> Chọn một danh mục </option>
                        {categories?.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                )}

                {/* <span className="text-danger">{errors?.gender?.message}</span> */}

            </div>
            <div className="col-4 mb-2">
                <label className="fw-bold" htmlFor="">
                    Loại sử dụng
                </label>
                {isLoadingSubCategories ? (
                    <SkeletonSelectOption />
                ) : (
                    <select
                        className="form-control"
                        value={selectedSubCategories}
                        onChange={handleChangeSelectedSubCategories}
                        disabled={!selectedCategory}
                        name='type'
                        id='subCategoriesIdSelect'
                    >
                        <option value="" disabled={!selectedCategory} > Chọn một danh mục</option>
                        {subCategories.map(subcategory => (
                            <option key={subcategory.id} value={subcategory.id}>{subcategory.name}</option>
                        ))}
                    </select>
                )}

                {/* <span className="text-danger">{errors?.type?.message}</span> */}


            </div>
            <div className="col-4 mb-2">
                <label className="fw-bold" htmlFor="">
                    Loại
                </label>
                {isLoadingNestedCategories ? (
                    <SkeletonSelectOption />
                ) : (
                    <select
                        name='category'
                        className="form-control"
                        disabled={!selectedSubCategories}
                        {...register('category')}

                    >
                        <option value="" disabled={!selectedSubCategories}>Chọn một danh mục</option>
                        {nestedCategories.map(nested => (
                            <option key={nested.id} value={nested.id}>{nested.name}</option>
                        ))}
                    </select>
                )}
                <span className="text-danger">{errors?.category?.message}</span>
            </div>
        </>
    )
}

export default CategorySelectOptions