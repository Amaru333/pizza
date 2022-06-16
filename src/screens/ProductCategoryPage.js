import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Header from '../common/components/Header';
import ProductCategoryComponent from '../components/ProductCategory/ProductCategoryComponent';

export default function ProductCategoryPage(props) {
  return (
    <SafeAreaView>
      <Header navigation={props.navigation}>
        {props?.route?.params?.data?.heading}
      </Header>
      <ScrollView>
        <ProductCategoryComponent
          route={props.route}
          navigation={props.navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
