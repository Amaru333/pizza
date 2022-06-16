import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HorizontalLine = ({
  color,
  height,
  width,
  marginVertical,
  paddingHorizontal,
}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: height,
          backgroundColor: color,
          width: width,
          marginVertical: marginVertical,
          paddingHorizontal: paddingHorizontal,
        }}></View>
    </View>
  );
};

export default HorizontalLine;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
