import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { ProductService } from '../../../service/admin/product/productService';
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import ImageUploadUpdate from './upload/ImageUploadUpdate';
import { ToastContainer } from 'react-toastify';
import SkeletonSave from './skeleton/SkeletonSave';
import CategorySelectOptionsUpdate from './categorySelectOption/CategorySelectOptionsUpdate';
import { ToastError, ToastSuccess } from '../../../toastify/Toast';
import InputField from './componentResue/InputField';
import SelectField from './componentResue/SelectField';

const UpdateProduct = ({ isOpenModal, handleClose, productId, products, setProducts }) => {
    const registerSchema = yup.object({
        name: yup.string().required("Vui Lòng Nhập Tên !!!"),
        price: yup
            .number()
            .transform((value) => (isNaN(value) ? undefined : Number(value)))
            .nullable()
            .min(10000, "Giá thấp nhất là 10000 !!!")
            .max(1000000, "Giá cao nhất là 1000000 !!!")
            .required("Vui Lòng Nhập giá !!!"),
        status: yup.string().required("Vui Lòng Nhập Tình trạng !!!"),
        description: yup.string().required("Vui Lòng Nhập Mô tả !!!"),
        size: yup.string().required("Vui lòng chọn kích thước !!!"),
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
    const [isLoadingCategories, setIsLoadingCategories] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [oldProduct, setOldProduct] = useState({});
    const [resetImg, setResetImg] = useState(false)


    useEffect(() => {

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

            }
            findProductById()
        } catch (error) {

        }
    }, [productId])


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
            ToastSuccess("Sửa thành công !")

            handleCloseModal()
            setIsLoading(false);
        } catch (error) {
            ToastError('Có lỗi xảy ra khi sửa sản phẩm!')
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
                                <div className="modal-body form-update-body">


                                    <div className="container">
                                        <div className="row mt-3 mb-2">
                                            <div className="col-12">
                                                <InputField
                                                    label="Tên Sản Phẩm"
                                                    name="name"
                                                    errors={errors}
                                                    register={register}
                                                    placeholder="Nhập tên sản phẩm"
                                                />
                                                <InputField
                                                    label="Giá"
                                                    name="price"
                                                    errors={errors}
                                                    register={register}
                                                    placeholder="Nhập giá sản phẩm"
                                                />
                                                <InputField
                                                    label="Tình Trạng"
                                                    name="status"
                                                    errors={errors}
                                                    register={register}
                                                    placeholder="Nhập tình trạng sản phẩm"
                                                />
                                            </div>
                                            <div className="col-12">
                                                <CategorySelectOptionsUpdate
                                                    register={register}
                                                    selectedCategory={selectedCategory}
                                                    setSelectedCategory={setSelectedCategory}
                                                    selectedSubCategories={selectedSubCategories}
                                                    setSelectedSubCategories={setSelectedSubCategories}
                                                    nestedCategories={nestedCategories}
                                                    setNestedCategories={setNestedCategories}
                                                    categories={categories}
                                                    isLoadingCategories={isLoadingCategories}
                                                />
                                            </div>


                                            <div className="col-12">
                                                <SelectField
                                                    label="Chọn Size"
                                                    id="enumSelect"
                                                    name="size"
                                                    options={enumValues}
                                                    isLoading={isLoadingSize}
                                                    errors={errors}
                                                    register={register} />
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

                                            <label className="" htmlFor="">
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
                                            />
                                            <ToastContainer />
                                        </div>
                                    </div>

                                    <div className="modal-footer" style={{ marginTop: "30px" }}>
                                        <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal" onClick={() => handleCloseModal()}>Đóng</button>
                                        {isLoading ? (
                                            <SkeletonSave />
                                        ) : (
                                            <button type="submit" className="btn btn-outline-primary" disabled={isLoading}>
                                                Lưu
                                            </button>
                                        )}
                                        <button type="button" className="btn btn-outline-dark" onClick={handleResetModal}>Trở về ban đầu</button>
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