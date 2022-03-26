import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
} from 'react-native';
import Slider from '../../common/components/Slider';
import {SLIDER_IMAGES} from '../../constants/ImageConstants';
import {
  TEXT_CONTACT_US,
  TEXT_NEED_HELP,
  TEXT_NUMBER_LOGIN,
  TEXT_SLIDER,
} from '../../constants/TextConstants';
import MobileIcon from '../../assets/vectors/mobile_icon.svg';
import {
  COLOR_PRIMARY_ORANGE,
  COLOR_PRIMARY_WHITE,
  COLOR_WHITE,
} from '../../constants/ColorConstants';
import PrimaryButton from '../../common/components/PrimaryButton';

const screenHeight = Dimensions.get('screen').height;
const windowHeight = Dimensions.get('window').height;
const navbarHeight = screenHeight - windowHeight + StatusBar.currentHeight;

export default function LoginPageComponent(props) {
  const onLogin = () => {
    props.navigation.navigate('LoginMobileScreen');
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Slider images={SLIDER_IMAGES} text={TEXT_SLIDER} />
          <PrimaryButton width="75%" onPress={onLogin}>
            <MobileIcon height={22} style={styles.SVG} />
            <Text style={styles.buttonText}>{TEXT_NUMBER_LOGIN}</Text>
          </PrimaryButton>
          <Text style={styles.helpText}>
            {TEXT_NEED_HELP}{' '}
            <Text style={styles.helpTextOrange}>{TEXT_CONTACT_US}</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    minHeight: screenHeight - navbarHeight,
    backgroundColor: COLOR_PRIMARY_WHITE,
  },
  helpText: {
    display: 'flex',
    alignSelf: 'center',
    fontFamily: 'Poppins-Regular',
    marginTop: 30,
  },
  helpTextOrange: {
    color: COLOR_PRIMARY_ORANGE,
    fontFamily: 'Poppins-Regular',
  },
  SVG: {
    marginTop: 2,
    marginRight: 15,
  },
  buttonText: {
    color: COLOR_WHITE,
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
});
