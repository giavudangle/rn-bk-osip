// import { bindActionCreators } from 'redux';
// import { createAction } from 'redux-actions';
// import { createActionThunk } from 'redux-thunk-actions';

// import { BundlesAPI } from '../../api/bundles';
// import { async } from 'rxjs/internal/scheduler/async';

// import { BUNDLES_PAGE_SIZE, BUNDLE_STATUS } from '../../config';

// import {
//     GET_NEWEST_BUNDLES,
//     GET_NEWEST_BUNDLES_STARTED,
//     GET_BUNDLE,
//     GET_NEWSFEED_BUNDLES,
//     GET_DISCOVER_BUNDLES,
//     GET_RELEVANT_BUNDLES,
//     GET_BUNDLES_BY_KEYWORD,
//     UPDATE_ACTIVE_BUNDLE_STATUS,
//     GET_MY_BUNDLES_LATEST,
// } from '../action-types';
// import { MeAPI } from '../../api/me';

// const updateActiveBundleStatus = createAction(
//     UPDATE_ACTIVE_BUNDLE_STATUS,
//     status => status
// );

// export const getBundlesByKeyword = createActionThunk(
//     GET_BUNDLES_BY_KEYWORD,
//     (...extras) => {
//         const { dispatch, getState } = extras[0];
//         const keyword = extras[0];

//         return new Promise(async (resolve, reject) => {
//             try {
//                 const { data: res } = await BundlesAPI.GetBundlesByKeyword(
//                     keyword
//                 );
//                 if (res.success) {
//                     resolve(res.payload);
//                 }
//             } catch (error) {
//                 console.log(error);
//                 reject(error);
//             }
//         });
//     }
// );

// export const getNewestBundles = createActionThunk(
//     GET_NEWEST_BUNDLES,
//     (...extras) => {
//         const isReset = extras[0];
//         const { dispatch, getState } = extras[1];
//         const { offsetId, data } = getState().bundles.newest;

//         return new Promise(async (resolve, reject) => {
//             try {
//                 const { data: res } = await BundlesAPI.GetNewestBundles(
//                     isReset ? null : offsetId
//                 );
//                 if (res.success) {
//                     const newData = isReset
//                         ? res.payload
//                         : data.concat(res.payload);
//                     const offsetId =
//                         res.payload.length > BUNDLES_PAGE_SIZE - 1
//                             ? res.payload[BUNDLES_PAGE_SIZE - 1]._id
//                             : null;
//                     resolve({ data: newData, offsetId, isLoading: false });
//                 }
//             } catch (error) {
//                 console.log(error);
//                 reject(error);
//             }
//         });
//     }
// );

// export const getNewsFeedBundles = createActionThunk(
//     GET_NEWSFEED_BUNDLES,
//     (...extras) => {
//         const isReset = extras[0];
//         const { dispatch, getState } = extras[1];
//         const { offsetId, data } = getState().bundles.newsfeed;

//         return new Promise(async (resolve, reject) => {
//             try {
//                 if (!isReset && offsetId == null) {
//                     resolve({ data, offsetId, isLoading: false });
//                     return;
//                 }

//                 const { data: res } = await BundlesAPI.GetNewsFeedBundles(
//                     isReset ? null : offsetId
//                 );
//                 console.log('getNewsFeedBundles');
//                 if (res.success) {
//                     const newData = isReset
//                         ? res.payload
//                         : data.concat(res.payload);
//                     const offsetId =
//                         res.payload.length > BUNDLES_PAGE_SIZE - 1
//                             ? res.payload[BUNDLES_PAGE_SIZE - 1]._id
//                             : null;
//                     resolve({ data: newData, offsetId, isLoading: false });
//                 }
//             } catch (error) {
//                 console.log(error);
//                 reject(error);
//             }
//         });
//     }
// );

// export const getDiscoverBundles = createActionThunk(
//     GET_DISCOVER_BUNDLES,
//     (...extras) => {
//         const isReset = extras[0];
//         const { dispatch, getState } = extras[1];
//         const { offsetId, data } = getState().bundles.discover;

//         return new Promise(async (resolve, reject) => {
//             try {
//                 if (!isReset && offsetId == null) {
//                     resolve({ data, offsetId, isLoading: false });
//                     return;
//                 }

