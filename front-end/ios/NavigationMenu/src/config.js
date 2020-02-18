export const IS_DEV = process.env.NODE_ENV === 'development';

export const SITE_NAME = 'Bugs';
export const SITE_URL = IS_DEV
    ? 'https://localhost:3030/'
    : 'https://www.bugs.vn/';

// export const SITE_URL = 'https://www.bugs.vn/';
export const API_URL = 'http://localhost:3000/';

// export const API_URL = 'https://api.bugs.vn/';
export const AUTH_URL = `${API_URL}auth/`;
export const LOGIN_URL = `${API_URL}auth/login`;
export const TEST_ID = '5d47eae7e95693001bb87397';
export const BUNDLE_ID = '5d4ac413c89214001b880c9e';
export const CAPTCHA_SERVICE = 'https://captcha.stdio.vn/';

export const BUNDLES_PAGE_SIZE = 24;

export const ROLES = {
    ADMIN: 'admin',
    SUPERADMIN: 'superadmin',
    USER: 'user',
};

export const ZL_CFG = {
    appId: '4402222956336519249',
    appSecret: '9yC4SDLDcnOsL574g3Y5',
    redirectUrl: `${SITE_URL}zlcb`,
};

export const FB_CFG = {
    appId: '717177981658198',
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v3.3',
    pageId: '671611129930229',
};

export const GG_CFG = {
    verification: '7MJCLhD6RquVhLDLP96cN0fcmfhpHYs0NVm48RjVKSo',
    analytics: 'UA-52045105-2',
    adsense: {
        client: 'ca-pub-6817535307616905',
        units: {
            list: {
                item: '4897954335',
            },
            io: {
                right: '5254303940',
            },

            apps: {
                hash: {
                    left: '4691390028',
                    right: '3702915442',
                },
            },
        },
    },
};

export const ROUTES = {
    INDEX_PARAMS: '[indexType]',
    INDEX: '',
    INDEX_DISCOVER: 'discover',
    INDEX_ME: 'me',

    PROFILE_PARAMS: 'profile/[username]',
    PROFILE: 'profile',

    PROFILE_TYPE_PARAMS: 'profile/[username]/[profileType]',
    PROFILE_BUNDLES: 'profile/bundles',
    PROFILE_SAVED: 'profile/saved',
    PROFILE_FOLLOWERS: 'profile/followers',
    PROFILE_FOLLOWING: 'profile/following',
    PROFILE_ABOUT: 'profile/about',

    AUTH_PARAMS: 'auth/[authType]',
    AUTH_LOGIN: 'auth/login',
    AUTH_SIGNUP: 'auth/signup',
    AUTH_RECOVERPASSWORD: 'auth/recover-password',
    AUTH_VERIFY_ACCOUNT_REQUEST: 'auth/verify-account-request',
    AUTH_VERIFY_ACCOUNT: 'auth/verify-account',

    SETTINGS_PARAMS: 'settings/[settingType]',
    SETTINGS: 'settings',
    SETTINGS_PROFILE: 'settings/profile',
    SETTINGS_SECURITY: 'settings/security',
    SETTINGS_EXPERIENCE: 'settings/experience',

    BUNDLES: 'bundles',
    BUNDLES_FEED: 'bundles/feed',
    BUNDLES_DISCOVER: 'bundles/discover',
    BUNDLES_RELEVANT: 'bundles/relevant',

    IO_PARAMS: 'io/[ioSlug]',
    IO: 'io',
};

export const TYPES = {
    INDEX: {
        INDEX: '',
        DISCOVER: 'discover',
        ME: 'me',
    },
    PROFILE: {
        INDEX: '',
        SAVED: 'saved',
        FOLLOWING: 'following',
        FOLLOWERS: 'followers',
        ABOUT: 'about',
    },
    SETTINGS: {
        EXPERIENCE: 'experience',
        SECURITY: 'security',
    },
};

export const BUNDLE = {
    privacies: {
        public: {
            value: 'public',
            icon: 'global',
            text: 'Public',
            info: 'everyone can view.',
        },
        protected: {
            value: 'protected',
            icon: 'lock',
            text: 'Protected',
            info: 'everyone with PIN can view.',
        },
        private: {
            value: 'private',
            icon: 'user',
            text: 'Private',
            info: 'only you can view.',
        },
    },
};

export const BUNDLE_STATUS = {
    LOADING: 'LOADING',
    LOCKED: 'LOCKED',
    SUCCESS: 'SUCCESS',
};

export const FILE_TYPES = {
    code: { value: 'code', icon: 'code', tooltipTitle: 'Code format' },
    note: { value: 'note', icon: 'form', tooltipTitle: 'Note format' },
};

export const DEFAULT_PROFILE = {
    PICTURE: 'static/shared/default-profile-picture.svg',
    COVER: 'static/shared/default-profile-cover.png',
};

export const STR = {
    SHOW_BUNDLE_EDITOR_DRAWER: 'SHOW_BUNDLE_EDITOR_DRAWER',
    LATEST_CREATED_AT: 'LATEST_CREATED_AT',
    SEARCH_TERM_CACHE: 'SEARCH_TERM_CACHE',
};

export const PREV_UPLOAD_STATE = {
    IDLE: 0,
    COMMITING: 1,
    COMMITED: 2,
};
