import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import LoginPageComponent from '../components/LoginPage/LoginPageComponent';

export default function LoginPage(props) {
  return (
    <SafeAreaView>
      <ScrollView>
        <LoginPageComponent navigation={props.navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}
