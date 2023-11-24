import React, { useEffect, useState, useRef } from 'react'
import { useForm } from 'react-hook-form';
import { ProductService } from '../../../service/admin/product/productService';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
const CreateProduct = ({ isOpenModal, handleClose }) => {
    const registerSchema = yup.object({
        name: yup.string()
            .required("Vui Lòng Nhập Tên"),
        price: yup.number()
            .min(10000)
            .max(1000000)
            .required("Vui Lòng Nhập giá"),
        status: yup.string()
            .required("Vui Lòng Nhập Tình trạng"),
        description: yup.string()
            .required("Vui Lòng Nhập Mô tả")
    })


    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [subCategories, setSubCategories] = useState([])
    const [nestedCategories, setNestedCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubCategories, setSelectedSubCategories] = useState(null);
    const [selectedNestedCategories, setSelectedNestedCategories] = useState(null);
    // const [avatarId, setAvatarId] = useState(null)
    const [enumValues, setEnumValues] = useState([]);
    const backToHome = useNavigate()
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoriesData = await ProductService.getAllCategories();
                setCategories(categoriesData);
                console.log(categoriesData);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        const fetchSubcategories = async () => {
            try {
                if (selectedCategory) {
                    const subcategoriesData = await ProductService.getAllSubCategories(selectedCategory);
                    setSubCategories(subcategoriesData);
                    console.log(subcategoriesData);
                }
            } catch (error) {
                console.error('Error fetching subcategories:', error);
            }
        };

        fetchSubcategories();
    }, [selectedCategory]);
    useEffect(() => {
        const fetchNestedCategories = async () => {
            try {
                if (selectedSubCategories) {
                    const nestedCategoriesData = await ProductService.getAllNestedCategories(selectedSubCategories);
                    setNestedCategories(nestedCategoriesData);
                    console.log(nestedCategoriesData);
                }
            } catch (error) {
                console.error('Error fetching subcategories:', error);
            }
        };

        fetchNestedCategories();
    }, [selectedSubCategories]);
    useEffect(() => {
        fetch('http://localhost:8080/api/sizes')
            .then(response => response.json())
            .then(data => setEnumValues(data))
            .catch(error => console.error('Error fetching enums:', error));
    }, []);




    const fileInputRef = useRef(null);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [avatarURLs, setAvatarURLs] = useState([]);

    const handleFileChange = (event) => {
        const newFiles = Array.from(event.target.files);
        setSelectedFiles([...selectedFiles, ...newFiles]);
    };

    const handleCanvasClick = event => {
        event.preventDefault();
        fileInputRef.current.click();
    };
    const handleRemoveImage = (index) => {
        const newSelectedFiles = [...selectedFiles];
        newSelectedFiles.splice(index, 1);
        setSelectedFiles(newSelectedFiles);

        const newAvatarURLs = [...avatarURLs];
        newAvatarURLs.splice(index, 1);
        setAvatarURLs(newAvatarURLs);
    };

    const uploadAvatar = async (files) => {
        const formData = new FormData();
        files.forEach((file) => {
            formData.append("files", file)
        });

        try {
            const response = await fetch("http://localhost:8080/api/files/images", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                // setAvatarURLs([...avatarURLs, ...data.avatarURLs]);
                // setAvatarId(data.id);
                return data;
            } else {
                console.error("Failed to upload avatar");
            }
        } catch (error) {
            console.error("Error uploading avatar:", error);
        }
    };



    const handleSubmitForm = async (data) => {
        try {
            const imgFiles = await uploadAvatar(selectedFiles);
            const dataList = {
                ...data,
                files: [...imgFiles],
                ...nestedCategories
            };
            const response = await ProductService.createProducts(dataList);

            if (response && response.data) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Thêm Mới Thành Công !',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    handleClose(); // Đóng modal khi thông báo hiển thị
                });

                console.log(response.data);
            } else {
                console.error('Failed to create product. Response:', response);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Có lỗi xảy ra khi tạo sản phẩm!',
                });
            }
        } catch (error) {
            console.error('Error creating product:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Có lỗi xảy ra khi tạo sản phẩm!',
            });
        }
    };


    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(registerSchema)
    })
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
                                <h4 className="text-success">Create Product</h4>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    onClick={handleClose}
                                />
                            </div>
                            <form onSubmit={handleSubmit(handleSubmitForm)}>
                                <div className="modal-body" style={{
                                    width: "100%"
                                }}>
                                    <div className="container">
                                        <div className="row mt-3 mb-2">
                                            <div className="col-lg-12">
                                                <div className="col-lg-4 mb-2">
                                                    <label className="fw-bold" htmlFor="">
                                                        Tên Sản Phẩm
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="name"
                                                        {...register("name")}

                                                    />
                                                    <span className="text-danger">{errors?.name?.message}</span>
                                                </div>
                                                <div className="col-lg-4 mb-2">
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

                                                <div className="col-lg-4 mb-2">
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

                                            <div className="col-lg-12">
                                                <div className="col-lg-4 mb-2">
                                                    <label className="fw-bold" htmlFor="">
                                                        Types Gender
                                                    </label>
                                                    <select
                                                        className="form-control"
                                                        value={selectedCategory}
                                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                                    >
                                                        <option value={products.category}>Chọn một danh mục</option>
                                                        {categories?.map(category => (
                                                            <option key={category.id} value={category.id}>
                                                                {category.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="col-lg-4 mb-2">
                                                    <label className="fw-bold" htmlFor="">
                                                        Types
                                                    </label>
                                                    <select
                                                        className="form-control"
                                                        value={selectedSubCategories}
                                                        onChange={(e) => setSelectedSubCategories(e.target.value)}
                                                        disabled={!selectedCategory}
                                                    >
                                                        <option value="" disabled={!selectedCategory}>Select a subcategory</option>
                                                        {subCategories.map(subcategory => (
                                                            <option key={subcategory.id} value={subcategory.id}>{subcategory.name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="col-lg-4 mb-2">
                                                    <label className="fw-bold" htmlFor="">
                                                        Types
                                                    </label>
                                                    <select
                                                        name='category'
                                                        className="form-control"
                                                        {...register("category")}
                                                        value={selectedNestedCategories}
                                                        onChange={(e) => setSelectedNestedCategories(e.target.value)}
                                                        disabled={!selectedSubCategories}
                                                    >
                                                        <option value="" disabled={!selectedSubCategories}>Select a nestedCategories</option>
                                                        {nestedCategories.map(nested => (
                                                            <option key={nested.id} value={nested.id}>{nested.name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="col-lg-4 mb-2">
                                                    <label htmlFor="enumSelect">Chọn Size:</label>
                                                    <select
                                                        className="form-control"
                                                        id="enumSelect"
                                                        name='size'
                                                        {...register("size")}
                                                    >
                                                        <option value="">Chọn Size</option>
                                                        {enumValues.map((value, index) => (
                                                            <option key={index} value={value}>
                                                                {value}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="col-lg-12">
                                                    <label className="fw-bold" htmlFor="">
                                                        Mô tả
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        name='description'
                                                        {...register("description")}
                                                    />
                                                    <span className="text-danger">{errors?.description?.message}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 " >
                                            <label className="fw-bold" htmlFor="">
                                                Sản Phẩm
                                            </label>
                                            <div style={{
                                                border: "solid 1px",
                                                height: "300px"
                                            }}>
                                                <div className="" style={{ display: 'flex', flexWrap: 'wrap', height: '100%', minHeight: '100%' }}>
                                                    {selectedFiles.map((file, index) => (
                                                        <div key={index} className="image" style={{
                                                            position: 'relative'
                                                        }}>
                                                            <img src={URL.createObjectURL(file)} alt={file.name} style={{
                                                                width: "300px",
                                                                height: "270px",
                                                                margin: "5px"
                                                            }} />
                                                            <button
                                                                className="btn-close"
                                                                onClick={() => handleRemoveImage(index)}
                                                                type="button"
                                                                style={{
                                                                    position: 'absolute',
                                                                    top: '5px',
                                                                    right: '5px',
                                                                    backgroundColor: 'white',
                                                                    border: 'none',
                                                                    cursor: 'pointer'
                                                                }}
                                                            >
                                                                X
                                                            </button>
                                                        </div>
                                                    ))}
                                                    <label
                                                        htmlFor="imageFileCreate"
                                                        className="image"
                                                        onClick={handleCanvasClick}
                                                        style={{
                                                            position: "absolute",
                                                            height: "100%",
                                                            display: "flex",

                                                            alignItems: "center",
                                                            justifyContent: "center"
                                                        }}
                                                    >
                                                        <div className="content">
                                                            <div className="icon">
                                                                <i className="fas fa-cloud-upload-alt" />
                                                            </div>
                                                            <div className="text center">
                                                                {selectedFiles.length > 0 ? 'Thêm ảnh' : 'Chưa chọn file!'}
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <input
                                                    type="file"
                                                    id="imageFileCreate"
                                                    accept="image/jpeg, image/png"
                                                    hidden
                                                    ref={fileInputRef}
                                                    onChange={handleFileChange}
                                                    multiple // Cho phép chọn nhiều tệp
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="modal-footer"
                                        style={{
                                            marginTop: "30px"
                                        }}
                                    >
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => handleClose()}>Close</button>
                                        <button type="submit" className="btn btn-primary">  Save </button>
                                        <button type="button" className="btn btn-sm btn-dark" onClick={() => reset()} >Cancel</button>
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

export default CreateProduct