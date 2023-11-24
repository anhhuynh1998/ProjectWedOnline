import { useEffect, useState } from "react";
import ProductService from "../../../service/homeService/productService";

const Detail = ({ productId }) => {
    const [product, setProduct] = useState({});
    const [listFile, setListFile] = useState([]);

    console.log(productId);

    useEffect(() => {
        async function getAll() {
            let response = await ProductService.getById(productId);
            setProduct(response.data);
            setListFile(response.data.listFile)
        }
        getAll();
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
                                {/* Start product images */}
                                <div className="product-images" style={{ width: "602px" }}>
                                    <div className="main-image images">
                                        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                                            <div className="carousel-inner">
                                                {
                                                    listFile.map((e, index) => (
                                                        <>
                                                            <div className="carousel-indicators" key={index} >
                                                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={index} className={index === 0 ? "active" : ""}
                                                                    aria-current={index === 0 ? "true" : "false"}
                                                                    aria-label={`Slide ${index + 1}`} >
                                                                </button>
                                                            </div>
                                                            <div className={`carousel-item ${index === 0 ? "active" : ""}`}
                                                                data-bs-interval="10000"
                                                                key={index} >
                                                                <img src={e} className="d-block w-100" alt="big images" />
                                                                <div className="carousel-caption d-none d-md-block">
                                                                </div>
                                                            </div>
                                                        </>
                                                    ))
                                                }
                                            </div>
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
                                        <div className="rating__and__review">
                                            <ul className="rating">
                                                <li>
                                                    <span className="ti-star" />
                                                </li>
                                                <li>
                                                    <span className="ti-star" />
                                                </li>
                                                <li>
                                                    <span className="ti-star" />
                                                </li>
                                                <li>
                                                    <span className="ti-star" />
                                                </li>
                                                <li>
                                                    <span className="ti-star" />
                                                </li>
                                            </ul>
                                        </div>
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

                                        <div className="addtocart-btn">
                                            <a href="#">Add to cart</a>
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
export default Detail