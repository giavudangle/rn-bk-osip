import { bindActionCreators } from 'redux';
import { createAction } from 'redux-actions';
import { createActionThunk } from 'redux-thunk-actions';
import _ from 'lodash';

import AsyncStorage from '@react-native-community/async-storage';
import { axios } from '../../lib/custom-axios';

import { MeAPI } from '../../api/me';

import { BUNDLES_PAGE_SIZE, AUTH_URL } from '../../config';

import {
    SET_TOKEN,
    RESET_TOKEN,
    GET_PROFILE,
    GET_MY_BUNDLES_LATEST,
    GET_MY_BUNDLES_SAVED,
    GET_MY_FOLLOWERS,
    GET_MY_FOLLOWING,
    SET_CREATING_BUNDLE_STATE,
} from '../action-types';
// import { FacebookSDK } from '../../lib/wrapper/facebook';
// import { setCookie, removeCookie } from '../../lib/storage';
import { BundlesAPI } from '../../api/bundles';


export const setToken = async (token) => {
    try {
      await AsyncStorage.setItem(SET_TOKEN, JSON.parse(token));
      return;
    } catch (error) {
      // Error saving data
    }
  };
  export const resetToken = async (token) => {
    try {
      await AsyncStorage.removeItem(RESET_TOKEN);
    } catch (error) {
      // Error saving data
    }
  };

export const login = (username, password) => async (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
        try {
            const {data}  = await MeAPI.login(username, password);
            const { token } = data.data;
            setToken(token)
            // dispatch(setToken(token));
            resolve();
        } catch (err) {
            reject(err.response);
        }
    });
};

export const logout = () => async (dispatch, getState) => {
    dispatch(resetToken());
};

export const setCreatingBundleState = createAction(
    SET_CREATING_BUNDLE_STATE,
    state => {
        return state;
    }
);

export const getProfile = createActionThunk(GET_PROFILE, (...extras) => {
    const { dispatch, getState } = extras[0];
    return new Promise(async (resolve, reject) => {
        try {
            const { data } = await MeAPI.getProfile();
            if (data.success) {
                resolve(data.payload);
            } else {
                reject();
            }
        } catch (err) {
            reject(err);
        }
    });
});

export const getBundles = createActionThunk(
    GET_MY_BUNDLES_LATEST,
    (...extras) => {
        const isReset = extras[0];
        const { dispatch, getState } = extras[1];
        const { offsetId, data } = getState().me.latest;

        return new Promise(async (resolve, reject) => {
            try {
                const { data: res } = await MeAPI.getBundles(
                    isReset ? null : offsetId
                );
                if (res.success) {
                    let newData = isReset
                        ? res.payload
                        : data.concat(res.payload);

                    const offsetId =
                        res.payload.length > BUNDLES_PAGE_SIZE - 1
                            ? res.payload[BUNDLES_PAGE_SIZE - 1]._id
                            : null;
                    resolve({ data: newData, offsetId, isLoading: false });
                }
            } catch (err) {
                reject(err);
            }
        });
    }
);

export const getFollowers = createActionThunk(GET_MY_FOLLOWERS, (...extras) => {
    const { dispatch, getState } = extras[0];
    return new Promise(async (resolve, reject) => {
        try {
            const { data } = await MeAPI.getFollowers();
            data.success && resolve(data.payload);
        } catch (err) {
            reject(err);
        }
    });
});

export const getFollowing = createActionThunk(GET_MY_FOLLOWING, (...extras) => {
    const { dispatch, getState } = extras[0];
    return new Promise(async (resolve, reject) => {
        try {
            const { data } = await MeAPI.getFollowing();
            data.success && resolve(data.payload);
        } catch (err) {
            reject(err);
        }
    });
});

export const getSavedBundles = createActionThunk(
    GET_MY_BUNDLES_SAVED,
    (...extras) => {
        const { dispatch, getState } = extras[0];
        return new Promise(async (resolve, reject) => {
            try {
                const { data } = await MeAPI.getSavedBundles();
                if (data.success) resolve(data.payload);
            } catch (err) {
                reject(err);
            }
        });
    }
);

