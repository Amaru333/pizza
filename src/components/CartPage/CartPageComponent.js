import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {getCartItems, getCartPrice} from '../../redux/cart/cartSlice';
import VerticalCartCard from './VerticalCartCard';
import PrimaryButton from '../../common/components/PrimaryButton';
import {
  COLOR_PRIMARY_ORANGE,
  COLOR_SECONDARY_ORANGE,
  COLOR_WHITE,
} from '../../constants/ColorConstants';

const CartPageComponent = props => {
  const cart_items = useSelector(getCartItems);
  const cart_price = useSelector(getCartPrice());

  const renderItem = ({item, index}) => {
    return (
      <VerticalCartCard
        data={item}
        navigation={props.navigation}
        index={index}
      />
    );
  };
  if (cart_items.length > 0) {
    return (
      <View style={{marginTop: 55, marginBottom: 188}}>
        <FlatList data={cart_items} renderItem={renderItem} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingTop: 10,
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            alignItems: 'center',
            borderTopWidth: 1,
            borderTopColor: COLOR_WHITE,
            // backgroundColor: 'white',
          }}>
          <View style={styles.nameContainer}>
            <Text style={styles.priceText}>Total: </Text>
            <Text style={styles.priceValue}>₹{cart_price}</Text>
          </View>
          <PrimaryButton marginTop={0}>
            <Text style={styles.payText}>{`Pay Now  >`}</Text>
          </PrimaryButton>
        </View>
      </View>
    );
  } else {
    return (
      <View
        style={{
          marginTop: 55,
          marginBottom: 110,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Image source={require('../../assets/images/Cart/empty-cart.png')} />
      </View>
    );
  }
};

export default CartPageComponent;

const styles = StyleSheet.create({
  nameContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  payText: {
    color: COLOR_WHITE,
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
  priceText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  priceValue: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: COLOR_PRIMARY_ORANGE,
  },
});
