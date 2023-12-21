import axios from "axios";
const API_USERINFO = `http://localhost:8080/api/home/userInfos`

class UserInfoService {
    static getUserInfoByEmail(email) {
        if (email)
            return axios.post(API_USERINFO, email)
    }
    static showCartByUser(email) {
        if (email)
            return axios.post(`${API_USERINFO}/showCartByUser`, email)
    }
}
export default UserInfoService;