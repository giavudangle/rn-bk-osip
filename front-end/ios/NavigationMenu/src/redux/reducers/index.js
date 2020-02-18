import { combineReducers } from 'redux';

import me from './me';
// import user from './user';
// import bundles from './bundles';

export default function createRootReducer() {
    return combineReducers({
        me,
        // bundles,
        // user,
    });
}
