import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  View,
} from 'react-native';

// let ScreenHeight = Dimensions.get('window').height;
// const screenHeight = Dimensions.get('screen').height;
// const windowHeight = Dimensions.get('window').height;
// const navbarHeight = screenHeight - windowHeight + StatusBar.currentHeight;
const {width} = Dimensions.get('window');
const height = width * 0.6;

export default function Slider({images}) {
  return (
    <View>
      <ScrollView style={styles.scrollview} horizontal pagingEnabled>
        {images.map((imageValue, index) => (
          <Image style={styles.image} key={index} source={imageValue} />
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    resizeMode: 'cover',
    width: width,
  },
  scrollview: {
    width: width,
    height: height,
  },
});
