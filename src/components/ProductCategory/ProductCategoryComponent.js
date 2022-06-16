import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLOR_PRIMARY_ORANGE} from '../../constants/ColorConstants';
import VerticalProductCard from '../../common/components/VerticalProductCard';

const ProductCategoryComponent = props => {
  const categoryData = props.route.params?.data;
  return (
    <View style={styles.productCategoryWrapper}>
      <Text style={styles.heading}>{categoryData.heading}</Text>
      {categoryData?.products.map((product, index) => (
        <VerticalProductCard
          data={product}
          key={index}
          navigation={props.navigation}
        />
      ))}
    </View>
  );
};

export default ProductCategoryComponent;

const styles = StyleSheet.create({
  productCategoryWrapper: {
    marginTop: 60,
    marginBottom: 55,
  },
  heading: {
    fontSize: 22,
    fontFamily: 'Poppins-SemiBold',
    color: COLOR_PRIMARY_ORANGE,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
});
