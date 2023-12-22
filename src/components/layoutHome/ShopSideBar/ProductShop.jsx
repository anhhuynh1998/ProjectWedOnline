/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { InView } from 'react-intersection-observer';
import 'react-loading-skeleton/dist/skeleton.css'
import { UseProduct } from '../UseContext';
import formatPrice from '../formatPrice/FormatPrice';
import InforProduct from '../home/InforProduct';
import { SkeletonLoadSideBar } from '../../skeleton/SkeletonLoad';

const ProductShop = ({ getALlProducts, isLoading }) => {
    const { handleAddCart, handleSelectedProduct, products } = useContext(UseProduct);
    console.log(products);
    const handleLoadList = (index, e) => {
        if (index === products.length - 1 && e === true) {
            getALlProducts();
        }
    }
    return (
        <>
            <div className="col-md-9 col-lg-9 col-sm-12 col-xs-12 smt-30" >
                <div className="row" >
                    <div className="product__list" style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <InforProduct />
                        {
                            products.map((item, index) => {
                                const formattedPrice = formatPrice(item.salesPrice);
                                return (
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
                                                <h2 style={{ height: "40px" }}> {item.name}</h2>
                                                <div className="d-flex justify-content-between mb-2">
                                                    <h2 className='text-muted'>Size {item.size}</h2>
                                                    <h2 className="text-muted me-5">Tình Trạng {item.status}</h2>
                                                </div>
                                                <h2 className="text-danger">Giá {formattedPrice}</h2>
                                            </div>
                                        </div>
                                    </InView>
                                )
                            }
                            )
                        }
                    </div>
                    {isLoading && <SkeletonLoadSideBar />}
                </div>
            </div>
        </>
    )
}

export default ProductShop