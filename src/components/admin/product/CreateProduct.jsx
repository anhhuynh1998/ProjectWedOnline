import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { ProductService } from '../../../service/admin/product/productService';
import { yupResolver } from "@hookform/resolvers/yup"
import ImageUpload from './upload/ImageUpload';
import CategorySelectOptions from './categorySelectOption/CategorySelectOptions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProductSchema } from './sChema/ProductSchema';
import SelectField from './componentResue/SelectField';
import InputField from './componentResue/InputField';
import serviceUserInfo from '../../service/ServiceUserInfo';
import { ToastError, ToastSuccess } from '../../../toastify/Toast';
const CreateProduct = ({ isOpenModal, handleClose, products, setProducts }) => {

    const [nestedCategories, setNestedCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubCategories, setSelectedSubCategories] = useState(null);
    const [selectedNestedCategories, setSelectedNestedCategories] = useState(null);
    const [avatarId, setAvatarId] = useState([]);
    const [enumValues, setEnumValues] = useState([]);;
    const [enumStatusValues, setEnumStatusValues] = useState([]);;
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [avatarURLs, setAvatarURLs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingSize, setIsLoadingSize] = useState(true);
    const [isLoadingStatus, setIsLoadingStatus] = useState(true);
    const [categories, setCategories] = useState([])
    const [uploadedFileCreate, setUploadedFileCreate] = useState([]);
    const [isLoadingCategories, setIsLoadingCategories] = useState(false);
    const [checkPhone, setCheckPhone] = useState({})

    const fetchDataEnumSize = async () => {
        try {
            let sizeData = await ProductService.getAllSizeEnum();
            setEnumValues(sizeData.data);
            setIsLoadingSize(false);
        } catch (error) {
            console.error('Error fetching size data:', error);
        }
    };

    const fetchDataEnumStatus = async () => {
        try {
            let statusData = await ProductService.getAllStatusEnum();
            setEnumStatusValues(statusData.data);
            setIsLoadingStatus(false);
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

    useEffect(() => {
        if (isOpenModal) {
            setIsLoadingSize(true);
            setIsLoadingStatus(true)
            setIsLoadingCategories(true);
            setTimeout(fetchDataEnumSize, 200);
            setTimeout(fetchDataEnumStatus, 200);
            setTimeout(fetchCategories, 200);
        }
    }, [isOpenModal]);

    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
        resolver: yupResolver(ProductSchema)
    })

    let getUserByPhone = async (phone) => {
        try {
            let userByPhone = await serviceUserInfo.getUserByPhone(phone);
            console.log((userByPhone))
            setCheckPhone(userByPhone.data)
            setValue('fullName', userByPhone.data?.fullName || '')
            if (userByPhone.data) {
                ToastSuccess("Đã tìm thấy người ký gửi !")
            } else {
                ToastError("Không thể tìm thấy người ký gửi!")
            }

        } catch (error) {
            ToastError("Không thể lấy dữ liệu!")
        }

    }

    const handleCheckUser = (e) => {

        getUserByPhone(e)
    }

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
                },
                userInfo: checkPhone ? { id: checkPhone.id } : null
            };
            console.log(dataList);
            const response = await ProductService.createProducts(dataList);
            ToastSuccess("Thêm mới thành công !")
            console.log("response.data ===========");
            console.log(response);
            const newProduct = response.data
            setProducts([newProduct, ...products]);
            handleCloseModal()
            setIsLoading(false);

        } catch (error) {
            ToastError('Có lỗi xảy ra khi tạo sản phẩm!')
            // handleCloseModal()
        }
    };
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
        setIsLoadingStatus(false)
        setIsLoadingCategories(false);
    };

    useEffect(() => {
        if (!isOpenModal) {
            resetAllState()
        }
    }, [isOpenModal, reset]);

    const handleCloseModal = () => {
        resetAllState();
        handleClose();
    };

    const handleResetModal = () => {
        resetAllState();
    };

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
                            <h4 className="text-success">Tạo Sản Phẩm</h4>
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
                            <div className="modal-body no-scrollbar form-create-body" >
                                <div className="container-fluid">
                                    <div className="row mt-3 mb-2">
                                        <div>
                                            <div className="col-4 mb-2">
                                                <label className="fw-bold" >
                                                    Số điện thoại
                                                </label>
                                                <>
                                                    <input type="text"
                                                        className="form-control"
                                                        name='phone'
                                                        {...register("phone")}
                                                        placeholder="Hãy nhập số điện thoại"
                                                        onBlur={(e) => handleCheckUser(e.target.value)}
                                                    />
                                                </>

                                            </div>
                                            <div className="col-4 mb-2">
                                                <label className="fw-bold" >
                                                    Người ký gửi
                                                </label>
                                                <>
                                                    <input type="text"
                                                        className="form-control"
                                                        name='fullName'
                                                        {...register("fullName")}
                                                        placeholder="Hãy nhập Người ký gửi"
                                                    />
                                                </>

                                            </div>

                                        </div>
                                        <div className="col-12">
                                            <InputField
                                                label="Tên Sản Phẩm"
                                                name="name"
                                                errors={errors}
                                                register={register}
                                                placeholder="Nhập tên sản phẩm"
                                            />
                                            <InputField
                                                label="Giá ký gửi"
                                                name="price"
                                                errors={errors}
                                                register={register}
                                                placeholder="Nhập giá sản phẩm"
                                            />
                                            <InputField
                                                label="Giá bán ra"
                                                name="salesPrice"
                                                errors={errors}
                                                register={register}
                                                placeholder="Nhập giá bán ra sản phẩm"
                                            />
                                            <SelectField
                                                label="Chọn tình trạng"
                                                id="enumSelect"
                                                name="status"
                                                options={enumStatusValues}
                                                isLoading={isLoadingStatus}
                                                errors={errors}
                                                register={register} />
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
                                            <CategorySelectOptions
                                                register={register}
                                                selectedCategory={selectedCategory}
                                                setSelectedCategory={setSelectedCategory}
                                                selectedSubCategories={selectedSubCategories}
                                                setSelectedSubCategories={setSelectedSubCategories}
                                                nestedCategories={nestedCategories}
                                                setNestedCategories={setNestedCategories}
                                                categories={categories}
                                                isLoadingCategories={isLoadingCategories}
                                                errors={errors}

                                            />
                                        </div>

                                        <div className="col-12">

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
                                    <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal" onClick={() => handleCloseModal()}>Đóng</button>

                                    <button type="submit" className="btn btn-outline-primary">
                                        Lưu
                                    </button>

                                    <button type="button" className="btn btn-outline-dark" onClick={handleResetModal}>Trở lại ban đầu</button>
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