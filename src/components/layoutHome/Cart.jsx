
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { UseProduct } from "./UseContext"

const Cart = () => {

    const { cartDetailList } = useContext(UseProduct);
    console.log(cartDetailList);
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
                                                cartDetailList.map(item => (
                                                    <tr key={item.id}>
                                                        <td className="product-thumbnail">
                                                            <a href="#">
                                                                <img src={cartDetailList.listFile[0]} alt="product img" />
                                                            </a>
                                                        </td>
                                                        <td className="product-name">
                                                            <a>{cartDetailList.name}</a>
                                                        </td>
                                                        <td className="product-price">
                                                            <span className="amount">{cartDetailList.price}</span>
                                                        </td>
                                                        <td className="product-quantity">
                                                            <input type="number" defaultValue={1} />
                                                        </td>
                                                        <td className="product-subtotal">£50.00</td>
                                                        <td className="product-remove">
                                                            <a href="#">X</a>
                                                        </td>
                                                    </tr>

                                                ))
                                            }

                                        </tbody>
                                    </table>
                                </div>
                                <div className="row">
                                    <div className="col-md-8 col-sm-7 col-xs-12">
                                        <div className="buttons-cart">
                                            <input type="submit" defaultValue="Update Cart" />
                                            <a type="button" className="text-white">Continue Shopping</a>
                                        </div>
                                    </div>

                                    {/* cart totals */}
                                    <div className="col-md-4 col-sm-5 col-xs-12">
                                        <div className="cart_totals">
                                            <h2>Cart Totals</h2>
                                            <table>
                                                <tbody>
                                                    <tr className="cart-subtotal">
                                                        <th>Subtotal</th>
                                                        <td>
                                                            <span className="amount">£215.00</span>
                                                        </td>
                                                    </tr>
                                                    <tr className="shipping">
                                                        <th>Shipping</th>
                                                        <td>
                                                            <ul id="shipping_method">
                                                                <li>
                                                                    <input type="radio" name="shipping_option" id="flatRate" />
                                                                    <label htmlFor="flatRate">
                                                                        Flat Rate: <span className="amount">£7.00</span>
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <input type="radio" name="shipping_option" id="freeShipping" />
                                                                    <label htmlFor="freeShipping">Free Shipping</label>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>

                                                    <tr className="order-total">
                                                        <th>Total</th>
                                                        <td>
                                                            <strong>
                                                                <span className="amount">£215.00</span>
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