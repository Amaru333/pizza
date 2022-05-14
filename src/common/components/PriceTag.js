import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {
  COLOR_PRIMARY_ORANGE,
  COLOR_PRIMARY_WHITE_DISABLED,
} from '../../constants/ColorConstants';

const PriceTag = ({text, price, active}) => {
  let activeColor = active
    ? COLOR_PRIMARY_ORANGE
    : COLOR_PRIMARY_WHITE_DISABLED;
  return (
    <SafeAreaView>
      <View
        style={[
          styles.priceTagWrapper,
          {
            borderColor: activeColor,
          },
        ]}>
        <Text style={[{color: activeColor}, styles.titleText]}>{text}</Text>
        <Text style={[{color: activeColor}]}>₹{price}</Text>
      </View>
    </SafeAreaView>
  );
};

export default PriceTag;

const styles = StyleSheet.create({
  priceTagWrapper: {
    borderWidth: 2,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    padding: 8,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  titleText: {
    marginRight: 20,
  },
});
