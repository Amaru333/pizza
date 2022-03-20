import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import LoadingScreenComponent from '../components/LoadingScreen/LoadingScreenComponent';

export default function LoadingScreen(props) {
  const pressLoadingScreen = () => {
    props.navigation.navigate('LoginScreen');
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <TouchableWithoutFeedback onPress={pressLoadingScreen}>
          <View>
            <LoadingScreenComponent />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  );
}
