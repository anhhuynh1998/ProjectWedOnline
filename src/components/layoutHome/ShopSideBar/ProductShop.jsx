/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import Detail from './Detail';
import { InView } from 'react-intersection-observer';
import 'react-loading-skeleton/dist/skeleton.css'
import SkeletonLoad from './SkeletonLoad';
import { UseProduct } from '../UseContext';

const ProductShop = ({ productList, getALlProducts, isLoading }) => {
    const { handleAddCart } = useContext(UseProduct);
    const [productId, setProductId] = useState("");
    const handleSelectedProduct = (id) => {
        setProductId(id);
    }
    const handleLoadList = (index, e) => {
        if (index === productList.length - 1 && e === true) {
            getALlProducts();
        }
    }
    return (
        <>
            <div className="col-md-9 col-lg-9 col-sm-12 col-xs-12 smt-30" >
                <div className="row" >
                    <div className="product__list" style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <Detail productId={productId} />
                        {
                            productList.map((item, index) => (
                                <InView as="div" className="col-md-4 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12"
                                    key={index} delay={2000} onChange={(e) => handleLoadList(index, e)}>
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
                                                            onClick={() => {
                                                                handleSelectedProduct(item.id);
                                                            }}
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
                                            <h2>
                                                <a href="product-details.html">{item.name}</a>
                                            </h2>
                                            <ul className="product__price">
                                                <li className="old__price">Size {item.size}</li>
                                                <li className="new__price">Price {item.price}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </InView>
                            ))
                        }
                    </div>
                    {isLoading && <SkeletonLoad />}
                </div>
            </div>


        </>
    )
}

export default ProductShop