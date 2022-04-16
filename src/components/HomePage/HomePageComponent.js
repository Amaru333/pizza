import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
  Dimensions,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {logout, reset} from '../../redux/auth/authSlice';

const screenHeight = Dimensions.get('screen').height;
const windowHeight = Dimensions.get('window').height;
const navbarHeight = screenHeight - windowHeight + StatusBar.currentHeight;

export default function HomePageComponent(props) {
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout());
    dispatch(reset());
    props.navigation.reset({
      index: 0,
      routes: [{name: 'LoginScreen'}],
    });
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Button title="Logout" onPress={logoutUser} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  background: {
    height: screenHeight - navbarHeight,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
