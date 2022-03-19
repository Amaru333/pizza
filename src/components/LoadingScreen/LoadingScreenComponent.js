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
import {
  COLOR_LOADING_SCREEN_RED,
  COLOR_WHITE,
} from '../../constants/ColorConstants';
import {TEXT_LOGO} from '../../constants/TextConstants';

// let ScreenHeight = Dimensions.get('window').height;
const screenHeight = Dimensions.get('screen').height;
const windowHeight = Dimensions.get('window').height;
const navbarHeight = screenHeight - windowHeight + StatusBar.currentHeight;

export default function LoadingScreenComponent() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.background}>
          <Text style={styles.logo}>{TEXT_LOGO}</Text>
          <Image source={require('../../assets/images/common/logo.png')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: COLOR_LOADING_SCREEN_RED,
    height: screenHeight - navbarHeight,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontFamily: 'Caveat-Bold',
    fontSize: 70,
    color: COLOR_WHITE,
    marginBottom: 10,
  },
});
