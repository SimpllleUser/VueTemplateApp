import axios from 'axios';
import local_storage from "@/plugins/local_storage";

export default function (app, inject) {
    axios.defaults.baseURL = process.env.VUE_APP_API_URL;
    axios.defaults.headers.common['Accept'] = 'application/json';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.defaults.headers.Authorization = local_storage().getItem('currentUser')?.accessToken || "";
    axios.interceptors.request.use((config) => {
        return config;
    }, (error) => {
        return Promise.reject(error);
    });
    inject('axios', axios);
}
