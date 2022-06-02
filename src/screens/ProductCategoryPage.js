import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Header from '../common/components/Header';
import ProductCategoryComponent from '../components/ProductCategory/ProductCategoryComponent';

export default function ProductCategoryPage(props) {
  return (
    <SafeAreaView>
      <Header navigation={props.navigation}>Popular Choices</Header>
      <ScrollView>
        <ProductCategoryComponent navigation={props.navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}
