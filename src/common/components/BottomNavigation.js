import React, {useState} from 'react';
import {StyleSheet, View, TouchableHighlight} from 'react-native';
import {
  COLOR_PRIMARY_ORANGE,
  COLOR_PRIMARY_WHITE_DISABLED,
  COLOR_RED_GRADIENT_BOTTOM,
  COLOR_RED_GRADIENT_TOP,
  COLOR_TRANSPARENT,
  COLOR_WHITE,
} from '../../constants/ColorConstants';

import HomeIcon from '../../assets/vectors/NavigationVectors/home.svg';
import CartIcon from '../../assets/vectors/NavigationVectors/cart.svg';
import OrdersIcon from '../../assets/vectors/NavigationVectors/orders.svg';
import ProfileIcon from '../../assets/vectors/NavigationVectors/profile.svg';

import LinearGradient from 'react-native-linear-gradient';
import {useRoute} from '@react-navigation/native';

export default function BottomNavigation(props) {
  const [active, setActive] = useState(props.screen);
  // let active = 'orders';
  const gradientColor = [COLOR_RED_GRADIENT_TOP, COLOR_RED_GRADIENT_BOTTOM];
  const gradientColorInactive = [COLOR_WHITE, COLOR_WHITE];

  const navbarItems = [
    {
      name: 'HomeScreen',
    },
    {
      name: 'CartScreen',
    },
    {
      name: 'ProfileScreen',
    },
    {
      name: 'OrdersScreen',
    },
  ];

  const onClick = route => {
    active != route &&
      props.navigation.reset({
        index: 0,
        routes: [{name: route}],
      });
    console.log(route);
  };

  const renderIcon = currentRoute => {
    let color =
      active == currentRoute
        ? COLOR_PRIMARY_ORANGE
        : COLOR_PRIMARY_WHITE_DISABLED;
    return (
      <>
        {currentRoute == 'HomeScreen' && <HomeIcon fill={color} />}
        {currentRoute == 'CartScreen' && (
          <CartIcon fill={color} stroke={color} />
        )}
        {currentRoute == 'ProfileScreen' && (
          <ProfileIcon fill={color} stroke={color} />
        )}
        {currentRoute == 'OrdersScreen' && <OrdersIcon fill={color} />}
      </>
    );
  };
  return (
    <View style={styles.navigationWrapper}>
      {navbarItems.map(navbarItem => (
        <LinearGradient
          style={styles.iconContainer}
          colors={
            active == navbarItem.name ? gradientColor : gradientColorInactive
          }>
          <TouchableHighlight
            underlayColor={COLOR_TRANSPARENT}
            style={styles.touchableStyle}
            onPress={() => {
              onClick(navbarItem.name);
            }}>
            {renderIcon(navbarItem.name)}
          </TouchableHighlight>
        </LinearGradient>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  navigationWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
  },
  touchableStyle: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
