import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// import { createLogger } from 'redux-logger';

import createRootReducer from './reducers';

// const logger = createLogger({
//     level: 'info',
//     collapsed: true,
// });

export let store;
export function initializeStore(initialState) {
    store = createStore(
        createRootReducer(),
        initialState,
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    );

    return store;
}
