import React, { useEffect, useState } from 'react';
import { ProductService } from '../../../../service/admin/product/productService';
import SelectOptionCategory from '../componentResue/SelectOptionCategory';
import SelectOptionCategoryType from '../componentResue/SelectOptionCategoryType';

const CategorySelectOptions = ({
    nestedCategories, setNestedCategories,
    selectedCategory, setSelectedCategory,
    selectedSubCategories, setSelectedSubCategories,
    categories,
    register,
    isLoadingCategories,
    errors
}) => {

    const [subCategories, setSubCategories] = useState([]);
    const [isLoadingSubCategories, setIsLoadingSubCategories] = useState(false);
    const [isLoadingNestedCategories, setIsLoadingNestedCategories] = useState(false);

    const handleChangeCategory = (e) => {
        const selectedCategoryValue = e.target.value;
        setSelectedCategory(selectedCategoryValue);
    }

    const handleChangeSelectedSubCategories = (e) => {
        setSelectedSubCategories(e.target.value);
    }

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                if (selectedCategory) {
                    setIsLoadingSubCategories(true);
                    const subcategoriesData = await ProductService.getAllSubCategories(selectedCategory);
                    setSubCategories(subcategoriesData);
                }

                if (selectedSubCategories) {
                    setIsLoadingNestedCategories(true);
                    const nestedCategoriesData = await ProductService.getAllNestedCategories(selectedSubCategories);
                    setNestedCategories(nestedCategoriesData);
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
            } finally {
                setIsLoadingSubCategories(false);
                setIsLoadingNestedCategories(false);
            }
        };

        if (selectedCategory || selectedSubCategories) {
            fetchCategories();
        }
    }, [selectedCategory, selectedSubCategories]);


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
                disabled={!selectedCategory}
                onChange={handleChangeSelectedSubCategories}
            />

            <SelectOptionCategoryType
                label="Loại"
                options={nestedCategories}
                isLoading={isLoadingNestedCategories}
                name="category"
                id="nestedCategoriesIdSelect"
                register={register}
                disabled={!selectedSubCategories && !selectedCategory}
                errors={errors}
            />
        </>
    );
}

export default CategorySelectOptions;
