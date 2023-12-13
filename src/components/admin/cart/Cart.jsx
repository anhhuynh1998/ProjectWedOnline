import React, { useEffect, useState } from 'react';
import { CartService } from '../../../service/admin/cart/cartService';
import Search from './Search';

const Cart = () => {
    const [listCart, setListCart] = useState({});
    const [search, setSearch] = useState("");
    const [cartDetail, setCartDetail] = useState([]);

    useEffect(() => {
        try {
            // eslint-disable-next-line no-inner-declarations
            async function getAllCart() {
                let response = await CartService.getAllCart();
                console.log(response, "gio hang");
                setListCart(response.data);

                for(const cartItem of response.data){
                    const detailResponse = await 
                }
            }
            getAllCart();
        } catch (error) {
            console.log(error, "Danh sách giỏ hàng lỗi");
        }
    }, [])

    return (
        <>
            <Search setSearch={setSearch} search={search} setListCart={setListCart} />
            <table className="table table-hover rounded animate__animated  animate__bounceInLeft">
                <thead>
                    <tr >
                        <th scope="col" className='bg-danger text-white'>#</th>
                        <th scope="col" className='bg-danger text-white'>Tên</th>
                        <th scope="col" className='bg-danger text-white'>SDT</th>
                        <th scope="col" className='bg-danger text-white'>Địa Điểm</th>
                        <th scope="col" className='bg-danger text-white'>Sản Phẩm</th>
                        <th scope="col" className='bg-danger text-white'>Ngày Đặt</th>
                        <th scope="col" className='bg-danger text-white'>Giá</th>
                        <th scope="col" className='bg-danger text-white'>Trạng Thái</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        listCart.length && listCart.map((item, index) => (
                             
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td >{item.locationRegion ? item.locationRegion.provinceName : ""}</td>
                                <td>{item.shippingFee}</td>
                                <td>{item.orderDate}</td>
                                <td>{item.totalPrice}</td>
                                <div className="dropdown show ">
                                    <a
                                        className="btn bg-success  dropdown-toggle"
                                        href="#"
                                        role="button"
                                        id="dropdownMenuLink"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        {item.status ? item.status.name : ""}
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </div>
                                </div>

                            </tr>

                        ))
                    }
                </tbody>
            </table>

        </>
    );
};

export default Cart;