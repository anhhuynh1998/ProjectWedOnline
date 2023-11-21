import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"

const CartTotal = ({ cartDetails }) => {
    const totalPrice = cartDetails.total;
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(totalPrice)
    }, [totalPrice])

    const handleFreeShipping = () => {
        setTotal(totalPrice);
    }
    const handleShipping = () => {
        setTotal(totalPrice + 30000)
    }

    return (
        <div className="col-md-4 col-sm-5 col-xs-12">
            <div className="cart_totals">
                <h2>Cart Totals</h2>
                <table>
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
                                <ul id="shipping_method">
                                    <li onClick={handleShipping}>
                                        <input type="radio" name="shipping_option" id="flatRate" />
                                        <label htmlFor="flatRate" >
                                            Flat Rate: <span className="amount">30000</span>
                                        </label>
                                    </li>
                                    <li onClick={handleFreeShipping}>
                                        <input type="radio" name="shipping_option" id="freeShipping" />
                                        <label htmlFor="freeShipping" >Free Shipping</label>
                                    </li>
                                </ul>
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
                <NavLink to={`/checkout`}>
                    <div className="wc-proceed-to-checkout">
                        <a type="button" className="text-white">Proceed to Checkout</a>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}
export default CartTotal;