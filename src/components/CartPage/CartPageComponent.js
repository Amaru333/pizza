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
  COLOR_WHITE,
} from '../../constants/ColorConstants';
import RazorpayCheckout from 'react-native-razorpay';
import axios from 'axios';
import {API_ORDERS_RAZORPAY} from '../../constants/APIEndpointConstants';
import {
  KEY_ID,
  TEXT_LOGO,
  TEXT_ORDER_CURRENCY,
  TEXT_ORDER_DESCRIPTION,
  TEXT_ORDER_LOGO,
} from '../../constants/TextConstants';
import {capitalizeFirstLetter} from '../../common/functions/CapitalizeFirstLetter';
import LoadingSpinner from '../../common/components/LoadingSpinner';
import {useState} from 'react';

const CartPageComponent = props => {
  const cart_items = useSelector(getCartItems);
  const cart_price = useSelector(getCartPrice());
  const {user} = useSelector(state => state.auth);
  const [loading, setLoading] = useState(false);

  const renderItem = ({item, index}) => {
    return (
      <VerticalCartCard
        data={item}
        navigation={props.navigation}
        index={index}
      />
    );
  };

  const makePayment = async () => {
    setLoading(true);
    const razorpay_response = await axios.post(API_ORDERS_RAZORPAY, {
      amount: parseInt(cart_price),
    });
    const options = {
      description: TEXT_ORDER_DESCRIPTION,
      image: TEXT_ORDER_LOGO,
      currency: razorpay_response.data.currency,
      key: KEY_ID,
      amount: razorpay_response.data.amount,
      name: capitalizeFirstLetter(TEXT_LOGO),
      order_id: razorpay_response.data.id, //Replace this with an order_id created using Orders API.
      prefill: {
        email: user.email,
        contact: user.phoneNumber,
        name: user.name,
      },
      theme: {color: COLOR_PRIMARY_ORANGE},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        setLoading(false);
        alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch(error => {
        // handle failure
        setLoading(false);
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };

  if (cart_items.length > 0) {
    return (
      <View style={{marginTop: 55, marginBottom: 188}}>
        <LoadingSpinner loading={loading} />
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
          }}>
          <View style={styles.nameContainer}>
            <Text style={styles.priceText}>Total: </Text>
            <Text style={styles.priceValue}>₹{cart_price}</Text>
          </View>
          <PrimaryButton marginTop={0} onPress={makePayment}>
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
