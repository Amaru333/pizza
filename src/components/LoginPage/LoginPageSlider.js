import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Image,
  Dimensions,
  View,
} from 'react-native';
import Slider from '../../common/components/Slider';

// let ScreenHeight = Dimensions.get('window').height;
const screenHeight = Dimensions.get('screen').height;
const windowHeight = Dimensions.get('window').height;
const navbarHeight = screenHeight - windowHeight + StatusBar.currentHeight;

const images = [
  require('../../assets/images/LoginPage/login_page_background.png'),
  require('../../assets/images/LoginPage/login_page_background.png'),
  require('../../assets/images/LoginPage/login_page_background.png'),
];

export default function LoginPageSlider() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Slider images={images} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: '#B61827',
    height: screenHeight - navbarHeight,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
