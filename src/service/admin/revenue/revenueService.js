import axios from "axios";

const REVENUE_API = 'http://localhost:8080/api/admin/revenue';

export class RevenueService {
    static totalRevenue(start, end) {
        return axios.get(REVENUE_API + `?start=${start}&end=${end}`)
    }
}