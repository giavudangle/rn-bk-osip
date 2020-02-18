import { axios } from '../lib/custom-axios';
import { API_URL } from '../config';

export const AuthAPI = {
    Login: data => {
        return axios.post(`${API_URL}auth/login`, data);
    },

    Logout: () => {
        return axios.post(`${API_URL}auth/logout`);
    },

    // RecoverPassword: data => {
    //     return axios.post(`${API_URL}auth/recoverpassword`, data);
    // },

    // ResetPassword: data => {
    //     return axios.post(`${API_URL}auth/resetpassword`, data);
    // },
};
