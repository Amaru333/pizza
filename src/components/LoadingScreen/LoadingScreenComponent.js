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
import BlinkingText from '../../common/components/BlinkingText';
import {
  COLOR_LOADING_SCREEN_RED,
  COLOR_PRIMARY_WHITE,
  COLOR_WHITE,
} from '../../constants/ColorConstants';
import {TEXT_LOGO, TEXT_TAP_CONTINUE} from '../../constants/TextConstants';

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
          <BlinkingText duration={1000}>
            <Text style={styles.tapText}>{TEXT_TAP_CONTINUE}</Text>
          </BlinkingText>
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
  tapText: {
    fontFamily: 'Poppins-Regular',
    color: COLOR_PRIMARY_WHITE,
    marginTop: 50,
  },
});
