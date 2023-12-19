/* eslint-disable react/prop-types */
/* eslint-disable no-inner-declarations */
import React, { useEffect, useState } from 'react';
import StatusService from '../../../service/homeService/statusService';
import { ToastError } from '../../../toastify/Toast';
import { CartService } from '../../../service/admin/cart/cartService';

const ChangeStatus = ({ setListCart, setStatusCart, selectStatus, statusCart, setSelectStatus, preListCart, search }) => {
    const [nodata, setNodata] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [statusName, setStatusName] = useState("Tất cả");

    useEffect(() => {
        try {
            async function getAllStatus() {
                let response = await StatusService.findAll();
                console.log(response.data, "iiii");
                setStatusCart(response.data);
            }
            getAllStatus();
        } catch (error) {
            ToastError("Trạng thái bị lỗi");
        }
    }, [])

    const changeStatus = async (e, id) => {
        e.preventDefault();
        setShowToast(false);
        try {
            let response = await CartService.searchNameAndPhone(search, id)
            if (response.data.content.length === 0) {
                setNodata(true);
                setListCart([])
                ToastError("Không tìm thấy trạng thái")
            } else {
                setNodata(false)
                setListCart(response.data.content)
            }
        } catch (error) {
            ToastError("Chọn trạng thái bị lỗi")
        }
    }

    const changePreStatus = async () => {
        await setListCart(preListCart)
        setStatusName("Tất cả")
    }

    return (
        <>
            <table className="rounded animate__animated animate__bounceInDown ">
                <tbody >
                    <tr>
                        <div className="dropdown show w-100">
                            <a
                                className="btn bg-primary dropdown-toggle"
                                href="#"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                id='dropdownChangeStatus'
                            >
                                {`${statusName}`}
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className='dropdown-item' onClick={changePreStatus}
                                    href="#">Tất Cả</a>
                                {statusCart.length && statusCart.map((item, index) => (
                                    <a
                                        className={`dropdown-item ${item.id === selectStatus ? 'active' : ''
                                            }`}
                                        href="#"
                                        key={index}
                                        value={item.id}
                                        onClick={(e) => {
                                            setSelectStatus(item)
                                            changeStatus(e, item.id)
                                            setStatusName(item.name)
                                        }}
                                    >
                                        {item.name}
                                    </a>
                                ))
                                }
                            </div>
                        </div>
                    </tr>
                </tbody>
            </table>
            
        </>
    );
};

export default ChangeStatus;