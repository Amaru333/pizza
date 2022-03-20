import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoadingScreen from './screens/LoadingScreen';
import LoginPage from './screens/LoginPage';

const {Navigator, Screen} = createNativeStackNavigator();

const AppNavigation = () => (
  <NavigationContainer>
    <Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="LoadingScreen">
      <Screen name="LoadingScreen" component={LoadingScreen}></Screen>
      <Screen name="LoginScreen" component={LoginPage}></Screen>
    </Navigator>
  </NavigationContainer>
);

export default AppNavigation;
