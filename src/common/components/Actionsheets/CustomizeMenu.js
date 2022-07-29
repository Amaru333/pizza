import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Actionsheet} from 'native-base';
import {capitalizeFirstLetter} from '../../functions/CapitalizeFirstLetter';
import {
  COLOR_PRIMARY_BLACK,
  COLOR_PRIMARY_ORANGE,
  COLOR_PRIMARY_WHITE,
  COLOR_PRIMARY_WHITE_DISABLED,
} from '../../../constants/ColorConstants';
import {useState} from 'react';
import PrimaryButton from '../PrimaryButton';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../../../redux/cart/cartSlice';

const CustomizeMenu = ({
  selectedPrice,
  priceList,
  data,
  isOpen,
  onClose,
  setOpen,
}) => {
  const dispatch = useDispatch();
  const [size, setSize] = useState(selectedPrice || priceList[0]?.type);
  const [quantity, setQuantity] = useState(1);
  const {user} = useSelector(state => state.auth);
  const QuantityButton = () => {
    return (
      <View style={styles.quantityContainer}>
        <Pressable
          onPress={() => quantity > 1 && setQuantity(quantity - 1)}
          style={[styles.quantityButtonContainer, styles.subtractContainer]}>
          <Text style={styles.cartButtonFont}>-</Text>
        </Pressable>
        <Text style={styles.quantityTextContainer}>{quantity}</Text>
        <Pressable
          onPress={() => quantity < 20 && setQuantity(quantity + 1)}
          style={[styles.quantityButtonContainer, styles.addContainer]}>
          <Text style={styles.cartButtonFont}>+</Text>
        </Pressable>
      </View>
    );
  };
  const SelectButton = ({selected}) => {
    return (
      <View
        style={{
          width: 18,
          height: 18,
          borderWidth: 2,
          borderColor: COLOR_PRIMARY_WHITE_DISABLED,
          borderRadius: 9,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: selected && COLOR_PRIMARY_ORANGE,
          }}></View>
      </View>
    );
  };
  const addProduct = () => {
    const data_list = {
      product: {
        ...data,
        data: data._id,
        size: size,
        quantity: quantity,
      },
      user: {
        user_id: user._id,
        user_token: user.token,
      },
    };
    dispatch(addToCart(data_list));
    setQuantity(1);
    setOpen(false);
  };
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content>
        <ScrollView style={styles.container}>
          <View>
            <Text style={styles.priceHeading}>Select a size:</Text>
            {priceList?.map(priceList => (
              <Pressable
                key={priceList.type}
                onPress={() => setSize(priceList.type)}>
                <View style={styles.priceContainer}>
                  <View style={styles.priceSelectContainer}>
                    <SelectButton selected={priceList?.type === size} />
                    <Text style={styles.priceText}>
                      {capitalizeFirstLetter(priceList?.type)}
                    </Text>
                  </View>
                  <Text style={styles.price}>₹{priceList?.price}</Text>
                </View>
              </Pressable>
            ))}
          </View>
          <View>
            <View style={styles.quantityMainContainer}>
              <Text style={styles.quantityText}>Quantity:</Text>
              <QuantityButton />
            </View>
            <PrimaryButton onPress={addProduct}>
              <Text style={styles.cartButton}>Add to cart</Text>
            </PrimaryButton>
          </View>
        </ScrollView>
      </Actionsheet.Content>
    </Actionsheet>
  );
};

export default CustomizeMenu;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  quantityMainContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 2,
    justifyContent: 'space-between',
    marginTop: 10,
  },
  quantityText: {
    fontSize: 18,
    color: COLOR_PRIMARY_ORANGE,
    fontFamily: 'Poppins-SemiBold',
  },
  priceHeading: {
    fontSize: 22,
    color: COLOR_PRIMARY_ORANGE,
    paddingHorizontal: 5,
    paddingVertical: 2,
    fontFamily: 'Poppins-SemiBold',
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 5,
  },
  priceSelectContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceText: {
    marginLeft: 8,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: COLOR_PRIMARY_BLACK,
    marginBottom: -4,
  },
  price: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: COLOR_PRIMARY_ORANGE,
    marginBottom: -4,
  },
  cartButton: {
    fontFamily: 'Poppins-Medium',
    marginBottom: -4,
    color: COLOR_PRIMARY_WHITE,
    paddingHorizontal: 20,
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
});
