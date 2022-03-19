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
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import LoadingScreen from './src/screens/LoadingScreen';
import LoginPage from './src/screens/LoginPage';
import store from './src/redux/store';

const App: () => Node = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <SafeAreaView>
      <ScrollView>
        <Provider store={store}>
          <View>
            {/* <LoadingScreen /> */}
            <LoginPage />
          </View>
        </Provider>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
