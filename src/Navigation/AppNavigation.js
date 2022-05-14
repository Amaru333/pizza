import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoadingScreen from '../screens/LoadingScreen';
import LoginPage from '../screens/LoginPage';
import LoginMobilePage from '../screens/LoginMobilePage';
import AddDetailsPage from '../screens/AddDetailsPage';
import ProductPage from '../screens/ProductPage';
import TabNavigator from './TabNavigation';

const {Navigator, Screen} = createNativeStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="LoadingScreen">
      <Screen name="LoadingScreen" component={LoadingScreen}></Screen>
      <Screen name="LoginScreen" component={LoginPage}></Screen>
      <Screen name="LoginMobileScreen" component={LoginMobilePage}></Screen>
      <Screen name="AddDetailsScreen" component={AddDetailsPage}></Screen>
      <Screen name="HomeScreen" component={TabNavigator}></Screen>
      <Screen name="ProductPageScreen" component={ProductPage}></Screen>
    </Navigator>
  </NavigationContainer>
);

export {AppNavigator};
