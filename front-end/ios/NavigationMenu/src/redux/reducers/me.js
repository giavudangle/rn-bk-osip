import { handleActions } from 'redux-actions';
import {
    SET_TOKEN,
    GET_PROFILE_SUCCEEDED,
    GET_MY_BUNDLES_LATEST_SUCCEEDED,
    GET_MY_BUNDLES_SAVED_SUCCEEDED,
    GET_MY_FOLLOWING_SUCCEEDED,
    GET_MY_FOLLOWERS_SUCCEEDED,
    SET_CREATING_BUNDLE_STATE,
    RESET_TOKEN,
} from '../action-types';

const initialState = {
    token: '',
    role: '',
    isLoggedIn: false,
    information: {
        profile: {},
        contact: {},
    },
    latest: {
        data: [],
        offsetId: null,
    },
    saved: {
        data: [],
    },
    following: [],
    followers: [],
};

export default handleActions(
    {
        [SET_TOKEN]: (state, action) => ({
            ...state,
            ...action.payload,
            isLoggedIn: true,
        }),
        [RESET_TOKEN]: (state, action) => initialState,
        [GET_PROFILE_SUCCEEDED]: (state, action) => ({
                ...state,
                information: action.payload,
            }
        ),
        [GET_MY_BUNDLES_LATEST_SUCCEEDED]: (state, action) => ({
            ...state,
            latest: action.payload,
        }),
        [GET_MY_BUNDLES_SAVED_SUCCEEDED]: (state, action) => ({
            ...state,
            saved: { data: action.payload },
        }),
        [GET_MY_FOLLOWING_SUCCEEDED]: (state, action) => ({
            ...state,
            following: action.payload,
        }),
        [GET_MY_FOLLOWERS_SUCCEEDED]: (state, action) => ({
            ...state,
            followers: action.payload,
        }),
    },
    initialState
);
