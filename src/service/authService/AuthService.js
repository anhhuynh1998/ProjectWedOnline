import axios from "axios";

const API_AUTH = `http://localhost:8080/api/auth`

class AuthService {
    static login(data) {
        if (data)
            return axios.post(`${API_AUTH}/login`, data)
    }
    static loginGoogle(data) {
        if (data)
            return axios.post(`${API_AUTH}/loginGoogle`, data)
    }
    
}
export default AuthService;