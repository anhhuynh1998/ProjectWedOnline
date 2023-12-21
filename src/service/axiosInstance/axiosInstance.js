import axios from "axios"


export const cancelTokenSource = axios.CancelToken.source();

export const axiosInstance = axios.create()


axiosInstance.interceptors.request.use(
    config => {
        // Thực hiện bất kỳ thay đổi nào bạn muốn vào config trước khi gửi yêu cầu
        const token = localStorage.getItem("jwt");
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        // Xử lý lỗi khi thiết lập yêu cầu
        return Promise.reject(error);
    }
);
