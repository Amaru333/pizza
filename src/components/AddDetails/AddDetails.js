import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
} from 'react-native';
import Header from '../../common/components/Header';
import UITextInput from '../../common/components/UITextInput';
import PrimaryButton from '../../common/components/PrimaryButton';
import {
  COLOR_PRIMARY_ORANGE,
  COLOR_PRIMARY_WHITE,
} from '../../constants/ColorConstants';
import {
  TEXT_ADD_DETAILS_HEADER,
  TEXT_CHOOSE_LOCATION,
  TEXT_CONTACT_US,
  TEXT_ENTER_ADDRESS,
  TEXT_ENTER_ADDRESS1_PLACEHOLDER,
  TEXT_ENTER_ADDRESS2_PLACEHOLDER,
  TEXT_ENTER_EMAIL,
  TEXT_ENTER_EMAIL_PLACEHOLDER,
  TEXT_ENTER_NAME,
  TEXT_ENTER_NAME_PLACEHOLDER,
  TEXT_ENTER_NUMBER,
  TEXT_ENTER_PIN,
  TEXT_LOGIN,
  TEXT_LOGIN_MOBILE_HEADER,
  TEXT_PASSWORD_PLACEHOLDER,
  TEXT_PHONE_NUMBER_PLACEHOLDER,
  TEXT_SAVE_DETAILS,
} from '../../constants/TextConstants';
import SecondaryButton from '../../common/components/SecondaryButton';

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import MapPointer from '../../assets/vectors/map_pointer.svg';

const screenHeight = Dimensions.get('screen').height;
const windowHeight = Dimensions.get('window').height;
const navbarHeight = screenHeight - windowHeight + StatusBar.currentHeight;

export default function AddDetails(props) {
  const [name, setName] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [locationName, setLocationName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [userToken, setUserToken] = useState('');
  const [userId, setUserId] = useState('');
  const [loading, setLoading] = useState(false);

  const [currentLocation, setCurrentLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const getData = async () => {
    try {
      const userToken = await AsyncStorage.getItem('user_token');
      const userId = await AsyncStorage.getItem('_id');
      if ((userToken && userId) !== null) {
        setUserToken(userToken);
        setUserId(userId);
        console.log(userToken, userId);
      }
    } catch (err) {
      console.log(err);
      setErrorMessage('Something went wrong');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const saveDetails = () => {
    setLoading(true);
    setErrorMessage('');

    axios
      .patch(
        'http://10.0.2.2:3000/api/user/update-details',
        {
          name: name,
          _id: userId,
          email: emailAddress,
          addressLine1: addressLine1,
          addressLine2: addressLine2,
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
        },
        {
          headers: {
            'auth-token': userToken,
          },
        },
      )
      .then(response => {
        console.log(response);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    console.log('test');
    Geolocation.getCurrentPosition(info =>
      setCurrentLocation({
        ...currentLocation,
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
      }),
    );
  }, []);

  useEffect(() => {
    setLoading(true);

    const getLocationName = setTimeout(() => {
      axios
        .get(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${currentLocation.latitude}&lon=${currentLocation.longitude}&zoom=18&addressdetails=1`,
        )
        .then(response => {
          setLocationName(response.data.display_name);
          setLoading(false);
        })
        .catch(err => {
          setErrorMessage('Something went wrong');
          setLoading(false);
        });
    }, 20);

    return () => clearTimeout(getLocationName);
  }, [currentLocation]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Header navigation={props.navigation}>
            {TEXT_ADD_DETAILS_HEADER}
          </Header>
          <View style={styles.inputViewContainer}>
            <Text style={styles.textTitle}>{TEXT_ENTER_NAME}</Text>
            <UITextInput
              placeholder={TEXT_ENTER_NAME_PLACEHOLDER}
              maxLength={256}
              value={name}
              setValue={setName}
            />
            <Text style={styles.textTitle}>{TEXT_ENTER_EMAIL}</Text>
            <UITextInput
              placeholder={TEXT_ENTER_EMAIL_PLACEHOLDER}
              maxLength={100}
              value={emailAddress}
              setValue={setEmailAddress}
            />
            <Text style={styles.textTitle}>{TEXT_ENTER_ADDRESS}</Text>
            <UITextInput
              placeholder={TEXT_ENTER_ADDRESS1_PLACEHOLDER}
              maxLength={100}
              value={addressLine1}
              setValue={setAddressLine1}
            />
            <UITextInput
              style={{marginTop: 10}}
              placeholder={TEXT_ENTER_ADDRESS2_PLACEHOLDER}
              maxLength={150}
              value={addressLine2}
              setValue={setAddressLine2}
            />
            <Text style={styles.textTitle}>{TEXT_CHOOSE_LOCATION}</Text>

            <View>
              <MapView
                style={{height: 250}}
                initialRegion={currentLocation}
                showsUserLocation={true}
                showsMyLocationButton={true}
                onRegionChange={region => setCurrentLocation(region)}
              />
              <View style={styles.markerFixed}>
                <MapPointer />
              </View>
              <Text style={styles.locationName}>{locationName}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton disabled={loading} onPress={saveDetails} width={150}>
              <Text style={styles.verifyText}>{TEXT_SAVE_DETAILS}</Text>
            </PrimaryButton>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    minHeight: screenHeight - navbarHeight,
    backgroundColor: COLOR_PRIMARY_WHITE,
  },
  locationName: {
    textAlign: 'center',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLOR_PRIMARY_ORANGE,
    paddingBottom: 5,
  },
  markerFixed: {
    left: '47%',
    position: 'absolute',
    top: '30%',
  },
  errorMessage: {
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 10,
    color: COLOR_PRIMARY_ORANGE,
  },
  verifyText: {
    color: COLOR_PRIMARY_WHITE,
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
  textTitle: {
    color: COLOR_PRIMARY_ORANGE,
    fontFamily: 'Poppins-Regular',
    marginTop: 20,
    marginBottom: 10,
  },
  inputViewContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginHorizontal: '5%',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 15,
  },
});
