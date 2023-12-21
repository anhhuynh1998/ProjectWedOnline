/* eslint-disable no-inner-declarations */

import { useContext, useEffect, useState } from "react"
import CartService from "../../service/homeService/cartService";
import formatPrice from "./formatPrice/FormatPrice";
import CheckOut from "./Checkout";
import { UseProduct } from "./UseContext";
import { ToastSuccess } from "../../toastify/Toast";
import Background from "./userHome/background";
import LoginAndRegister from "./LoginAndRegister";

const Cart = () => {
    const productIdList = JSON.parse(localStorage.getItem('productDetail')) || [];
    const { setCount } = useContext(UseProduct);
    const [cartDetails, setCartDetails] = useState([]);
    const [total, setTotal] = useState(0);
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        if (localStorage.getItem("jwt")) {
            async function findAllByUser() {
                let response = await CartService.findAllByUser();
                setCartDetails(response.data.listCartDetail);
                setUserInfo(response.data);
                setCount(response.data.listCartDetail.length)
            }
            findAllByUser();
        }
        else {
            async function showCartDetailsNotLogin() {
                let response = await CartService.showCartDetailsNotLogin(productIdList);
                setCartDetails(response.data.listCartDetail);
                setCount(response.data.listCartDetail.length);
            }
            showCartDetailsNotLogin();
        }
    }, [])

    useEffect(() => {
        setTotal(cartDetails?.reduce((total, e) => total + e.total, 0));
    }, [cartDetails])

    const removeItem = async (id) => {
        if (localStorage.getItem("jwt")) {
            let response = await CartService.removeItem(id);
            setCartDetails(response.data.listCartDetail);
            setCount(response.data.listCartDetail.length)
            ToastSuccess("Đã Xóa Sản Phẩm Khỏi Giỏ Hàng")
        }
        else {
            const updateProductDetails = productIdList.filter(e => e !== id)
            localStorage.setItem("productDetail", JSON.stringify(updateProductDetails));
            setCartDetails(
                cartDetails?.filter(e => e.product.id !== id)
            )
            ToastSuccess("Đã Xóa Sản Phẩm Khỏi Giỏ Hàng")
            if (updateProductDetails.length === 0)
                localStorage.removeItem("productDetail");
            setCount(updateProductDetails.length);
        }
    }

    return (
        <div >
            <LoginAndRegister />
            <div className="body__overlay" />
            <Background message={"Giỏ Hàng"}
                img={"rgba(0, 0, 0, 0) url(images/bg/cart1.jpeg) no-repeat scroll center center / cover"}
                animateH2={"animate__animated animate__bounceInDown"}
                animateNav={"animate__animated animate__flash"} />

            <div className="cart-main-area ptb--120 bg__white">
                <div className="container animate__animated animate__bounceInLeft">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="table-content table-responsive col-xs-12">
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="product-thumbnail">Hình Ảnh</th>
                                            <th className="product-name">Tên Sản Phẩm</th>
                                            <th className="product-price">Giá</th>
                                            <th className="product-quantity">Số Lượng</th>
                                            <th className="product-subtotal">Tổng</th>
                                            <th className="product-remove">Xóa</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartDetails && cartDetails?.map((item, index) => {
                                                const formattedPrice = formatPrice(item?.product?.price);
                                                return (
                                                    <tr key={index}>
                                                        <td className="product-thumbnail">
                                                            <a >
                                                                <img src={item?.product?.listFile[0]} alt="product img" />
                                                            </a>
                                                        </td>
                                                        <td className="product-name">
                                                            <a>{item.product?.name}</a>
                                                        </td>
                                                        <td className="product-price">
                                                            <span className="amount">{formattedPrice}</span>
                                                        </td>
                                                        <td className="product-quantity">
                                                            <input type="number" defaultValue={1} readOnly />
                                                        </td>
                                                        <td className="product-subtotal">{formattedPrice}</td>
                                                        <td className="product-remove">
                                                            <a type="button" onClick={() => removeItem(item?.product?.id)}>
                                                                <i className="fa-solid fa-trash"></i></a>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <CheckOut cartDetails={cartDetails} total={total} userInfo={userInfo} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart