import React, { useEffect, useState } from 'react'
import { ProductService } from '../../../../service/admin/product/productService'
import SelectOptionCategory from '../componentResue/SelectOptionCategory'
import SelectOptionCategoryType from '../componentResue/SelectOptionCategoryType'
const CategorySelectOptionsUpdate = ({
    nestedCategories, setNestedCategories,
    selectedCategory, setSelectedCategory,
    selectedSubCategories, setSelectedSubCategories,
    categories,
    register,
    isLoadingCategories,

}) => {

    const [subCategories, setSubCategories] = useState([])
    const [isLoadingSubCategories, setIsLoadingSubCategories] = useState(false);
    const [isLoadingNestedCategories, setIsLoadingNestedCategories] = useState(false);

    const handleChangeCategory = (e) => {
        console.log('handleChangeCategory');
        const selectedCategoryValue = e.target.value;
        setSelectedCategory(selectedCategoryValue)

    }


    const handleChangeSelectedSubCategories = (e) => {
        setSelectedSubCategories(e.target.value)
    }

    useEffect(() => {
        const fetchSubcategories = async () => {
            try {
                setIsLoadingSubCategories(true);
                if (selectedCategory) {
                    const subcategoriesData = await ProductService.getAllSubCategories(selectedCategory);
                    setSubCategories(subcategoriesData);
                }
            } catch (error) {
                console.error('Error fetching subcategories:', error);
            } finally {
                setIsLoadingSubCategories(false);
            }
        };

        if (selectedCategory) {
            fetchSubcategories();
        }
    }, [selectedCategory]);

    useEffect(() => {
        const fetchNestedCategories = async () => {
            try {
                setIsLoadingNestedCategories(true);
                if (selectedSubCategories) {
                    const nestedCategoriesData = await ProductService.getAllNestedCategories(selectedSubCategories);
                    setNestedCategories(nestedCategoriesData);
                }
            } catch (error) {
                console.error('Error fetching nested categories:', error);
            } finally {
                setIsLoadingNestedCategories(false);
            }
        };

        if (selectedSubCategories) {
            fetchNestedCategories();
        }
    }, [selectedSubCategories]);

    return (
        <>
            <SelectOptionCategory
                label="Đối tượng"
                options={categories}
                isLoading={isLoadingCategories}
                value={selectedCategory}
                onChange={handleChangeCategory}

            />

            <SelectOptionCategory
                label="Loại sử dụng"
                options={subCategories}
                isLoading={isLoadingSubCategories}
                value={selectedSubCategories}
                onChange={handleChangeSelectedSubCategories}

            />
            <SelectOptionCategoryType
                label="Loại"
                options={nestedCategories}
                isLoading={isLoadingNestedCategories}
                name="category"
                id="nestedCategoriesIdSelect"
                register={register}
            // errors={errors}
            />
        </>
    )
}

export default CategorySelectOptionsUpdate