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
import {SLIDER_IMAGES} from '../../constants/ImageConstants';

// let ScreenHeight = Dimensions.get('window').height;
const screenHeight = Dimensions.get('screen').height;
const windowHeight = Dimensions.get('window').height;
const navbarHeight = screenHeight - windowHeight + StatusBar.currentHeight;

const images = SLIDER_IMAGES;

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
