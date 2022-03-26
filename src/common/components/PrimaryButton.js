import React from 'react';
import {StyleSheet, View, TouchableHighlight} from 'react-native';

import {
  COLOR_PRIMARY_ORANGE,
  COLOR_SECONDARY_ORANGE,
  COLOR_WHITE,
} from '../../constants/ColorConstants';

export default function PrimaryButton({children, onPress, width}) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableHighlight
        style={[styles.buttonBackground, {width: width}]}
        underlayColor={COLOR_SECONDARY_ORANGE}
        onPress={onPress}>
        <View style={styles.buttonTextContainer}>{children}</View>
      </TouchableHighlight>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonBackground: {
    backgroundColor: COLOR_PRIMARY_ORANGE,
    display: 'flex',
    borderRadius: 10,
    elevation: 3,
    marginTop: 30,
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextContainer: {
    color: COLOR_WHITE,
    display: 'flex',
    flexDirection: 'row',
    padding: 12,
    justifyContent: 'center',
  },
});
