import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import BottomNavigation from '../common/components/BottomNavigation';
import ProductPageComponent from '../components/ProductPage/ProductPageComponent';
import Header from '../common/components/Header';
import {TEXT_CHOOSE_PIZZA} from '../constants/TextConstants';

export default function ProductPage(props) {
  return (
    <SafeAreaView>
      <Header navigation={props.navigation}>{TEXT_CHOOSE_PIZZA}</Header>
      <ScrollView>
        <ProductPageComponent navigation={props.navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}