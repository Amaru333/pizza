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

// let ScreenHeight = Dimensions.get('window').height;
const screenHeight = Dimensions.get('screen').height;
const windowHeight = Dimensions.get('window').height;
const navbarHeight = screenHeight - windowHeight + StatusBar.currentHeight;

export default function LoadingScreenComponent() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.background}>
          <Text style={styles.logo}>pizza</Text>
          <Image source={require('../../assets/images/common/logo.png')} />
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
  logo: {
    fontFamily: 'Caveat-Bold',
    fontSize: 70,
    color: '#FFFFFF',
    marginBottom: 10,
  },
});
