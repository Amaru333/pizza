import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
} from 'react-native';
import Header from '../../common/components/Header';
import UITextInput from '../../common/components/UITextInput';
import PrimaryButton from '../../common/components/PrimaryButton';
import {
  COLOR_PRIMARY_ORANGE,
  COLOR_PRIMARY_WHITE,
} from '../../constants/ColorConstants';
import {
  TEXT_CONTACT_US,
  TEXT_ENTER_NUMBER,
  TEXT_ENTER_PIN,
  TEXT_LOGIN,
  TEXT_LOGIN_MOBILE_HEADER,
  TEXT_NEED_HELP,
  TEXT_PASSWORD_PLACEHOLDER,
  TEXT_PHONE_NUMBER_PLACEHOLDER,
  TEXT_SIGN_UP,
  TEXT_TERMS_AND_CONDITIONS,
  TEXT_VERIFY,
  TEXT_VERIFY_TERMS_1,
} from '../../constants/TextConstants';
import SecondaryButton from '../../common/components/SecondaryButton';

import axios from 'axios';

const screenHeight = Dimensions.get('screen').height;
const windowHeight = Dimensions.get('window').height;
const navbarHeight = screenHeight - windowHeight + StatusBar.currentHeight;

export default function LoginPageComponent(props) {
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();

  const showNumber = () => {
    console.log(phoneNumber);
  };

  const registerUser = () => {
    axios
      .post('http://10.0.2.2:3000/api/user/register', {
        phoneNumber: phoneNumber,
        password: password,
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Header navigation={props.navigation}>
            {TEXT_LOGIN_MOBILE_HEADER}
          </Header>
          <View style={styles.inputViewContainer}>
            <Text style={styles.textTitle}>{TEXT_ENTER_NUMBER}</Text>
            <UITextInput
              placeholder={TEXT_PHONE_NUMBER_PLACEHOLDER}
              maxLength={10}
              value={phoneNumber}
              setValue={setPhoneNumber}
              type="phone-pad"
            />
            <Text style={styles.textTitle}>{TEXT_ENTER_PIN}</Text>
            <UITextInput
              secureTextEntry={true}
              placeholder={TEXT_PASSWORD_PLACEHOLDER}
              value={password}
              setValue={setPassword}
            />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={showNumber} width={150}>
              <Text style={styles.verifyText}>{TEXT_LOGIN}</Text>
            </PrimaryButton>
            <SecondaryButton onPress={registerUser} width={150}>
              <Text style={styles.signUpText}>{TEXT_SIGN_UP}</Text>
            </SecondaryButton>
          </View>
          <Text style={styles.helpText}>{TEXT_VERIFY_TERMS_1}</Text>
          <Text style={styles.helpTextOrange}>{TEXT_TERMS_AND_CONDITIONS}</Text>
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
  verifyText: {
    color: COLOR_PRIMARY_WHITE,
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
  signUpText: {
    color: COLOR_PRIMARY_ORANGE,
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
  textTitle: {
    color: COLOR_PRIMARY_ORANGE,
    fontFamily: 'Poppins-Regular',
    marginTop: 20,
    marginBottom: 10,
  },
  inputViewContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginHorizontal: '5%',
  },
  helpText: {
    display: 'flex',
    alignSelf: 'center',
    fontFamily: 'Poppins-Regular',
    marginTop: 30,
  },
  helpTextOrange: {
    color: COLOR_PRIMARY_ORANGE,
    alignSelf: 'center',
    fontFamily: 'Poppins-Regular',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
