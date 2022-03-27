import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import LoadingScreenComponent from '../components/LoadingScreen/LoadingScreenComponent';
import {useNavigation} from '@react-navigation/native';

export default function LoadingScreen(props) {
  const navigation = useNavigation();

  const pressLoadingScreen = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'LoginScreen'}],
    });
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
