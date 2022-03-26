import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

import {
  COLOR_PLACEHOLDER_TEXT,
  COLOR_TEXT_INPUT,
} from '../../constants/ColorConstants';

export default function UITextInput({
  placeholder,
  maxLength,
  value,
  setValue,
  type,
  secureTextEntry,
}) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholderTextColor={COLOR_PLACEHOLDER_TEXT}
        keyboardType={type}
        placeholder={placeholder}
        maxLength={maxLength}
        value={value}
        onChangeText={setValue}
        style={styles.textInput}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {},
  textInput: {
    backgroundColor: COLOR_TEXT_INPUT,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 8,
    width: '100%',
    alignSelf: 'center',
    paddingLeft: 15,
    fontSize: 16,
    borderRadius: 5,
    letterSpacing: 2,
    fontFamily: 'Poppins-Regular',
  },
});
