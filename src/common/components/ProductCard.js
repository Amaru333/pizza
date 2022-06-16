import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  TouchableHighlight,
} from 'react-native';
import {
  COLOR_BLACK_50,
  COLOR_BORDER,
  COLOR_PRIMARY_BLACK,
  COLOR_PRIMARY_ORANGE,
  COLOR_PRIMARY_WHITE,
  COLOR_WHITE,
  COLOR_WHITE_20,
} from '../../constants/ColorConstants';
import images from '../../constants/ImageConstants';
import PrimaryButton from './PrimaryButton';
import CartIcon from '../../assets/vectors/shopping_cart_white.svg';

export default function HorizontalMenu(props) {
  const navigateToItem = () => {
    props.navigation.navigate('ProductPageScreen', {
      data: props.data,
    });
  };
  return (
    <SafeAreaView>
      <View style={styles.cardWrapper}>
        <TouchableHighlight
          underlayColor={COLOR_WHITE_20}
          onPress={navigateToItem}>
          <>
            <Image
              source={props.data.image}
              style={styles.imageStyle}
              borderTopLeftRadius={18}
              borderTopRightRadius={18}
            />
            <View style={styles.bottomTextContainer}>
              <View>
                <Text style={styles.productTitle}>{props.data.title}</Text>
                <Text style={styles.productDescription}>
                  {props.data.description}
                </Text>
              </View>
              <View>
                <PrimaryButton width="85%" onPress={() => console.log('bruh')}>
                  <CartIcon />
                  <Text style={styles.priceTag}>
                    ₹{props.data.price[0].price}
                  </Text>
                </PrimaryButton>
              </View>
            </View>
          </>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  cardWrapper: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 19,
    marginBottom: 10,
    width: 200,
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 3,
    marginHorizontal: 10,
    color: COLOR_BORDER,
  },
  imageStyle: {
    width: 194,
    marginLeft: 3,
    marginTop: 2,
  },
  productTitle: {
    color: COLOR_PRIMARY_ORANGE,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  productDescription: {
    color: COLOR_PRIMARY_BLACK,
    fontFamily: 'Poppins-Light',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: -20,
    lineHeight: 20,
    height: 40,
    overflow: 'hidden',
  },
  priceTag: {
    color: COLOR_PRIMARY_WHITE,
    marginLeft: 15,
    fontSize: 16,
    fontWeight: '500',
  },
  bottomTextContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
    display: 'flex',
  },
});
