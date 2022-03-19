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
import LoadingScreenComponent from '../components/LoadingScreen/LoadingScreenComponent';

export default function LoadingScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <LoadingScreenComponent />
      </ScrollView>
    </SafeAreaView>
  );
}
