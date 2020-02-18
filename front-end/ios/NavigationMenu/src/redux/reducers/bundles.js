// import { handleActions } from 'redux-actions';
// import {
//     GET_NEWEST_BUNDLES_SUCCEEDED,
//     GET_NEWEST_BUNDLES_STARTED,
//     GET_NEWSFEED_BUNDLES_SUCCEEDED,
//     GET_NEWSFEED_BUNDLES_STARTED,
//     GET_DISCOVER_BUNDLES_SUCCEEDED,
//     GET_DISCOVER_BUNDLES_STARTED,
//     GET_RELEVANT_BUNDLES_SUCCEEDED,
//     GET_RELEVANT_BUNDLES_STARTED,
//     GET_BUNDLES_BY_KEYWORD_SUCCEEDED,
//     GET_BUNDLES_BY_KEYWORD_STARTED,
//     GET_BUNDLE,
//     GET_BUNDLE_SUCCEEDED,
//     UPDATE_ACTIVE_BUNDLE_STATUS,
//     GET_MY_BUNDLES_LATEST_SUCCEEDED,
// } from '../action-types';
// import { BUNDLE_STATUS } from '../../config';

// const initialState = {
//     newest: {
//         data: [],
//         offsetId: null,
//         isLoading: false,
//     },
//     newsfeed: {
//         data: [],
//         offsetId: null,
//         isLoading: false,
//     },
//     relevant: {
//         data: [],
//         offsetId: null,
//         isLoading: false,
//     },
//     discover: {
//         data: [],
//         offsetId: null,
//         isLoading: false,
//     },
//     me: {
//         data: [],
//         offsetId: null,
//         isLoading: false,
//     },
//     bundlesByKeyword: {
//         data: [],
//         offsetId: null,
//         isLoading: false,
//     },
//     activeBundle: {},
//     activeBundleStatus: BUNDLE_STATUS.SUCCESS
// };

// export default handleActions(
//     {
//         [GET_NEWEST_BUNDLES_STARTED]: (state, action) => ({
//             ...state,
//             newest: {
//                 ...state.newest,
//                 isLoading: true,
//             },
//         }),
//         [GET_NEWEST_BUNDLES_SUCCEEDED]: (state, action) => ({
//             ...state,
//             newest: action.payload,
//         }),

//         [GET_NEWSFEED_BUNDLES_STARTED]: (state, action) => ({
//             ...state,
//             newsfeed: {
//                 ...state.newsfeed,
//                 isLoading: true,
//             },
//         }),
//         [GET_NEWSFEED_BUNDLES_SUCCEEDED]: (state, action) => {
//             return {
//                 ...state,
//                 newsfeed: action.payload,
//             };
//         },

//         [GET_DISCOVER_BUNDLES_STARTED]: (state, action) => ({
//             ...state,
//             discover: {
//                 ...state.discover,
//                 isLoading: true,
//             },
//         }),
//         [GET_DISCOVER_BUNDLES_SUCCEEDED]: (state, action) => {
//             return { ...state, discover: action.payload };
//         },

//         [GET_RELEVANT_BUNDLES_SUCCEEDED]: (state, action) => {
//             return { ...state, relevant: { data: action.payload } };
//         },

//         [GET_MY_BUNDLES_LATEST_SUCCEEDED]: (state, action) => {
//             return { ...state, me: action.payload };
//         },

//         [GET_BUNDLES_BY_KEYWORD_SUCCEEDED]: (state, action) => {
//             return {
//                 ...state,
//                 bundlesByKeyword: { data: action.payload },
//             };
//         },
//         [GET_BUNDLE_SUCCEEDED]: (state, action) => {
//             return {
//                 ...state,
//                 activeBundle: action.payload
//             };
//         },
//         [UPDATE_ACTIVE_BUNDLE_STATUS]: (state, action) => {
//             return {
//                 ...state,
//                 activeBundleStatus: action.payload
//             };
//         }
//     },
//     initialState,
// );
