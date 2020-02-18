import React, { Component } from 'react';
// import App from 'next/app'
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import navigation from './redux/reducers'

import { NavigationContainer } from '@react-navigation/native';
import { Router } from "./router";
import {initializeStore} from "./redux"

// export default () => <Router />;
const store = initializeStore({})

export default class App extends Component {
    render() {
      return (
        <Provider store={store}>
          <Router />
        </Provider>
      );
    }
  }