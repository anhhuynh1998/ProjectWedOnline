import { useContext } from "react";
import { UseProduct } from "../UseContext";
import formatPrice from "../formatPrice/FormatPrice";
import InforProduct from "./InforProduct";

const ProductList = () => {
    const { productList, handleAddCart, handleSelectedProduct } = useContext(UseProduct);

    return (
        <div className="row" >
            <div className="product__list" style={{ display: 'flex', flexWrap: 'wrap' }}>
                <InforProduct />
                {
                    productList.map((item, index) => {
                        const formattedPrice = formatPrice(item.price);
                        return (
                            <div className="col-md-4 single__pro col-lg-3 cat--1 col-sm-4 col-xs-12" key={index}>
                                <div className="product foo">
                                    <div className="product__inner">
                                        <div className="pro__thumb">
                                            <a href="#">
                                                <img
                                                    src={item.imageUrl}
                                                    alt="product images"
                                                    className='rounded-3' />
                                            </a>
                                        </div>
                                        <div className="product__hover__info">
                                            <ul className="product__action">
                                                <li >
                                                    <a
                                                        data-toggle="modal" data-target="#productDetail"
                                                        onClick={() => { handleSelectedProduct(item.id) }}
                                                    >
                                                        <span type="button" className="ti-plus" ></span>
                                                    </a>
                                                </li>
                                                <li >
                                                    <a type='button' title="Add TO Cart"
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
                                                <span className="ti-heart" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product__details">
                                        <h2> {item.name}</h2>
                                        <ul className="product__price">
                                            <li className="old__price">Size {item.size}</li>
                                            <li className="new__price">Price {formattedPrice}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}
export default ProductList;