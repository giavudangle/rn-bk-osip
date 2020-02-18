// import { axios } from '../lib/custom-axios';
// import { API_URL, TEST_ID, BUNDLES_PAGE_SIZE } from '../config';

// export const UsersAPI = {
//     signUp: data => {
//         return axios.post(`${API_URL}users`, data);
//     },

//     // getInformationByUserName: username => {
//     //     return axios.get(`${API_URL}users/${username}`);
//     // },

//     getInformationByUserName: username => {
//         return axios.get(`${API_URL}users/${username}`);
//     },

//     getBundles: (username, startAfter) => {
//         return axios.get(`${API_URL}users/${username}/bundles`, {
//             params: {
//                 limit: BUNDLES_PAGE_SIZE,
//                 ...(startAfter && { startAfter }),
//             },
//         });
//     },

//     getFollowers: username => {
//         return axios.get(`${API_URL}users/${username}/followers`);
//     },

//     getFollowing: username => {
//         return axios.get(`${API_URL}users/${username}/following`);
//     },

//     verifyAccountRequest: email => {
//         return axios.post(`${API_URL}users/verify-account-request`, { email });
//     },

//     verifyAccount: verifyAccountCode => {
//         return axios.post(`${API_URL}users/verify-account`, {
//             verifyAccountCode,
//         });
//     },
// };
