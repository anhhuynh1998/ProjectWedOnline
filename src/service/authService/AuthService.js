import axios from "axios";

const API_AUTH = `http://localhost:8080/api/auth`

class AuthService {
    static login(data) {
        return axios.post(`${API_AUTH}/login`, data)
    }
}
export default AuthService;