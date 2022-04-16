import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import HomePageComponent from '../components/HomePage/HomePageComponent';

export default function HomePage(props) {
  return (
    <SafeAreaView>
      <ScrollView>
        <HomePageComponent navigation={props.navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}
