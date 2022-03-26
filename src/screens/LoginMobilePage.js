import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import LoginMobilePageComponent from '../components/LoginMobilePage/LoginMobilePageComponent';

export default function LoginMobilePage(props) {
  return (
    <SafeAreaView>
      <ScrollView>
        <LoginMobilePageComponent navigation={props.navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}
