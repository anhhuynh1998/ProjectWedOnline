import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import { ProductService } from '../../../service/admin/product/productService';
import Swal from 'sweetalert2';
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import SkeletonSelectOption from './skeleton/SkeletonSelectOption';
import ImageUpload from './upload/ImageUpload';
import CategorySelectOptions from './categorySelectOption/CategorySelectOptions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProductSchema } from './sChema/ProductSchema';
const CreateProduct = ({ isOpenModal, handleClose, products, setProducts }) => {

    const [nestedCategories, setNestedCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubCategories, setSelectedSubCategories] = useState(null);
    const [selectedNestedCategories, setSelectedNestedCategories] = useState(null);
    const [avatarId, setAvatarId] = useState([]);
    const [enumValues, setEnumValues] = useState([]);;
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [avatarURLs, setAvatarURLs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingSize, setIsLoadingSize] = useState(true);
    const [categories, setCategories] = useState([])
    const [uploadedFileCreate, setUploadedFileCreate] = useState([]);
    const [isLoadingSubCategories, setIsLoadingSubCategories] = useState(false);
    const [isLoadingNestedCategories, setIsLoadingNestedCategories] = useState(false);
    const [isLoadingCategories, setIsLoadingCategories] = useState(false);

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



    useEffect(() => {
        if (isOpenModal) {
            setIsLoadingSize(true);
            setIsLoadingCategories(true);
            setTimeout(fetchDataEnumSize, 200);
            setTimeout(fetchCategories, 200);
        }
    }, [isOpenModal]);


    const resetAllState = () => {
        reset();
        setAvatarId([]);
        setSelectedFiles([]);
        setAvatarURLs([]);
        setSelectedCategory(null);
        setSelectedSubCategories(null);
        setSelectedNestedCategories(null);
        setUploadedFileCreate([]);
        setIsLoading(false);
        setIsLoadingSize(false)
        setIsLoadingCategories(false);
    };
    const handleCloseModal = () => {
        resetAllState();
        handleClose();
    };

    const handleResetModal = () => {
        resetAllState();
    };

    const handleSubmitForm = async (data) => {
        console.log(data);
        try {
            setIsLoading(true);

            const dataList = {
                ...data,

                files: avatarId.map(e => {
                    return {
                        id: e
                    }
                }),
                ...nestedCategories,
                category: {
                    id: data.category
                }
            };
            console.log(dataList);
            const response = await ProductService.createProducts(dataList);

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Thêm Mới Thành Công !',
                showConfirmButton: false,
                timer: 1500
            })
            console.log("response.data ===========");
            console.log(response);
            setProducts([...products, response.data]);
            handleCloseModal()
            setIsLoading(false);

        } catch (error) {
            console.error('Error creating product:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Có lỗi xảy ra khi tạo sản phẩm!',
            });
            handleCloseModal()
        }
    };



    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(ProductSchema)
    })

    useEffect(() => {
        if (!isOpenModal) {
            resetAllState()
        }
    }, [isOpenModal, reset]);

    return (


        <div className='container-fluid'>
            <div
                className={`modal ${isOpenModal ? 'show' : ''}`} tabIndex="-1" style={{
                    display: isOpenModal ? 'block' : 'none',
                }}
            >
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="text-success">Tạo Sản Ph</h4>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                onClick={handleCloseModal}
                                style={{
                                    color: "red"
                                }}

                            />
                        </div>
                        <form onSubmit={handleSubmit(handleSubmitForm)} className='form-create'>
                            <div className="modal-body no-scrollbar form-create-body" style={{
                                lineHeight: "100%"
                            }}>
                                <div className="container-fluid">
                                    <div className="row mt-3 mb-2">
                                        <div className="col-12">
                                            <div className="col-4 mb-2">
                                                <label className="fw-bold" htmlFor="">
                                                    Tên Sản Phẩm
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="name"
                                                    {...register("name")}
                                                    placeholder='Tên sản phẩm'


                                                />
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
                                                    placeholder='Giá tiền'
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
                                                    placeholder='Tình trạng'
                                                />
                                                <span className="text-danger">{errors?.status?.message}</span>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <CategorySelectOptions
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
                                                errors={errors}

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
                                        <ImageUpload
                                            setAvatarId={setAvatarId}
                                            setSelectedFiles={setSelectedFiles}
                                            selectedFiles={selectedFiles}
                                            avatarURLs={avatarURLs}
                                            setAvatarURLs={setAvatarURLs}
                                            uploadedFileCreate={uploadedFileCreate}
                                            setUploadedFileCreate={setUploadedFileCreate}
                                            avatarId={avatarId}
                                            errors={errors}
                                        />
                                        <ToastContainer />
                                    </div>
                                </div>
                                <div className="modal-footer" style={{ marginTop: "30px" }}>
                                    <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal" onClick={() => handleCloseModal()}>Close</button>

                                    <button type="submit" className="btn btn-outline-primary">
                                        Save
                                    </button>

                                    <button type="button" className="btn btn-outline-dark" onClick={handleResetModal}>Reset</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default CreateProduct