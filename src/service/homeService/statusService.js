import axios from "axios";
const STATUS_API = `http://localhost:8080/api/home/status`;
class StatusService {
    static findAll() {
        return axios.get(STATUS_API)
    }
    static update(){
        return axios.get(STATUS_API + `/update`)
    }
}
export default StatusService;