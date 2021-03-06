import React from 'react';
import {StyleSheet, View, TouchableHighlight} from 'react-native';

import {
  COLOR_PRIMARY_ORANGE,
  COLOR_PRIMARY_ORANGE_DISABLED,
  COLOR_SECONDARY_ORANGE,
  COLOR_WHITE,
} from '../../constants/ColorConstants';

export default function PrimaryButton({
  disabled,
  children,
  onPress,
  width,
  style,
  marginTop = 30,
}) {
  return (
    <View style={[styles.buttonContainer, style]}>
      <TouchableHighlight
        disabled={disabled}
        style={[
          styles.buttonBackground,
          {width: width, marginTop: marginTop},
          disabled && {backgroundColor: COLOR_PRIMARY_ORANGE_DISABLED},
        ]}
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
