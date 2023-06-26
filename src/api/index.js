import axios from "axios";

const axiosInstance = axios.create({
    baseURL: '/api/',
    timeout: 1000,
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response.data.data;
    }
)
export default axiosInstance;