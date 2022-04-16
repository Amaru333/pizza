import React from 'react';
import {StyleSheet, View, TouchableHighlight, Text} from 'react-native';

import {
  COLOR_PRIMARY_ORANGE,
  COLOR_SECONDARY_ORANGE,
  COLOR_WHITE,
} from '../../constants/ColorConstants';

import BackArrow from '../../assets/vectors/back_arrow.svg';

export default function Header({children, navigation, goBackIcon = true}) {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.headerContainer}>
      {goBackIcon && (
        <TouchableHighlight
          style={styles.arrowSVG}
          underlayColor={COLOR_SECONDARY_ORANGE}
          onPress={goBack}>
          <BackArrow />
        </TouchableHighlight>
      )}
      <Text style={styles.headerText}>{children}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: COLOR_PRIMARY_ORANGE,
    width: '100%',
    height: 55,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  arrowSVG: {
    padding: 8,
    paddingBottom: 5,
    paddingLeft: 10,
    width: '12%',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: COLOR_WHITE,
    padding: 8,
    fontSize: 22,
    marginTop: 4,
    fontFamily: 'Poppins-Regular',
  },
});
