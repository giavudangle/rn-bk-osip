// import { bindActionCreators } from 'redux';
// import { createAction } from 'redux-actions';
// import { createActionThunk } from 'redux-thunk-actions';
// import _ from 'lodash';

// import { UsersAPI } from '../../api/users';
// import { async } from 'rxjs/internal/scheduler/async';

// import { BUNDLES_PAGE_SIZE } from '../../config';

// import {
//     GET_PROFILE,
//     GET_SELF_BUNDLES,
//     GET_USER_INFORMATION,
//     GET_USER_BUNDLES,
//     GET_USER_FOLLOWERS,
//     GET_USER_FOLLOWING,
//     SET_USER_BUNDLES_LOADING,
// } from '../action-types';

// const setBundlesLoading = createAction(
//     SET_USER_BUNDLES_LOADING,
//     isLoading => isLoading
// );

// export const signUp = data => async (dispatch, getState) => {
//     try {
//         const { data: res } = await UsersAPI.signUp(data);
//         if (res.success) {
//             return Promise.resolve(true);
//         } else {
//             return Promise.reject(res.message);
//         }
//     } catch (err) {
//         return Promise.reject(err.response.data);
//     }
// };

// export const getUserInformationByUserName = createActionThunk(
//     GET_USER_INFORMATION,
//     (...extras) => {
//         return new Promise(async (resolve, reject) => {
//             try {
//                 const response = await UsersAPI.getInformationByUserName(
//                     extras[0]
//                 );
//                 if (response.data.success) {
//                     resolve(response.data.payload);
//                 }
//             } catch (err) {
//                 reject(err);
//             }
//         });
//     }
// );

// export const getBundles = createActionThunk(GET_USER_BUNDLES, (...extras) => {
//     const [userId, isReset, { dispatch, getState }] = extras;
//     const { offsetId, data } = getState().user.bundles;

//     return new Promise(async (resolve, reject) => {
//         try {
//             dispatch(setBundlesLoading(true));
//             const { data: res } = await UsersAPI.getBundles(
//                 userId,
//                 isReset ? null : offsetId
//             );

//             if (res.success) {
//                 const receivedBundles = res.payload;

//                 if (_.isEmpty(receivedBundles)) {
//                     // No new bundle -> do nothing
//                     resolve({ data, offsetId, isLoading: false });
//                     return;
//                 }

//                 resolve({
//                     data: _.concat(data, receivedBundles),
//                     offsetId: _.last(receivedBundles)['_id'],
//                     isLoading: false,
//                 });
//             }
//         } catch (err) {
//             dispatch(setBundlesLoading(false));
//             reject(err);
//         }
//     });
// });

// export const getFollowers = createActionThunk(
//     GET_USER_FOLLOWERS,
//     (...extras) => {
//         const [userId] = extras;

//         return new Promise(async (resolve, reject) => {
//             try {
//                 const { data: res } = await UsersAPI.getFollowers(userId);
//                 if (res.success) resolve(res.payload);
//             } catch (error) {
//                 reject(error);
//             }
//         });
//     }
// );

// export const getFollowing = createActionThunk(
//     GET_USER_FOLLOWING,
//     (...extras) => {
//         const [userId] = extras;

//         return new Promise(async (resolve, reject) => {
//             try {
//                 const { data: res } = await UsersAPI.getFollowing(userId);
//                 if (res.success) {
//                     resolve(res.payload);
//                 }
//             } catch (error) {
//                 reject(error);
//             }
//         });
//     }
// );

// export const verifyAccountRequest = email => async (dispatch, getState) => {
//     try {
//         const { data: res } = await UsersAPI.verifyAccountRequest(email);
//         if (res.success) return Promise.resolve(true);
//         else return Promise.reject(res.message);
//     } catch (err) {
//         console.log(err.response);
//         return Promise.reject(false);
//     }
// };

// export const verifyAccount = verifyAccountCode => async (
//     dispatch,
//     getState
// ) => {
//     try {
//         const { data: res } = await UsersAPI.verifyAccount(verifyAccountCode);
//         if (res.success) return Promise.resolve(true);
//         else return Promise.reject(res.message);
//     } catch (err) {
//         return Promise.reject(err);
//     }
// };

// export const userActions = {
//     signUp,
//     getUserInformationByUserName,
//     getBundles,
//     getFollowing,
//     getFollowers,
//     verifyAccountRequest,
//     verifyAccount,
// };

// export function bindUserActions(currentActions, dispatch) {
//     return {
//         ...currentActions,
//         userActions: bindActionCreators(userActions, dispatch),
//     };
// }
