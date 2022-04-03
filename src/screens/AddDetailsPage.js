import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import AddDetails from '../components/AddDetails/AddDetails';

export default function AddDetailsPage(props) {
  return (
    <SafeAreaView>
      <ScrollView>
        <AddDetails navigation={props.navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}
