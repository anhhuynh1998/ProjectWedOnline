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
    }

    return (
        <>
            <table className="rounded animate__animated animate__bounceInDown ">
                <tbody >
                    <tr>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            onChange={(e) => {
                                if (e.target.value == 1) {
                                    changePreStatus()
                                }
                                else {

                                    const selectedOption = statusCart.find(
                                        (item) => item.id === parseInt(e.target.value)
                                    );
                                    setSelectStatus(selectedOption);
                                    setStatusName(selectedOption.name);
                                    changeStatus(e, selectedOption.id);
                                }
                            }}
                        >
                            <option value="1">Tất Cả</option>
                            {statusCart.length && statusCart.map((item, index) => (
                                <option key={index} value={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </tr>
                </tbody>
            </table>

        </>
    );
};

export default ChangeStatus;