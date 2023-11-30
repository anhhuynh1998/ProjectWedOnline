import { Flip, Zoom, toast } from "react-toastify";

export const ToastSuccess = (message) => {
    toast.success(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Flip,
        theme: "light",
    });
}

export const ToastError = (message) => {
    toast.error(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Zoom,
        theme: "light",
    });
}

export const ToastAdToCartSuccess = () => {
    ToastSuccess('Thêm Vào Giỏ Hàng Thành Công');
}

export const ToastAdToCartError = () => {
    ToastError('Sản Phẩm Đã Tồn Tại');
}

export const ToastCheckOutSuccess = () => {
    ToastSuccess('Đặt Hàng Thành Công');
}


