import axios from "axios";
const SERVER_API = `http://localhost:8080`;
class serviceUserInfo {
  static getAll() {
    return axios.get(SERVER_API + `/api/admin/userinfo`);
  }
  static addUserInfo(data) {
    return axios.post(SERVER_API + `/api/admin/userinfo/create`, data);
  }
  static editUserinfo(id) {
    return axios.put(SERVER_API + `/api/admin/userinfo/edit${id}`);
  }
  static delete(id) {
    return axios.delete(SERVER_API + `/api/admin/userinfo/${id}`);
  }
  static uploadFile(image) {
    return axios.post(SERVER_API + `/api/files/images/${image}`);
  }
}
export default serviceUserInfo;