//                 const { data: res } = await BundlesAPI.GetDiscoverBundles(
//                     isReset ? null : offsetId
//                 );
//                 console.log('getDiscoverBundles');
//                 if (res.success) {
//                     const newData = isReset
//                         ? res.payload
//                         : data.concat(res.payload);
//                     const offsetId =
//                         res.payload.length > BUNDLES_PAGE_SIZE - 1
//                             ? res.payload[BUNDLES_PAGE_SIZE - 1]._id
//                             : null;
//                     resolve({ data: newData, offsetId, isLoading: false });
//                 }
//             } catch (error) {
//                 console.log(error);
//                 reject(error);
//             }
//         });
//     }
// );

// export const getRelevantBundles = createActionThunk(
//     GET_RELEVANT_BUNDLES,
//     (...extras) => {
//         const { dispatch, getState } = extras[0];
//         const { token } = getState().me;

//         return new Promise(async (resolve, reject) => {
//             try {
//                 // const { data: res } = await BundlesAPI.GetRelevantBundles();
//                 // if (res.success) {
//                 //     resolve(res.payload);
//                 // }
//                 resolve([]);
//             } catch (error) {
//                 console.log(error);
//                 reject(error);
//             }
//         });
//     }
// );

// export const getMyBundles = createActionThunk(
//     GET_MY_BUNDLES_LATEST,
//     (...extras) => {
//         const isReset = extras[0];
//         const { dispatch, getState } = extras[1];
//         const { offsetId, data } = getState().bundles.me;

//         return new Promise(async (resolve, reject) => {
//             try {
//                 if (!isReset && offsetId == null) {
//                     resolve({ data, offsetId, isLoading: false });
//                     return;
//                 }

//                 const { data: res } = await MeAPI.getBundles(
//                     isReset ? null : offsetId
//                 );
//                 if (res.success) {
//                     const offsetId =
//                         res.payload.length > BUNDLES_PAGE_SIZE - 1
//                             ? res.payload[BUNDLES_PAGE_SIZE - 1]._id
//                             : null;
//                     let newData = isReset
//                         ? res.payload
//                         : data.concat(res.payload);
//                     resolve({ data: newData, offsetId, isLoading: false });
//                 }
//             } catch (error) {
//                 console.log(error);
//                 reject(error);
//             }
//         });
//     }
// );

// export const getFullBundleBySlug = createActionThunk(
//     GET_BUNDLE,
//     (...extras) => {
//         const { dispatch, getState } = extras.pop();
//         const [bundleSlug] = extras;

//         return new Promise(async (resolve, reject) => {
//             try {
//                 dispatch(updateActiveBundleStatus(BUNDLE_STATUS.LOADING));

//                 const {
//                     data: { success, payload },
//                 } = await BundlesAPI.GetDetails(bundleSlug);

//                 if (success) resolve(payload);

//                 dispatch(updateActiveBundleStatus(BUNDLE_STATUS.SUCCESS));
//             } catch ({ response }) {
//                 if (response.status === 423) {
//                     dispatch(updateActiveBundleStatus(BUNDLE_STATUS.LOCKED));
//                 }

//                 reject(response);
//             }
//         });
//     }
// );

// export const likeBundle = (bundleId, doLike) => async (dispatch, getState) => {
//     try {
//         const { data: res } =
//             doLike === true
//                 ? await BundlesAPI.likeBundle(bundleId)
//                 : await BundlesAPI.unlikeBundle(bundleId);

//         if (res.success) return Promise.resolve(res.payload);
//         else return Promise.reject(false);
//     } catch (error) {
//         return Promise.reject(false);
//     }
// };

// export const getDetailsProtectedBundle = createActionThunk(
//     GET_BUNDLE,
//     (...extras) => {
//         const { dispatch, getState } = extras.pop();
//         const [bundleSlug, pin] = extras;

//         return new Promise(async (resolve, reject) => {
//             try {
//                 dispatch(updateActiveBundleStatus(BUNDLE_STATUS.LOADING));

//                 const {
//                     data: { success, payload },
//                 } = await BundlesAPI.GetDetailsProtectedBundle(bundleSlug, pin);

