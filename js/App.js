/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import HomeStackNavigator from "./navigation/HomeStackNavigator";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

const store = createStore(reducer)

const App = () => {
  return (
    <Provider store = {store}>
      <HomeStackNavigator/>
    </Provider>
  );
};

export default App;
