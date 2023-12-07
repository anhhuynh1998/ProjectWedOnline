import React, { useEffect, useState } from 'react'
import SkeletonSelectOption from '../skeleton/SkeletonSelectOption'
import { ProductService } from '../../../../service/admin/product/productService'
const CategorySelectOptionsUpdate = ({
    nestedCategories, setNestedCategories,
    selectedCategory, setSelectedCategory,
    selectedSubCategories, setSelectedSubCategories,
    categories,
    register,
    isLoadingSubCategories, setIsLoadingSubCategories,
    isLoadingNestedCategories, setIsLoadingNestedCategories,
    isLoadingCategories,


}) => {

    const [subCategories, setSubCategories] = useState([])

    const handleChangeCategory = (e) => {
        console.log('handleChangeCategory');
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
                console.log('Selected category:', selectedCategory);
                if (selectedCategory) {
                    const subcategoriesData = await ProductService.getAllSubCategories(selectedCategory);
                    console.log('Subcategories data:', subcategoriesData);
                    setSubCategories(subcategoriesData);
                    setIsLoadingSubCategories(false)
                }
            } catch (error) {
                console.error('Error fetching subcategories:', error);
                setIsLoadingSubCategories(false);
            }
        };


        setTimeout(fetchSubcategories, 200);
    }, [selectedCategory]);


    useEffect(() => {
        setIsLoadingNestedCategories(true)
        const fetchNestedCategories = async () => {
            try {
                console.log('Selected subcategories:', selectedSubCategories);
                if (selectedSubCategories) {
                    const nestedCategoriesData = await ProductService.getAllNestedCategories(selectedSubCategories);
                    console.log('Nested categories data:', nestedCategoriesData);
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
                        name='categoryGranParentId'
                    >
                        <option value="-1"> Chọn một danh mục </option>
                        {categories?.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                )}
                {/* <span className="text-danger">{errors?.categoryGranParentId?.message}</span> */}
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
                        value={selectedSubCategories || ''}
                        onChange={handleChangeSelectedSubCategories}
                        disabled={!selectedCategory}
                        name='categoryParentId'
                    >
                        <option value="" disabled={!selectedCategory} > Chọn một danh mục</option>
                        {subCategories.map(subcategory => (
                            <option key={subcategory.id} value={subcategory.id}>{subcategory.name}</option>
                        ))}
                    </select>
                )}
                {/* <span className="text-danger">{errors?.categoryParentId?.message}</span> */}
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
                {/* <span className="text-danger">{errors?.category?.message}</span> */}
            </div>
        </>
    )
}

export default CategorySelectOptionsUpdate