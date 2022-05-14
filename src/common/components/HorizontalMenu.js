import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
  Text,
  TextInput,
  Dimensions,
  View,
} from 'react-native';
import VegIcon from '../../assets/vectors/veg_icon.svg';
import NonVegIcon from '../../assets/vectors/non_veg_icon.svg';
import {COLOR_PRIMARY_ORANGE} from '../../constants/ColorConstants';
import images from '../../constants/ImageConstants';

import ProductCard from './ProductCard';

export default function HorizontalMenu(props) {
  // const productData = [
  //   {
  //     image: images.IMG_PIZZA_1,
  //     title: 'Basil & Tomato',
  //     description: 'Fresh Basil with Tomato and Mozarella',
  //     price: 199,
  //   },
  //   {
  //     image: images.IMG_PIZZA_2,
  //     title: 'Chilly Veg',
  //     description: 'Oregano, Corn, Pepperoni and Mozarella, bruh, yes, no, ok',
  //     price: 239,
  //   },
  //   {
  //     image: images.IMG_PIZZA_1,
  //     title: 'Basil & Tomato',
  //     description: 'Fresh Basil with Tomato and Mozarella',
  //     price: 199,
  //   },
  //   {
  //     image: images.IMG_PIZZA_1,
  //     title: 'Basil & Tomato',
  //     description: 'Fresh Basil with Tomato and Mozarella',
  //     price: 199,
  //   },
  //   {
  //     image: images.IMG_PIZZA_1,
  //     title: 'Basil & Tomato',
  //     description: 'Fresh Basil with Tomato and Mozarella',
  //     price: 199,
  //   },
  //   {
  //     image: images.IMG_PIZZA_1,
  //     title: 'Basil & Tomato',
  //     description: 'Fresh Basil with Tomato and Mozarella',
  //     price: 199,
  //   },
  //   {
  //     image: images.IMG_PIZZA_1,
  //     title: 'Basil & Tomato',
  //     description: 'Fresh Basil with Tomato and Mozarella',
  //     price: 199,
  //   },
  // ];
  const productData = props.data.products;
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.horizontalMenuContainer}>
          <View style={styles.horizontalTitle}>
            <Text style={styles.mainText}>
              {props.data.heading}
              {'   '}
              {props.data.icon == 'veg' && <VegIcon />}
              {props.data.icon == 'non_veg' && <NonVegIcon />}
            </Text>
            <Text style={styles.viewAllText}>View all {`>`}</Text>
          </View>
          <ScrollView horizontal style={styles.scollContainer}>
            {productData.map(product => (
              <ProductCard data={product} navigation={props.navigation} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  horizontalMenuContainer: {
    marginTop: 20,
  },
  textInputBox: {
    fontSize: 20,
    flex: 1,
    paddingHorizontal: 30,
  },
  horizontalTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'baseline',
  },
  mainText: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: COLOR_PRIMARY_ORANGE,
  },
  viewAllText: {
    fontSize: 16,
    fontFamily: 'Poppins-Light',
    color: COLOR_PRIMARY_ORANGE,
  },
  scollContainer: {},
});
