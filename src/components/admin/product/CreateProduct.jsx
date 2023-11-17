import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { ProductService } from '../../../service/admin/product/productService';
import AvatarUploader from './uploadImageCloudinary/AvatarUploader';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const CreateProduct = () => {
    const [products, setProducts] = useState([])
    const [images, setImages] = useState([]);
    const [categories, setCategories] = useState([])
    const [subCategories, setSubCategories] = useState([])
    const [nestedCategories, setNestedCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubCategories, setSelectedSubCategories] = useState(null);
    const [selectedNestedCategories, setSelectedNestedCategories] = useState(null);
    const [selectedSizes, setSelectedSizes] = useState('');
    const [sizes, setSizes] = useState([])
    const [avatarId, setAvatarId] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        status: '',
        category: '',
        subcategory: '',
        nestedcategory: '',
        size: '',
        description: ''
    });
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
        try {
            const findAllEnumSize = async () => {
                let response = await ProductService.getAllSizeEnum()
                setSizes(response.data)
            }
            findAllEnumSize()
        } catch (error) {

        }
    }, [])


    const handleSubmitForm = async () => {
        const response = ProductService.createProducts(formData)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Thêm Mới Thành Công !',
            showConfirmButton: false,
            timer: 1500
        })
        backToHome("/admin/product")
        console.log(response.data);
    }
    const { register, handleSubmit } = useForm()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    return (
        <React.Fragment>
            <section>
                <div className="container">
                    <h4 className="text-success">Create Product</h4>
                    <p className="fst-italic">Commodo non elit magna consequat et adipisicing. Veniam elit mollit ex duis aute culpa eiusmod incididunt exercitation mollit occaecat nisi minim exercitation.</p>
                </div>
            </section>
            <section>
                <form onSubmit={handleSubmit(handleSubmitForm)}>

                    <div className="container">
                        <div className="row mt-3 mb-2">
                            <div className="col-lg-6">
                                <div className="col-lg-4 mb-2">
                                    <label className="fw-bold" htmlFor="">
                                        Tên Sản Phẩm
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="col-lg-4 mb-2">
                                    <label className="fw-bold" htmlFor="">
                                        Giá
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="price"

                                        value={formData.price}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="col-lg-6 mb-2">
                                    <label className="fw-bold" htmlFor="">
                                        Tình Trạng
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="status"
                                        value={formData.status}
                                        onChange={handleChange}

                                    />
                                </div>
                                <div className="col-lg-6 mb-2">
                                    <label className="fw-bold" htmlFor="">
                                        Types Gender
                                    </label>
                                    <select
                                        {...register("category")}
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                    >
                                        <option value={products.category}>Chọn một danh mục</option>
                                        {categories.map(category => (
                                            <option key={category.id} value={category.id}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>

                                    {selectedCategory && (
                                        <select value={selectedSubCategories} onChange={(e) => setSelectedSubCategories(e.target.value)}>
                                            <option value="" disabled>Select a subcategory</option>
                                            {subCategories.map(subcategory => (
                                                <option key={subcategory.id} value={subcategory.id}>{subcategory.name}</option>
                                            ))}
                                        </select>
                                    )}
                                    {selectedSubCategories && (
                                        <select value={selectedNestedCategories} onChange={(e) => setSelectedNestedCategories(e.target.value)}>
                                            <option value="" disabled>Select a nestedCategories</option>
                                            {nestedCategories.map(nested => (
                                                <option key={nested.id} value={nested.id}>{nested.name}</option>
                                            ))}
                                        </select>
                                    )}
                                </div>
                                <div className="col-lg-6 mb-2">
                                    <label className="fw-bold" htmlFor="">
                                        Size
                                    </label>
                                    <select
                                        {...register("size")}
                                        onChange={(e) => setSelectedSizes(e.target.value)}
                                    >
                                        <option value={products.size}>Chọn một danh mục</option>
                                        {sizes.map(size => (
                                            <option key={size} value={selectedSizes}>{size}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-12 d-flex">
                                <label className="fw-bold" htmlFor="">
                                    Sản Phẩm
                                </label>
                                <AvatarUploader name="image" {...register("image")} setAvatarId={setAvatarId} />
                            </div>
                            <div className="col-lg-12">
                                <div className="col-lg-12">
                                    <label className="fw-bold" htmlFor="">
                                        Mô tả
                                    </label>
                                    <textarea
                                        value={formData.status}
                                        onChange={handleChange}
                                        name="description" id="" cols="30" rows="10"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-2 d-flex" style={{ justifyContent: 'center' }}>
                            <div className="col-lg-3">
                                <button
                                    className="btn btn-warning btn-sm"
                                >
                                    Add new
                                </button>
                            </div>
                        </div>
                    </div>

                </form>

            </section>
        </React.Fragment>
    )
}

export default CreateProduct