/* eslint-disable no-inner-declarations */

import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import CartService from "../../service/homeService/cartService";
import Checkout from "./Checkout";

const Cart = () => {
    const productIdList = JSON.parse(localStorage.getItem('productDetail')) || [];
    const [cartDetails, setCartDetails] = useState([]);
    const [totalNotLogin, setTotalNotLogin] = useState(0);

    useEffect(() => {
        if (localStorage.getItem("jwt")) {
            async function findAllByUser() {
                let response = await CartService.findAllByUser();
                setCartDetails(response.data.listCartDetail);
            }
            findAllByUser();
        }
        else {
            async function showCartDetailsNotLogin() {
                let response = await CartService.showCartDetailsNotLogin({ productIdList });
                setCartDetails(response.data.listCartDetail);
            }
            showCartDetailsNotLogin();
        }
    }, [])

    useEffect(() => {
        setTotalNotLogin(cartDetails?.reduce((total, e) => total + e.total, 0));
    }, [cartDetails])

    console.log(cartDetails);

    const removeItem = async (id) => {
        if (localStorage.getItem("jwt")) {
            let response = await CartService.removeItem(id);
            setCartDetails(response.data);
        }
        else {
            const updateProductDetails = productIdList.filter(e => e !== id)
            localStorage.setItem("productDetail", JSON.stringify(updateProductDetails));
            setCartDetails(
                cartDetails?.filter(e => e.product.id !== id)
            )
            if (updateProductDetails.length === 0)
                localStorage.removeItem("productDetail");
        }
    }

    return (
        <div >
            <div className="body__overlay" />
            <div
                className="ht__bradcaump__area"
                style={{
                    background:
                        "rgba(0, 0, 0, 0) url(images/bg/aoquan.jpeg) no-repeat scroll center center / cover"
                }}
            >
                <div className="ht__bradcaump__wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="bradcaump__inner text-center">
                                    <h2 className="bradcaump-title text-white" >Cart</h2>
                                    <nav className="bradcaump-inner" >
                                        <NavLink className="breadcrumb-item text-white" to={'/home'} >
                                            Home
                                        </NavLink>
                                        <span className="brd-separetor text-white" >/</span>
                                        <span className="breadcrumb-item active text-white" >Cart</span>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart-main-area ptb--120 bg__white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <form action="#">
                                <div className="table-content table-responsive col-xs-12">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail">Image</th>
                                                <th className="product-name">Product</th>
                                                <th className="product-price">Price</th>
                                                <th className="product-quantity">Quantity</th>
                                                <th className="product-subtotal">Total</th>
                                                <th className="product-remove">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cartDetails && cartDetails?.map((item, index) => (
                                                    <tr key={index}>
                                                        <td className="product-thumbnail">
                                                            <a href="#">
                                                                <img src={item?.product?.listFile[0]} alt="product img" />
                                                            </a>
                                                        </td>
                                                        <td className="product-name">
                                                            <a>{item.product?.name}</a>
                                                        </td>
                                                        <td className="product-price">
                                                            <span className="amount">{item?.product?.price}</span>
                                                        </td>
                                                        <td className="product-quantity">
                                                            <input type="number" defaultValue={1} readOnly />
                                                        </td>
                                                        <td className="product-subtotal">{item?.total}</td>
                                                        <td className="product-remove">
                                                            <a type="button" onClick={() => removeItem(item?.product?.id)}>X</a>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row">
                                    <Checkout cartDetails={cartDetails} totalNotLogin={totalNotLogin} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart