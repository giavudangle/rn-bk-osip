import { axios } from '../lib/custom-axios';
import { API_URL, TEST_ID, BUNDLES_PAGE_SIZE, LOGIN_URL } from '../config';

export const MeAPI = {
    loginSocial: (accessToken, type) =>
        axios.post(LOGIN_URL, {
            accessToken,
            type,
        }),

    login: (username, password) =>
        axios.post(LOGIN_URL, {
            username,
            password,
        }),

    getProfile: () => {
        return axios.get(`${API_URL}me`);
    },

    getBundles: startAfter => {
        return axios.get(`${API_URL}me/bundles`, {
            params: {
                limit: BUNDLES_PAGE_SIZE,
                ...(startAfter && { startAfter }),
            },
        });
    },

    getSavedBundles: () => {
        return axios.get(`${API_URL}me/saved`);
    },

    saveBundle: id => {
        return axios.post(`${API_URL}me/save/${id}`);
    },

    unsaveBundle: id => {
        return axios.delete(`${API_URL}me/save/${id}`);
    },

    getFollowers: () => {
        return axios.get(`${API_URL}me/followers`);
    },

    getFollowing: () => {
        return axios.get(`${API_URL}me/following`);
    },

    followUser: id => {
        return axios.post(`${API_URL}me/follow/${id}`);
    },

    unfollowUser: id => {
        return axios.delete(`${API_URL}me/follow/${id}`);
    },

    changePassword: (currentPassword, newPassword) => {
        return axios.post(`${API_URL}me/change-password`, {
            currentPassword,
            newPassword,
        });
    },

    updateProfile: data => {
        return axios.patch(`${API_URL}me/profile`, data);
    },

    updateContact: data => {
        return axios.patch(`${API_URL}me/contact`, data);
    },

    publishProfile: privacy => {
        return axios.put(`${API_URL}me/profile?privacy=${privacy}`);
    },

    publishContact: privacy => {
        return axios.put(`${API_URL}me/contact?privacy=${privacy}`);
    },

    updateProfilePicture: data => {
        const formData = new FormData();
        formData.append('image', data);
        return axios.post(`${API_URL}me/profile/picture`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    },

    updateProfileCover: data => {
        const formData = new FormData();
        formData.append('image', data);
        return axios.post(`${API_URL}me/profile/cover`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    },

    changePreferences: data => {
        return axios.patch(`${API_URL}me/preferences`, data);
    },
};
