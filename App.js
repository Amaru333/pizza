/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {AppNavigator} from './src/Navigation/AppNavigation';
import BottomNavigation from './src/common/components/BottomNavigation';
import {NativeBaseProvider} from 'native-base';

const App: () => Node = () => {
  // const isDarkMode = useColorScheme() === 'dark';
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </NativeBaseProvider>
  );
};

export default App;
