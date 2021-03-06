import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

import {
  COLOR_PRIMARY_ORANGE,
  COLOR_PRIMARY_ORANGE_DISABLED,
  COLOR_PRIMARY_WHITE,
  COLOR_WHITE,
} from '../../constants/ColorConstants';

export default function SecondaryButton({disabled, children, onPress, width}) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableHighlight
        disabled={disabled}
        style={[
          styles.buttonBackground,
          {width: width},
          disabled && {
            backgroundColor: COLOR_PRIMARY_ORANGE_DISABLED,
            borderColor: COLOR_PRIMARY_ORANGE_DISABLED,
          },
        ]}
        underlayColor={COLOR_PRIMARY_WHITE}
        onPress={onPress}>
        <View style={styles.buttonTextContainer}>{children}</View>
      </TouchableHighlight>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonBackground: {
    backgroundColor: COLOR_WHITE,
    display: 'flex',
    borderRadius: 10,
    elevation: 3,
    marginTop: 30,
    borderWidth: 1,
    borderColor: COLOR_PRIMARY_ORANGE,
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextContainer: {
    color: COLOR_PRIMARY_ORANGE,
    display: 'flex',
    flexDirection: 'row',
    padding: 12,
    justifyContent: 'center',
  },
});
