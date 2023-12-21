import { useContext } from "react";
import { UseProduct } from "../UseContext";
import ListFile from "./ListFile";

const InforProduct = () => {
    const { product, handleAddCart, formatPriceProduct } = useContext(UseProduct);
    return (
        <div id="quickview-wrapper">
            <div className={`modal fade `} id="productDetail" tabIndex="-1"
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
                                <ListFile />
                                {
                                    <div className="product-info" key={product.id}>
                                        <h1>{product.name}</h1>
                                        <div className="price-box-3">
                                            <div className="s-price-box">
                                                <span className="new-price">{formatPriceProduct}</span>
                                            </div>
                                        </div>
                                        <div className="quick-desc">{product.description}</div>
                                        <div>
                                            <h6>Tình Trạng : {product.status}</h6>
                                        </div>
                                        <div className="select__size">
                                            <h2>Size </h2>
                                            <ul className="color__list">
                                                <li className="l__size">
                                                    <a title={product.size} >
                                                        {product.size}
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="addtocart-btn" data-dismiss="modal"
                                            onClick={() => handleAddCart(product)}>
                                            <a type="button" className="text-white">Thêm Vào Giỏ</a>
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
export default InforProduct

