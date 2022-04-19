import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import LoadingScreenComponent from '../components/LoadingScreen/LoadingScreenComponent';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

export default function LoadingScreen(props) {
  const navigation = useNavigation();
  const {user} = useSelector(state => state.auth);

  const pressLoadingScreen = () => {
    console.log(user, 'USER');
    if (user != null) {
      if (
        user.address &&
        user.address.addressLine1 &&
        user.address.addressLine2 &&
        user.email &&
        user.name &&
        user.address.addressLine1 != '' &&
        user.address.addressLine2 != '' &&
        user.email != '' &&
        user.name != ''
      ) {
        navigation.reset({
          index: 0,
          routes: [{name: 'HomeScreen'}],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{name: 'AddDetailsScreen'}],
        });
      }
    } else {
      navigation.reset({
        index: 0,
        routes: [{name: 'LoginScreen'}],
      });
    }
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
