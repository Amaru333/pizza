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
import LoginPageSlider from '../components/LoginPage/LoginPageSlider';

export default function LoginPage() {
  return (
    <SafeAreaView>
      <ScrollView>
        <LoginPageSlider />
      </ScrollView>
    </SafeAreaView>
  );
}
