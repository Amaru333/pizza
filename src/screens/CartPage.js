import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Header from '../common/components/Header';
import {TEXT_CART} from '../constants/TextConstants';
import CartPageComponent from '../components/CartPage/CartPageComponent';

export default function CartPage(props) {
  return (
    <SafeAreaView>
      <Header navigation={props.navigation}>{TEXT_CART}</Header>

      <CartPageComponent navigation={props.navigation} />
    </SafeAreaView>
  );
}
