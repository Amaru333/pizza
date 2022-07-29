import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import CartPage from '../screens/CartPage';

import HomeIcon from '../assets/vectors/NavigationVectors/home.svg';
import CartIcon from '../assets/vectors/NavigationVectors/cart.svg';
import OrdersIcon from '../assets/vectors/NavigationVectors/orders.svg';
import ProfileIcon from '../assets/vectors/NavigationVectors/profile.svg';
import {
  COLOR_PRIMARY_ORANGE,
  COLOR_PRIMARY_WHITE,
  COLOR_PRIMARY_WHITE_DISABLED,
  COLOR_RED_GRADIENT_BOTTOM,
} from '../constants/ColorConstants';
import {HomeScreenNavigation} from './HomeScreenNavigation';
import ProfilePage from '../screens/ProfilePage';
import OrdersPage from '../screens/OrdersPage';
import {useSelector} from 'react-redux';
import {getCartItems, getCartLength} from '../redux/cart/cartSlice';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const cartLength = useSelector(getCartLength());
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: COLOR_PRIMARY_ORANGE,
        tabBarInactiveTintColor: COLOR_PRIMARY_WHITE_DISABLED,
        tabBarActiveBackgroundColor: COLOR_RED_GRADIENT_BOTTOM,
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: {
          borderRadius: 10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreenNavigation}
        options={{
          tabBarIcon: ({color}) => <HomeIcon fill={color} stroke={color} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartPage}
        options={{
          tabBarIcon: ({color}) => <CartIcon fill={color} stroke={color} />,
          tabBarBadge: cartLength,
          tabBarBadgeStyle: {
            backgroundColor: COLOR_PRIMARY_ORANGE,
            color: COLOR_PRIMARY_WHITE,
          },
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersPage}
        options={{
          tabBarIcon: ({color}) => <OrdersIcon fill={color} stroke={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          tabBarIcon: ({color}) => <ProfileIcon fill={color} stroke={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    right: 20,
    height: 50,
    borderRadius: 10,
  },
});
