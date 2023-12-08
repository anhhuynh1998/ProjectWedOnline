import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { ProductService } from '../../../service/admin/product/productService';
import Swal from 'sweetalert2';
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import SkeletonSelectOption from './skeleton/SkeletonSelectOption';
import ImageUploadUpdate from './upload/ImageUploadUpdate';
import { ToastContainer } from 'react-toastify';
import SkeletonSave from './skeleton/SkeletonSave';
import CategorySelectOptionsUpdate from './categorySelectOption/CategorySelectOptionsUpdate';

const UpdateProduct = ({ isOpenModal, handleClose, productId, products, setProducts }) => {
    const registerSchema = yup.object({
        name: yup.string()
            .required("Vui Lòng Nhập Tên"),
        price: yup.number()
            .required("Vui Lòng Nhập giá"),
        status: yup.string()
            .required("Vui Lòng Nhập Tình trạng"),
        description: yup.string()
            .required("Vui Lòng Nhập Mô tả")
    })


    const [enumValues, setEnumValues] = useState([]);
    const [avatarId, setAvatarId] = useState([]);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [avatarURLs, setAvatarURLs] = useState([]);
    const [updateProduct, setUpdateProduct] = useState({})
    const [categories, setCategories] = useState([])
    const [nestedCategories, setNestedCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubCategories, setSelectedSubCategories] = useState(null);
    const [selectedNestedCategories, setSelectedNestedCategories] = useState(null);
    const [isLoadingSize, setIsLoadingSize] = useState(true);
    const [uploadedFile, setUploadedFile] = useState([]);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [isLoadingSubCategories, setIsLoadingSubCategories] = useState(false);
    const [isLoadingNestedCategories, setIsLoadingNestedCategories] = useState(false);
    const [isLoadingCategories, setIsLoadingCategories] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingInput, setIsLoadingInput] = useState(false)
    const [oldProduct, setOldProduct] = useState({});
    const [resetImg, setResetImg] = useState(false)


    useEffect(() => {
        setIsLoadingInput(true)
        try {
            const findProductById = async () => {
                let productById = await ProductService.getProductsById(productId)
                setOldProduct(productById.data);
                setUpdateProduct(productById.data)
                console.log(productById.data);
                setSelectedCategory(productById.data.categoryGranParentId)
                setSelectedSubCategories(productById.data.categoryParentId)
                setSelectedNestedCategories(productById.data.category)
                setSelectedFiles(productById.data.files)



                setIsLoadingInput(false)
            }
            findProductById()
        } catch (error) {

        }
    }, [productId])


    const handleCategoryChange = (selectedCategory) => {
        setSelectedCategory(selectedCategory);
    };


    const fetchDataEnumSize = async () => {
        try {
            let sizeData = await ProductService.getAllSizeEnum();
            setEnumValues(sizeData.data);
            setIsLoadingSize(false);
        } catch (error) {
            console.error('Error fetching size data:', error);
        }
    };

    const fetchCategories = async () => {
        try {
            const categoriesData = await ProductService.getAllCategories();
            setCategories(categoriesData);
            setIsLoadingCategories(false);
            console.log(categoriesData);
        } catch (error) {
            console.error('Error fetching categories:', error);
            setIsLoadingCategories(false);
        }
    };


    const handleSubmitUpdateProductForm = async (data) => {

        try {
            setIsLoading(true);
            const imgUrl = [
                ...selectedFiles,
                ...uploadedFiles
            ]

            data.files = imgUrl;

            const dataList = {
                ...data,
                ...imgUrl,

                files: data.files.map(e => {
                    return {
                        id: e.id
                    }
                }),
                ...nestedCategories,
                category: {
                    id: data.category
                }
            };
            const response = await ProductService.updateProducts(dataList, productId);

            setProducts(prevProducts => {
                const updatedProducts = prevProducts.map(product =>
                    product.id === productId ? response.data : product
                );
                return updatedProducts;
            });
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'SửaThành Công !',
                showConfirmButton: false,
                timer: 1500
            })
            console.log("response===============");
            console.log(response);

            handleCloseModal()
            setIsLoading(false);
        } catch (error) {
            console.error('Error update product:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Có lỗi xảy ra khi sửa sản phẩm!',
            });
            handleCloseModal()
        }
    };



    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(registerSchema),
        values: updateProduct
    })
    useEffect(() => {
        if (isOpenModal) {
            setIsLoadingSize(true);
            setIsLoadingCategories(true);

            setTimeout(fetchDataEnumSize, 200);

            setTimeout(fetchCategories, 200);
        }
    }, [isOpenModal]);

    useEffect(() => {
        if (!isOpenModal) {
            resetAllState()
        }
    }, [isOpenModal, reset]);
    const resetAllState = () => {
        reset();
        setAvatarId([]);
        setSelectedFiles([]);
        setAvatarURLs([]);
        setSelectedCategory(null);
        setSelectedSubCategories(null);
        setSelectedNestedCategories(null);
        setUploadedFile([]);
        setIsLoading(false);
        setIsLoadingSize(false)
        setIsLoadingCategories(false);
        setIsLoadingNestedCategories(false);
        setIsLoadingSubCategories(false);
    };
    const handleCloseModal = () => {
        resetAllState();
        handleClose();
    };

    const handleResetModal = () => {
        reset(
            setSelectedCategory(oldProduct.categoryGranParentId),
            setSelectedSubCategories(oldProduct.categoryParentId),
            setSelectedNestedCategories(oldProduct.category),
            setSelectedFiles(oldProduct.files),
            setAvatarURLs(oldProduct.files.url),
            setUploadedFiles(oldProduct.files)
        )
        setResetImg((prev) => !prev)
    };
    console.log(oldProduct);
    return (
        <React.Fragment>

            <>
                {/* Modal */}
                <div
                    className={`modal ${isOpenModal ? 'show' : ''}`} tabIndex="-1" style={{ display: isOpenModal ? 'block' : 'none' }}
                >
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="text-success">Sửa Sản Phẩm</h4>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    onClick={handleClose}
                                />
                            </div>
                            <form onSubmit={handleSubmit(handleSubmitUpdateProductForm)} className='form-create'>
                                <div className="modal-body form-create-body" style={{
                                    lineHeight: "100%"
                                }}>


                                    <div className="container">
                                        <div className="row mt-3 mb-2">
                                            <div className="col-12">
                                                <div className="col-4 mb-2">
                                                    <label className="fw-bold" htmlFor="">
                                                        Tên Sản Phẩm
                                                    </label>
                                                    {isLoadingInput ? (
                                                        <SkeletonSelectOption />
                                                    ) : (
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="name"
                                                            {...register("name")}

                                                        />
                                                    )}
                                                    <span className="text-danger">{errors?.name?.message}</span>
                                                </div>
                                                <div className="col-4 mb-2">
                                                    <label className="fw-bold" htmlFor="">
                                                        Giá
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="price"
                                                        {...register("price")}

                                                    />
                                                    <span className="text-danger">{errors?.price?.message}</span>
                                                </div>

                                                <div className="col-4 mb-2">
                                                    <label className="fw-bold" htmlFor="">
                                                        Tình Trạng
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="status"
                                                        {...register("status")}

                                                    />
                                                    <span className="text-danger">{errors?.status?.message}</span>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <CategorySelectOptionsUpdate
                                                    register={register}
                                                    selectedCategory={selectedCategory}
                                                    selectedSubCategories={selectedSubCategories}
                                                    selectedNestedCategories={selectedNestedCategories}
                                                    setSelectedCategory={setSelectedCategory}
                                                    setSelectedNestedCategories={setSelectedNestedCategories}
                                                    setSelectedSubCategories={setSelectedSubCategories}
                                                    setNestedCategories={setNestedCategories}
                                                    nestedCategories={nestedCategories}
                                                    categories={categories}
                                                    setCategories={setCategories}
                                                    onCategoryChange={handleCategoryChange}
                                                    isLoadingCategories={isLoadingCategories}
                                                    isLoadingNestedCategories={isLoadingNestedCategories}
                                                    isLoadingSubCategories={isLoadingSubCategories}
                                                    setIsLoadingCategories={setIsLoadingCategories}
                                                    setIsLoadingNestedCategories={setIsLoadingNestedCategories}
                                                    setIsLoadingSubCategories={setIsLoadingSubCategories}

                                                />
                                            </div>


                                            <div className="col-12">
                                                <div className="col-4 mb-2">
                                                    <label htmlFor="enumSelect">Chọn Size:</label>
                                                    {isLoadingSize ? (
                                                        <SkeletonSelectOption />
                                                    ) : (
                                                        <select
                                                            className="form-control"
                                                            id="enumSelect"
                                                            name='size'
                                                            {...register("size")}
                                                        >
                                                            <option value="" >Chọn một danh mục</option>
                                                            {enumValues.map((value, index) => (
                                                                <option key={index} value={value}>
                                                                    {value}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    )}
                                                    <span className="text-danger">{errors?.size?.message}</span>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="col-12">
                                                    <label className="fw-bold" htmlFor="">
                                                        Mô tả
                                                    </label>
                                                    <textarea id="" cols="30" rows="5" className="form-control" name='description'
                                                        {...register("description")}></textarea>
                                                    <span className="text-danger">{errors?.description?.message}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">

                                            <label className="fw-bold" htmlFor="">
                                                Sản Phẩm
                                            </label>
                                            <ImageUploadUpdate
                                                setAvatarId={setAvatarId}
                                                selectedFiles={selectedFiles}
                                                setSelectedFiles={setSelectedFiles}
                                                uploadedFiles={uploadedFiles}
                                                setUploadedFiles={setUploadedFiles}
                                                avatarURLs={avatarURLs}
                                                setAvatarURLs={setAvatarURLs}
                                                avatarId={avatarId}
                                                reset={resetImg}
                                            // errors={errors}
                                            />
                                            <ToastContainer />
                                        </div>
                                    </div>

                                    <div className="modal-footer" style={{ marginTop: "30px" }}>
                                        <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal" onClick={() => handleCloseModal()}>Close</button>
                                        {isLoading ? (
                                            <SkeletonSave />
                                        ) : (
                                            <button type="submit" className="btn btn-outline-primary" disabled={isLoading}>
                                                Save
                                            </button>
                                        )}
                                        <button type="button" className="btn btn-outline-dark" onClick={handleResetModal}>Reset</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </>
        </React.Fragment >
    )
}

export default UpdateProduct