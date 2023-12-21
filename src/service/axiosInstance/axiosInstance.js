import axios from "axios"

const token = localStorage.getItem("jwt")

export const axiosInstance = axios.create({
    headers: {
        'Authorization': `Bearer ${token}`
    }
})