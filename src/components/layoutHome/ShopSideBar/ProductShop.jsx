import { useEffect, useState } from 'react';
import ProductService from '../../../homeService/productService';
import Detail from './Detail';
import ProductList from '../home/ProductList';

const ProductShopComponent = ({ productList }) => {
    const [productId, setProductId] = useState("");
    //    const [productList, setProductList] = useState([]);
    const handleSelectedProduct = (id) => {
        setProductId(id);
    }

    return (

        <div className="col-md-9 col-lg-9 col-sm-12 col-xs-12 smt-30" >
            <div className="row" >
                <div className="product__list  ">
                    <Detail productId={productId} />
                    {
                        productList.map((item, index) => (
                            <div className="col-md-4 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12" key={index}>
                                <div className="product foo">
                                    <div className="product__inner">
                                        <div className="pro__thumb">
                                            <a href="#">
                                                <img src={item.imageUrl} alt="product images" />
                                            </a>
                                        </div>
                                        <div className="product__hover__info">
                                            <ul className="product__action">
                                                <li >
                                                    <a
                                                        data-toggle="modal" data-target="#productDetail"
                                                        onClick={() => {
                                                            handleSelectedProduct(item.id);
                                                        }}
                                                    >
                                                        <span type="button" className="ti-plus" ></span>

                                                    </a>
                                                </li>
                                                <li >
                                                    <a title="Add TO Cart" href="cart.html">
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
                                        <h2>
                                            <a href="product-details.html">{item.name}</a>
                                        </h2>
                                        <ul className="product__price">
                                            <li className="old__price">Size {item.size}</li>
                                            <li className="new__price">Price {item.price}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default ProductShopComponent