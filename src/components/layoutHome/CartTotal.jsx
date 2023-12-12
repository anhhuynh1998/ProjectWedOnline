/* eslint-disable react/prop-types */
import { useEffect } from "react";

const CartTotal = ({ total, setTotal, totalPrice, shippingFee, setData }) => {

    useEffect(() => {
        setTotal(totalPrice)
        setData(data);
    }, [totalPrice])

    const data = {
        shippingFee,
        totalPrice: total,
    }

    return (
        <></>
    )
}
export default CartTotal;