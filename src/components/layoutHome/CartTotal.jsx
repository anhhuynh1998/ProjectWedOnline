/* eslint-disable react/prop-types */
import { useEffect } from "react";
import CartService from "../../service/homeService/cartService";
import { ToastCheckOutSuccess } from "../../toastify/Toast";
import { useNavigate } from "react-router-dom";

const CartTotal = ({ total, setTotal, totalPrice, shippingFee, name, phone, locationRegion }) => {
    const backHome = useNavigate();
    useEffect(() => {
        setTotal(totalPrice)
    }, [totalPrice])

    const data = {
        name,
        phone,
        shippingFee,
        totalPrice: total,
        locationRegion
    }

    const checkOut = async (e) => {
        e.preventDefault();
        if (localStorage.getItem("jwt")) {
            await CartService.checkOut(data);
            ToastCheckOutSuccess();
        } else {
            await CartService.checkOutNotLogin(data);
            localStorage.removeItem("productDetail");
            ToastCheckOutSuccess();
            setTimeout(() => {
                backHome("/home")
            }, 4000)
        }
    }

    return (
        <div className="cart_totals">
            <h2>TỔNG GIỎ HÀNG</h2>
            <table style={{ display: "block", width: "180px" }}>
                <tbody>
                    <tr className="cart-subtotal">
                        <th>Tổng Phụ</th>
                        <td>
                            <span className="amount">{totalPrice}</span>
                        </td>
                    </tr>
                    <tr className="shipping">
                        <th>Phí Vận Chuyển</th>
                        <td>
                            <span className="amount">{shippingFee}</span>
                        </td>
                    </tr>
                    <tr className="order-total">
                        <th>Tổng Tiền</th>
                        <td>
                            <strong>
                                <span className="amount">{total}</span>
                            </strong>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="wc-proceed-to-checkout">
                <button className="btn btn-danger" onClick={checkOut}>Xác Nhận Đặt Hàng</button>
            </div>
        </div>
    )
}
export default CartTotal;