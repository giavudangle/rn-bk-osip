// import { handleActions } from 'redux-actions';

// import {
//     GET_USER_INFORMATION_SUCCEEDED,
//     GET_USER_BUNDLES_SUCCEEDED,
//     GET_USER_FOLLOWERS_SUCCEEDED,
//     GET_USER_FOLLOWING_SUCCEEDED,
//     SET_USER_BUNDLES_LOADING,
// } from '../action-types';

// const initialState = {
//     information: { profile: {}, contact: {} },
//     bundles: {
//         data: [],
//         offsetId: null,
//         isLoading: false
//     },
//     following: [],
//     followers: [],
//     isLoading: false
// };

// export default handleActions(
//     {
//         [GET_USER_INFORMATION_SUCCEEDED]: (state, action) => {
//             return { ...state, information: action.payload };
//         },
//         [GET_USER_BUNDLES_SUCCEEDED]: (state, action) => {
//             return { ...state, bundles: action.payload };
//         },
//         [GET_USER_FOLLOWERS_SUCCEEDED]: (state, action) => {
//             return { ...state, followers: action.payload };
//         },
//         [GET_USER_FOLLOWING_SUCCEEDED]: (state, action) => {
//             return { ...state, following: action.payload };
//         },
//         [SET_USER_BUNDLES_LOADING]: (state, action) => {
//             return {
//                     ...state,
//                     bundles: {
//                         ...(state.bundles),
//                         isLoading: action.payload
//                     } };
//         },
//     },
//     initialState,
// );
