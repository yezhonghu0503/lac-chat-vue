import axios from "axios";

export const chatAxios: any = axios({
    baseURL: 'http://43.134.90.37:8999',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
})