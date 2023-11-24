/* eslint-disable react/prop-types */
import { useEffect } from "react";
import CartService from "../../service/homeService/cartService";

const CartTotal = ({ total, setTotal, totalPrice, shippingFee, name, phone, locationRegion }) => {

    useEffect(() => {
        setTotal(totalPrice)
    }, [totalPrice])

    const checkOut = async (e) => {
        e.preventDefault();
        await CartService.checkOut({
            name,
            phone,
            shippingFee,
            locationRegion: locationRegion
        });
    }

    return (
        <div className="cart_totals">
            <h2>Cart Totals</h2>
            <table style={{ display: "block", width: "180px" }}>
                <tbody>
                    <tr className="cart-subtotal">
                        <th>Subtotal</th>
                        <td>
                            <span className="amount">{totalPrice}</span>
                        </td>
                    </tr>
                    <tr className="shipping">
                        <th>Shipping</th>
                        <td>
                            <span className="amount">{shippingFee}</span>
                        </td>
                    </tr>
                    <tr className="order-total">
                        <th>Total</th>
                        <td>
                            <strong>
                                <span className="amount">{total}</span>
                            </strong>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="wc-proceed-to-checkout">
                <button className="btn btn-danger" onClick={checkOut}> Proceed to Checkout</button>
            </div>
        </div>
    )
}
export default CartTotal;