import axios from 'axios';
import config from './config.json';
import { Alert } from '../utils/alert';

export const apiPath = config.offlineApi;

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
    const headers = {
        Authorization: token ? `Bearer ${token}` : null,
    };

    if (method !== 'delete') {
        headers["Content-Type"] = contentType;
    }

    return axios({
        url: apiPath + url,
        method,
        data: method === 'delete' ? null : data,
        headers,
    })
}

export default httpService