export const updateInformation = newInfomation => async (
    dispatch,
    getState
) => {
    try {
        const { data } = await MeAPI.updateInformation(
            getState().me.token,
            newInfomation
        );

        if (data.success) {
            dispatch(getProfile());
            Promise.resolve(true);
        }
        return Promise.resolve(false);
    } catch (err) {
        return Promise.resolve(err.response);
    }
};

export const followUser = (id, doFollow) => async (dispatch, getState) => {
    try {
        const { data } =
            doFollow === true
                ? await MeAPI.followUser(id)
                : await MeAPI.unfollowUser(id);

        if (data.success) {
            dispatch(getProfile());
            return Promise.resolve(true);
        }
        return Promise.resolve(false);
    } catch (err) {
        return Promise.resolve(false);
    }
};

export const saveBundle = (bundleId, doSave) => async (dispatch, getState) => {
    try {
        const { data: res } =
            doSave === true
                ? await MeAPI.saveBundle(bundleId)
                : await MeAPI.unsaveBundle(bundleId);

        if (res.success) {
            await dispatch(getSavedBundles());
            return Promise.resolve(res.payload);
        } else return Promise.reject(false);
    } catch (err) {
        return Promise.reject(err.response);
    }
};

export const updateProfile = data => async (dispatch, getState) => {
    try {
        const { data: res } = await MeAPI.updateProfile(data);

        if (res.success) {
            dispatch(getProfile());
            return Promise.resolve();
        }
        return Promise.reject();
    } catch (err) {
        return Promise.reject(err.response);
    }
};

export const publishProfile = privacy => async (dispatch, getState) => {
    try {
        const { data: res } = await MeAPI.publishProfile(privacy);
        if (res.success) {
            await dispatch(getProfile());
            return Promise.resolve();
        }
        return Promise.reject();
    } catch (err) {
        return Promise.reject(err.response);
    }
};

export const changePassword = (currentPassword, newPassword) => async (
    dispatch,
    getState
) => {
    try {
        const { data: res } = await MeAPI.changePassword(
            currentPassword,
            newPassword
        );

        if (res.success) {
            dispatch(getProfile());
            return Promise.resolve();
        }
        return Promise.reject();
    } catch (err) {
        return Promise.reject(err.response);
    }
};

export const updateContact = data => async (dispatch, getState) => {
    try {
        const { data: res } = await MeAPI.updateContact(data);

        if (res.success) {
            dispatch(getProfile());
            return Promise.resolve();
        }
        return Promise.reject();
    } catch (err) {
        return Promise.reject(err.response);
    }
};

export const publishContact = privacy => async (dispatch, getState) => {
    try {
        const { data: res } = await MeAPI.publishContact(privacy);
        if (res.success) {
            await dispatch(getProfile());
            return Promise.resolve();
        }
        return Promise.reject();
    } catch (err) {
        return Promise.reject(err.response);
    }
};

export const changePreferences = data => async (dispatch, getState) => {
    try {
        const { data: res } = await MeAPI.changePreferences(data);
        if (res.success) {
            dispatch(getProfile());
            return Promise.resolve();
        }
        return Promise.reject();
    } catch (err) {
        return Promise.reject(err.response);
    }
};

export const updateProfilePicture = data => async (dispatch, getState) => {
    try {
        const { data: res } = await MeAPI.updateProfilePicture(data);

        if (res.success) {
            dispatch(getProfile());
            return Promise.resolve();
        }
        return Promise.reject();
    } catch (err) {
        console.log(err);
        return Promise.reject(err.response);
    }
};

export const updateProfileCover = data => async (dispatch, getState) => {
    try {
        const { data: res } = await MeAPI.updateProfileCover(data);

        if (res.success) {
            dispatch(getProfile());
            return Promise.resolve();
        }
        return Promise.reject();
    } catch (err) {
        console.log(err);
        return Promise.reject(err.response);
    }
};

export const recoverPasswordRequest = email => async dispatch => {
    const res = await axios.post(`${AUTH_URL}recover-password-request`, {
        email,
    });
};

export const recoverPassword = (
    password,
    recoverPasswordCode
) => async dispatch => {
    const res = await axios.post(`${AUTH_URL}recover-password`, {
        password,
        recoverPasswordCode,
    });
};

export const meActions = {
    login
};

export function bindMeActions(currentActions, dispatch) {
    return {
        ...currentActions,
        meActions: bindActionCreators(meActions, dispatch),
    };
}
