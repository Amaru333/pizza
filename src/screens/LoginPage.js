import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import LoginPageComponent from '../components/LoginPage/LoginPageComponent';

export default function LoginPage() {
  return (
    <SafeAreaView>
      <ScrollView>
        <LoginPageComponent />
      </ScrollView>
    </SafeAreaView>
  );
}
