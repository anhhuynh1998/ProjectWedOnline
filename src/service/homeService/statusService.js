import axios from "axios";

class StatusService {
    static findAll() {
        return axios.get(`http://localhost:8080/api/home/status`)
    }
}
export default StatusService;