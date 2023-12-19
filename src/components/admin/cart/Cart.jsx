/* eslint-disable no-undef */
/* eslint-disable no-inner-declarations */
import React, { useEffect, useState } from 'react';
import { CartService } from '../../../service/admin/cart/cartService';
import Search from './Search';
import formatPrice from '../../layoutHome/formatPrice/formatPrice';
import StatusService from '../../../service/homeService/statusService';
import { ToastError, ToastSuccess } from '../../../toastify/Toast';
import AddProduct from './AddProduct';
import ChangeStatus from './ChangeStatus';
import { NavLink, Navigate } from 'react-router-dom';


const Cart = () => {
    const [listCart, setListCart] = useState({});
    const [search, setSearch] = useState("");
    const [statusCart, setStatusCart] = useState({});
    const [selectStatus, setSelectStatus] = useState([]);
    const [preListCart, setPreListCart] = useState({})


    useEffect(() => {
        try {
            // eslint-disable-next-line no-inner-declarations
            async function getAllCart() {
                let response = await CartService.getAllCart();
                setPreListCart(response.data)
                setListCart(response.data);

                // for(const cartItem of response.data){
                //     const detailResponse = await 
                // }
            }
            getAllCart();
        } catch (error) {
            ToastError("Danh sách giỏ hàng lỗi");
        }
    }, [])

    useEffect(() => {
        try {
            async function getAllStatus() {
                let response = await StatusService.findAll();
                setStatusCart(response.data)
            }
            getAllStatus()
        } catch (error) {
            ToastError("Trạng thái bị lỗi")
        }
    }, [])

    const selectStatusPro = async (cartId, status) => {
        setSelectStatus(selectStatus);
        try {
            let response = await CartService.updateStatus(cartId, status.id);
            console.log(response.data, "eeeeeeeeeee");
            let response1 = await CartService.getAllCart();
            setListCart(response1.data);
            ToastSuccess("Thay đổi trạng thái thành công")

        } catch (error) {
            ToastError("Chọn trạng thái bị lỗi")
        }
    }

    useEffect(() => {
        // Kích hoạt tooltip
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
    }, [listCart]);

    // Hàm cắt ngắn nội dung
    function truncateText(text, maxLength) {
        if (text && text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        } else {
            return text;
        }
    }

    return (
        <>
            <div >
                <div className="col-3">
                    <div className="dropdown-container" >
                        <ChangeStatus
                            setListCart={setListCart}
                            selectStatus={selectStatus}
                            statusCart={statusCart}
                            setSelectStatus={setSelectStatus}
                            setStatusCart={setStatusCart}
                            preListCart={preListCart}
                            search={search}
                            className="change-status-dropdown"
                        />
                    </div>
                </div>
                <div className='col-9'>
                    <Search setSearch={setSearch} search={search} setListCart={setListCart} statusCart={selectStatus} />
                </div>
            </div>
            <table className="table table-hover rounded animate__animated animate__bounceInUp">
                <thead>
                    <tr >
                        <th scope="col" className='bg-danger text-white'>#</th>
                        <th scope="col" className='bg-danger text-white'>Tên Người Nhận</th>
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
                        listCart.length ?
                            listCart.length && listCart.map((item, index) => (

                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.phone}</td>
                                    <td >{item.locationRegion ? item.locationRegion.provinceName : ""}</td>
                                    <td data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-class="custom-tooltip"
                                        data-bs-title={item.productNames.join(", ")}>
                                        <span className="tooltip-placeholder">
                                            {truncateText(item.productNames.join(", "), 10)}</span>
                                    </td>
                                    <td>{item.orderDate}</td>
                                    <td>{formatPrice(item.totalPrice)}</td>
                                    <div className="dropdown show">
                                        <a
                                            className="btn bg-success dropdown-toggle"
                                            href="#"
                                            role="button"
                                            id="dropdownMenuLink"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            value={item.status.id}
                                        >
                                            {item.status ? item.status.name : ""}
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            {statusCart.map((statusItem, index) => (
                                                <a className="dropdown-item " href="#" key={index} value={statusItem.id}
                                                    onClick={() => selectStatusPro(item.id, statusItem)}
                                                >
                                                    {statusItem.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </tr>
                            )) : <div className='text-danger m-4 fs-5'>Không tìm thấy dữ liệu</div>

                    }
                </tbody>
            </table>
        </>
    );
};
export default Cart;
