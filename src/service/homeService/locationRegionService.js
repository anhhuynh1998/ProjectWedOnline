import axios from "axios";

const LOCATIONREGION_API = `https://vapi.onedev.top/api/v1`;

class LocationRegionService {
    static getAllProvinces() {
        return axios.get(`${LOCATIONREGION_API}/provinces`);
    }
    static getAllDistricts(provinceId) {
        if (provinceId) {
            return axios.get(`${LOCATIONREGION_API}/districts/${provinceId}`);
        }
    }
    static getAllWards(districtId) {
        if (districtId) {
            return axios.get(`${LOCATIONREGION_API}/wards/${districtId}`)
        }
    }
}
export default LocationRegionService;