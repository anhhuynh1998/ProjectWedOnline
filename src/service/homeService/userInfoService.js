import { axiosInstance } from "../axiosInstance/axiosInstance";
const API_USERINFO = `http://localhost:8080/api/home/userInfos`

class UserInfoService {
    static getUserInfoByEmail() {
        return axiosInstance.get(API_USERINFO)
    }
    static showCartByUser() {
        return axiosInstance.get(`${API_USERINFO}/showCartByUser`)
    }
    static showProductByUser() {
        return axiosInstance.get(`${API_USERINFO}/showProductByUser`)
    }
    static updateUserInfo() {
        return axiosInstance.post(`${API_USERINFO}`)
    }
}
export default UserInfoService;