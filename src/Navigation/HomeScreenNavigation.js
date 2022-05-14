import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from '../screens/HomePage';
import ProductPage from '../screens/ProductPage';

const {Navigator, Screen} = createNativeStackNavigator();

const HomeScreenNavigation = () => (
  <Navigator screenOptions={{headerShown: false}}>
    <Screen name="HomeScreen" component={HomePage}></Screen>
    <Screen name="ProductPageScreen" component={ProductPage}></Screen>
  </Navigator>
);
export {HomeScreenNavigation};
