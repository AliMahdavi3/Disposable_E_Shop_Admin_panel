import axios from 'axios';
import config from './config.json';
import { Alert } from '../utils/alert';

axios.interceptors.response.use((res) => {
    if (res.status !== 200 && res.status !== 201) {
        Alert('خطا...!', res.data.message, 'warning');
    }
    return res;
}, (error) => {
    Alert(error.response.status, 'مشکلی رخ داده!', 'error')
    return Promise.reject(error);
});

const httpService = (url, method, data = null, contentType = 'application/json') => {
    const token = localStorage.getItem('token');
    return axios({
        url: config.offlineApi + url,
        method,
        data,
        headers: {
            Authorization: token ? `Bearer ${token}` : null,
            "Content-Type": contentType,
        }
    })
}

export default httpService
