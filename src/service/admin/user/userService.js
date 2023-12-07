import axios from "axios";

const USERS_API = 'http://localhost:8080/api/admin/users';

export class UserService{
    static countUsers(){
        return axios.get(`${USERS_API}/count`)
    }
    
}
