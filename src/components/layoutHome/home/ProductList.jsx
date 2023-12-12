import { useContext } from "react";
import { UseProduct } from "../UseContext";
import formatPrice from "../formatPrice/FormatPrice";
const ProductList = () => {
    const { productList, setProductId, setCount, handleAddCart } = useContext(UseProduct);
    const handleSelectedProduct = (id) => {
        setCount(0);
        setProductId(id);
    }

    return (
        <div className="product__list" style={{ display: "flex", flexWrap: "wrap" }}>
            {
                productList.map((item, index) => {
                    const formattedPrice = formatPrice(item.price);
                    return (
                        <div className="col-md-3 single__pro col-lg-3 cat--1 col-sm-4 col-xs-12" key={index}>
                            <div className="product foo "   >
                                <div className="product__inner ">
                                    <div className="pro__thumb">
                                        <a >
                                            <img src={item.imageUrl} alt="product images" className="rounded-3" />
                                        </a>
                                    </div>
                                    <div className="product__hover__info">
                                        <ul className="product__action">
                                            <li >
                                                <a
                                                    data-toggle="modal" data-target="#productDetail"
                                                    onClick={() => handleSelectedProduct(item.id)}
                                                >
                                                    <span type="button" className="ti-plus" ></span>
                                                </a>
                                            </li>
                                            <li >
                                                <a type="button" title="Add TO Cart"
                                                    onClick={() => handleAddCart(item)}>
                                                    <span className="ti-shopping-cart"></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="add__to__wishlist">
                                        <a
                                            data-toggle="tooltip"
                                            title="Add To Wishlist"
                                            className="add-to-cart"
                                            href="wishlist.html"
                                        >
                                        </a>
                                    </div>
                                </div>
                                <div className="product__details">

                                    <h2>
                                        <span>{item.name}</span>
                                    </h2>
                                    <ul className="product__price">
                                        <li className="old__price"> SIZE {item.size}</li>
                                        <li className="new__price">{formattedPrice}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div >
    )
}
export default ProductList;