import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import Header from '../common/components/Header';
import {TEXT_CHOOSE_PIZZA} from '../constants/TextConstants';

export default function OrdersPage(props) {
  return (
    <SafeAreaView>
      <Header navigation={props.navigation}>{TEXT_CHOOSE_PIZZA}</Header>
      <ScrollView>
        <Text>Hi</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