//                 dispatch(updateActiveBundleStatus(BUNDLE_STATUS.SUCCESS));
//                 if (success) {
//                     resolve(payload);
//                 }
//             } catch ({ response }) {
//                 console.log('Error ', response.data);
//                 reject(response.data);
//             }
//         });
//     }
// );

// const createBundle = data => async (dispatch, getState) => {
//     try {
//         const { data: res } = await BundlesAPI.create(data);

//         if (res.success) {
//             return Promise.resolve(res.payload);
//         } else {
//             return Promise.reject(false);
//         }
//     } catch (err) {
//         console.log(err);
//         return Promise.reject(false);
//     }
// };

// const deleteBundle = bundleId => async (dispatch, getState) => {
//     try {
//         const { data: res } = await BundlesAPI.delete(bundleId);
//         if (res.success) {
//             return Promise.resolve(res.payload);
//         } else {
//             return Promise.reject(false);
//         }
//     } catch (err) {
//         return Promise.reject(false);
//     }
// };

// const updateBundle = (bundleId, data) => async (dispatch, getState) => {
//     try {
//         const { token } = getState().me;
//         const { data: res } = await BundlesAPI.updateContent(bundleId, data);

//         if (res.success) {
//             return Promise.resolve(res);
//         } else {
//             return Promise.reject(false);
//         }
//     } catch (err) {
//         return Promise.reject(false);
//     }
// };

// const editBundleFile = (bundleId, fileId, content) => async (
//     dispatch,
//     getState
// ) => {
//     try {
//         const { data: res } = await BundlesAPI.UpdateBundleFile(
//             bundleId,
//             fileId,
//             content
//         );

//         if (res.success) {
//             return Promise.resolve(res.payload);
//         } else {
//             return Promise.reject(false);
//         }
//     } catch (err) {
//         return Promise.reject(false);
//     }
// };

// const createFile = (bundleId, index) => async (dispatch, getState) => {
//     try {
//         const { data: res } = await BundlesAPI.createFile(bundleId, index);
//         if (res.success) {
//             return Promise.resolve(res.payload);
//         } else {
//             return Promise.reject(false);
//         }
//     } catch (error) {
//         console.log(error);
//         return Promise.reject(false);
//     }
// };

// const updatePrivacy = (bundleId, privacy, pin = '') => async (
//     dispatch,
//     getState
// ) => {
//     try {
//         const { data: res } = await BundlesAPI.updatePrivacy(
//             bundleId,
//             privacy,
//             pin
//         );
//         if (res.success) {
//             return Promise.resolve(res.payload);
//         } else {
//             return Promise.reject(false);
//         }
//     } catch (err) {
//         return Promise.reject(false);
//     }
// };

// const deleteFile = (bundleId, fileId) => async (dispatch, getState) => {
//     try {
//         const { data: res } = await BundlesAPI.deleteFile(bundleId, fileId);
//         if (res.success) {
//             return Promise.resolve(res.payload);
//         } else {
//             return Promise.reject(false);
//         }
//     } catch (err) {
//         return Promise.reject(false);
//     }
// };

// const sortFiles = (bundleId, fileIds) => async (dispatch, getState) => {
//     try {
//         const { data: res } = await BundlesAPI.sortFiles(bundleId, fileIds);
//         if (res.success) {
//             return Promise.resolve(res.payload);
//         } else {
//             return Promise.reject(false);
//         }
//     } catch (err) {
//         console.log(err);
//         return Promise.reject(false);
//     }
// };

// export const bundlesActions = {
//     createBundle,
//     deleteBundle,
//     getFullBundleBySlug,
//     getDetailsProtectedBundle,
//     updateBundle,
//     getNewestBundles,
//     getNewsFeedBundles,
//     getDiscoverBundles,
//     getMyBundles,
//     getRelevantBundles,
//     getBundlesByKeyword,
//     editBundleFile,
//     createFile,
//     updatePrivacy,
//     deleteFile,
//     sortFiles,
//     likeBundle,
// };

// export function bindBundlesActions(currentActions, dispatch) {
//     return {
//         ...currentActions,
//         bundlesActions: bindActionCreators(bundlesActions, dispatch),
//     };
// }
