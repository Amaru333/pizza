import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableHighlight,
  Pressable,
} from 'react-native';
import {
  COLOR_PRIMARY_BLACK,
  COLOR_PRIMARY_ORANGE,
  COLOR_PRIMARY_WHITE,
  COLOR_PRIMARY_WHITE_DISABLED,
  COLOR_BLACK_10,
} from '../../constants/ColorConstants';
import HorizontalLine from '../../common/components/HorizontalLine';
import {useDispatch, useSelector} from 'react-redux';
import {updateQuantity} from '../../redux/cart/cartSlice';
import {capitalizeFirstLetter} from '../../common/functions/CapitalizeFirstLetter';
import DeleteIcon from '../../assets/vectors/delete.svg';

export default function VerticalCartCard(props) {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth);
  const navigateToItem = () => {
    props.navigation.navigate('ProductPageScreen', {
      data: props.data,
    });
  };
  const updateCartAction = quantity => {
    if (parseInt(quantity) < 21) {
      dispatch(
        updateQuantity({
          updatedQuantity: parseInt(quantity),
          index: parseInt(props.index),
          user_id: user._id,
          user_token: user.token,
        }),
      );
    }
  };
  const QuantityButton = () => {
    return (
      <View style={styles.quantityDeleteContainer}>
        <View style={styles.quantityContainer}>
          <Pressable
            onPress={() => updateCartAction(props.data.quantity - 1)}
            style={[styles.quantityButtonContainer, styles.subtractContainer]}>
            <Text style={styles.cartButtonFont}>-</Text>
          </Pressable>
          <Text style={styles.quantityTextContainer}>
            {props.data.quantity}
          </Text>
          <Pressable
            onPress={() => updateCartAction(props.data.quantity + 1)}
            style={[styles.quantityButtonContainer, styles.addContainer]}>
            <Text style={styles.cartButtonFont}>+</Text>
          </Pressable>
        </View>
        <Pressable onPress={() => updateCartAction(0)}>
          <DeleteIcon />
        </Pressable>
      </View>
    );
  };
  console.log(props.data);
  const getPrice = () => {
    const matchedObject = props.data.price.filter(
      prices => prices.type == props.data.size,
    );
    return matchedObject;
  };
  console.log(getPrice()[0].price, 'PRICEEEE');
  return (
    <SafeAreaView>
      <View style={styles.viewWrapper}>
        <TouchableHighlight
          underlayColor={COLOR_BLACK_10}
          onPress={navigateToItem}
          style={styles.cardWrapper}>
          <>
            <View style={styles.descriptionWrapper}>
              <Text style={styles.productTitle}>{props.data.title}</Text>
              <Text style={styles.productDescription}>
                {props.data.description}
              </Text>
              <View style={styles.nameContainer}>
                <Text style={styles.sizeText}>Size: </Text>
                <Text style={styles.sizeValue}>
                  {capitalizeFirstLetter(props.data.size)}
                </Text>
              </View>
              <View style={styles.nameContainer}>
                <Text style={styles.priceText}>₹</Text>
                <Text style={styles.priceValue}>
                  {parseInt(getPrice()[0].price) *
                    parseInt(props.data.quantity)}
                </Text>
              </View>
              <QuantityButton />
            </View>
            <Image
              source={{
                uri: props.data.image[0].url,
              }}
              style={styles.imageStyle}
              borderTopLeftRadius={18}
              borderTopRightRadius={18}
              borderBottomLeftRadius={18}
              borderBottomRightRadius={18}
            />
          </>
        </TouchableHighlight>
        <HorizontalLine
          color={COLOR_PRIMARY_WHITE_DISABLED}
          width="90%"
          height={1}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  cardWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  imageStyle: {
    width: '45%',
    height: '100%',
  },
  productTitle: {
    color: COLOR_PRIMARY_ORANGE,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    marginTop: 10,
  },
  productDescription: {
    color: COLOR_PRIMARY_BLACK,
    fontFamily: 'Poppins-Light',
    fontSize: 12,
    marginBottom: 5,
  },
  priceTag: {
    color: COLOR_PRIMARY_WHITE,
    marginLeft: 15,
    fontSize: 16,
    fontWeight: '500',
  },
  descriptionWrapper: {
    width: '55%',
    display: 'flex',
  },
  quantityContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  quantityButtonContainer: {
    backgroundColor: COLOR_PRIMARY_ORANGE,
    width: 30,
    height: 30,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtractContainer: {
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  addContainer: {
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },
  cartButtonFont: {
    fontFamily: 'Poppins-Medium',
    marginBottom: -4,
    color: COLOR_PRIMARY_WHITE,
    fontSize: 20,
  },
  quantityTextContainer: {
    display: 'flex',
    textAlign: 'center',
    width: 30,
    height: 30,
    fontFamily: 'Poppins-Medium',
    marginBottom: 4,
    paddingTop: 4,
    color: COLOR_PRIMARY_BLACK,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLOR_PRIMARY_WHITE_DISABLED,
  },
  quantityDeleteContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingTop: 10,
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 5,
  },
  sizeText: {
    fontFamily: 'Poppins-Medium',
  },
  sizeValue: {
    fontFamily: 'Poppins-Medium',
    color: COLOR_PRIMARY_ORANGE,
  },
  priceText: {
    fontFamily: 'Poppins-SemiBold',
    color: COLOR_PRIMARY_ORANGE,
  },
  priceValue: {
    fontFamily: 'Poppins-Medium',
    color: COLOR_PRIMARY_ORANGE,
    fontSize: 20,
    marginTop: -4,
    paddingLeft: 3,
  },
});
