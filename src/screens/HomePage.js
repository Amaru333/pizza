import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import BottomNavigation from '../common/components/BottomNavigation';
import SearchHeader from '../common/components/SearchHeader';
import HomePageComponent from '../components/HomePage/HomePageComponent';

export default function HomePage(props) {
  return (
    <SafeAreaView>
      <SearchHeader />
      <ScrollView>
        <HomePageComponent navigation={props.navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}
