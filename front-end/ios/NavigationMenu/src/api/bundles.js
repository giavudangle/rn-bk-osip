// import { axios } from '../lib/custom-axios';
// import { API_URL, TEST_ID, BUNDLE_ID, BUNDLES_PAGE_SIZE } from '../config';

// export const BundlesAPI = {
//     create: data => {
//         return axios.post(`${API_URL}bundles`, data);
//     },

//     delete: id => {
//         return axios.delete(`${API_URL}bundles/${id}`);
//     },

//     updateContent: (id, data) => {
//         return axios.patch(`${API_URL}bundles/${id}`, data);
//     },

//     GetDetails: id => {
//         return axios.get(`${API_URL}bundles/${id}`);
//     },

//     GetDetailsProtectedBundle: (slug, pin) => {
//         return axios.post(`${API_URL}bundles/protected`, {
//             slug,
//             pin,
//         });
//     },

//     GetNewestBundles: startAfter => {
//         return axios.get(`${API_URL}bundles`, {
//             params: {
//                 limit: BUNDLES_PAGE_SIZE,
//                 ...(startAfter && { startAfter }),
//             },
//         });
//     },

//     GetNewsFeedBundles: () => {
//         return axios.get(`${API_URL}bundles/newsfeed`);
//     },

//     GetDiscoverBundles: startAfter => {
//         return axios.get(`${API_URL}me/bundles/discover`, {
//             params: {
//                 limit: BUNDLES_PAGE_SIZE,
//                 ...(startAfter && { startAfter }),
//             },
//         });
//     },

//     GetBundles: type => {
//         return axios.get(`${API_URL}bundles/${type}`);
//     },

//     GetBundlesByKeyword: keyword => {
//         return axios.get(`${API_URL}bundles/search?keyword=${keyword}`);
//     },

//     CreateBundleWithAccount: data => {
//         return axios.post(`${API_URL}bundles`, data);
//     },

//     UpdateBundleFile: (bundleId, fileId, file) => {
//         return axios.patch(
//             `${API_URL}bundles/${bundleId}/file/${fileId}`,
//             file
//         );
//     },

//     createFile: (bundleId, position) => {
//         return axios.post(`${API_URL}bundles/${bundleId}/file`, { position });
//     },

//     updatePrivacy: (bundleId, privacy, pin = '') => {
//         return axios.put(`${API_URL}bundles/${bundleId}?privacy=${privacy}`, {
//             pin,
//         });
//     },

//     deleteFile: (bundleId, fileId) => {
//         return axios.delete(`${API_URL}bundles/${bundleId}/file/${fileId}`);
//     },

//     sortFiles: (bundleId, fileIds) => {
//         return axios.post(`${API_URL}bundles/${bundleId}/sort`, {
//             files: fileIds,
//         });
//     },

//     likeBundle: bundleId => {
//         return axios.post(`${API_URL}bundles/${bundleId}/like`);
//     },

//     unlikeBundle: bundleId => {
//         return axios.post(`${API_URL}bundles/${bundleId}/unlike`);
//     },
// };
