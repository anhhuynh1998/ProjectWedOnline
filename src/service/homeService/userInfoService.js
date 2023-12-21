import { axiosInstance } from "../axiosInstance/axiosInstance";
const API_USERINFO = `http://localhost:8080/api/home/userInfos`

class UserInfoService {
    static getUserInfoByEmail() {
        return axiosInstance.get(API_USERINFO)
    }
    static showCartByUser() {
        return axiosInstance.get(`${API_USERINFO}/showCartByUser`)
    }
}
export default UserInfoService;