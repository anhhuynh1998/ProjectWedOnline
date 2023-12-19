import { useEffect, useState } from "react";
import { ProductService } from "../../../service/admin/product/productService";

const DetailProduct = ({ productId }) => {

    const [product, setProduct] = useState({});


    useEffect(() => {
        async function getById() {
            let response = await ProductService.getAllProduct(productId);
            setProduct(response.data);
        }
        getById();
    }, [productId])

    return (
        <div id="quickview-wrapper">
            <div className={`modal fade`} id="productDetail" tabIndex="-1"
                aria-labelledby="exampleModalLabel" >
                <div className="modal-dialog" role="document">
                    <div className="modal-content" style={{ width: "835px" }} >
                        <div className="modal-header" >
                            <h5 className="modal-title" id="exampleModalLabel"></h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="modal-product" >
                                <div className="product-images" style={{ width: "602px" }}>
                                    <div className="main-image images">
                                        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">

                                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {
                                    <div className="product-info" key={product.id}>
                                        <h1>{product.name}</h1>
                                        <div className="price-box-3">
                                            <div className="s-price-box">
                                                <span className="new-price">{product.price} VND</span>
                                            </div>
                                        </div>
                                        <div className="quick-desc">{product.description}
                                        </div>
                                        <div className="select__size">
                                            <h2>Size </h2>
                                            <ul className="color__list">
                                                <li className="l__size">
                                                    <a title={product.size} href="">
                                                        {product.size}
                                                    </a>
                                                </li>

                                            </ul>
                                        </div>
                                        <div className="select__size">
                                            <h2>Loại </h2>
                                            <ul className="color__list">
                                                <li className="l__size">
                                                    <a title={product.category} href="">
                                                        {product.category}
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="select__size">
                                            <h2>Tình Trạng </h2>
                                            <ul className="color__list">
                                                <li className="l__size">
                                                    <a title={product.status} href="">
                                                        {product.status}
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default DetailProduct




