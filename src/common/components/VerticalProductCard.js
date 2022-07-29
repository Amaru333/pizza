import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableHighlight,
} from 'react-native';
import {
  COLOR_PRIMARY_BLACK,
  COLOR_PRIMARY_ORANGE,
  COLOR_PRIMARY_WHITE,
  COLOR_PRIMARY_WHITE_DISABLED,
  COLOR_BLACK_10,
} from '../../constants/ColorConstants';
import PrimaryButton from './PrimaryButton';
import CartIcon from '../../assets/vectors/shopping_cart_white.svg';
import HorizontalLine from './HorizontalLine';
import RenderRating from './RenderRating';
import CustomizeMenu from './Actionsheets/CustomizeMenu';
import {useState} from 'react';

export default function VerticalProductCard(props) {
  const navigateToItem = () => {
    props.navigation.navigate('ProductPageScreen', {
      data: props.data,
    });
  };
  const [sheetOpen, setSheetOpen] = useState(false);
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
              <RenderRating rating={props.data.rating} />
              <PrimaryButton
                marginTop={5}
                width={'80%'}
                style={{alignItems: 'flex-start'}}
                onPress={() => setSheetOpen(true)}>
                <CartIcon />
                <Text style={styles.priceTag}>
                  ₹{props.data.price[0].price}
                </Text>
              </PrimaryButton>
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
      <CustomizeMenu
        isOpen={sheetOpen}
        onClose={() => setSheetOpen(false)}
        setOpen={setSheetOpen}
        priceList={props.data.price}
        data={props.data}
      />
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
});
