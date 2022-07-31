import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from '../screens/HomePage';
import ProductPage from '../screens/ProductPage';
import ProductCategoryPage from '../screens/ProductCategoryPage';

const {Navigator, Screen} = createNativeStackNavigator();

const HomeScreenNavigation = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      gestureDirection: 'horizontal',
    }}>
    <Screen name="HomeScreen" component={HomePage}></Screen>
    <Screen name="ProductPageScreen" component={ProductPage}></Screen>
    <Screen
      name="ProductCategoryScreen"
      component={ProductCategoryPage}></Screen>
  </Navigator>
);
export {HomeScreenNavigation};
