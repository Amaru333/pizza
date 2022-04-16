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
  TEXT_ENTER_ADDRESS,
  TEXT_ENTER_ADDRESS1_PLACEHOLDER,
  TEXT_ENTER_ADDRESS2_PLACEHOLDER,
  TEXT_ENTER_EMAIL,
  TEXT_ENTER_EMAIL_PLACEHOLDER,
  TEXT_ENTER_NAME,
  TEXT_ENTER_NAME_PLACEHOLDER,
  TEXT_SAVE_DETAILS,
  TEXT_WENT_WRONG,
} from '../../constants/TextConstants';

import axios from 'axios';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import MapPointer from '../../assets/vectors/map_pointer.svg';
import {useSelector} from 'react-redux';

const screenHeight = Dimensions.get('screen').height;
const windowHeight = Dimensions.get('window').height;
const navbarHeight = screenHeight - windowHeight + StatusBar.currentHeight;

export default function AddDetails(props) {
  let userDetails = useSelector(state => state.auth.user);

  const [userData, setUserData] = useState({
    name: userDetails.name || '',
    address: {
      addressLine1: userDetails.address.addressLine1 || '',
      addressLine2: userDetails.address.addressLine2 || '',
      latitude: userDetails.address.latitude || 0,
      longitude: userDetails.address.longitude || 0,
    },
    email: userDetails.email || '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [locationName, setLocationName] = useState('');
  const [loading, setLoading] = useState(false);

  let userId = useSelector(state => state.auth.user._id);
  let userToken = useSelector(state => state.auth.user.token);

  const [currentLocation, setCurrentLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const saveDetails = () => {
    setLoading(true);
    setErrorMessage('');

    axios
      .patch(
        'http://10.0.2.2:3000/api/user/update-details',
        {
          name: userData.name,
          _id: userId,
          email: userData.email,
          addressLine1: userData.address.addressLine1,
          addressLine2: userData.address.addressLine2,
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
        setErrorMessage(err.response.data.message);
        setLoading(false);
      });
  };

  useEffect(() => {
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
          setErrorMessage(TEXT_WENT_WRONG);
          setLoading(false);
        });
    }, 20);

    return () => clearTimeout(getLocationName);
  }, [currentLocation]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Header navigation={props.navigation} goBackIcon={false}>
            {TEXT_ADD_DETAILS_HEADER}
          </Header>
          <View style={styles.inputViewContainer}>
            <Text style={styles.textTitle}>{TEXT_ENTER_NAME}</Text>
            <UITextInput
              placeholder={TEXT_ENTER_NAME_PLACEHOLDER}
              maxLength={256}
              value={userData.name}
              setValue={val => setUserData({...userData, name: val})}
            />
            <Text style={styles.textTitle}>{TEXT_ENTER_EMAIL}</Text>
            <UITextInput
              placeholder={TEXT_ENTER_EMAIL_PLACEHOLDER}
              maxLength={100}
              value={userData.email}
              setValue={val => setUserData({...userData, email: val})}
            />
            <Text style={styles.textTitle}>{TEXT_ENTER_ADDRESS}</Text>
            <UITextInput
              placeholder={TEXT_ENTER_ADDRESS1_PLACEHOLDER}
              maxLength={100}
              value={userData.address.addressLine1}
              setValue={val =>
                setUserData({
                  ...userData,
                  address: {...userData.address, addressLine1: val},
                })
              }
            />
            <UITextInput
              style={{marginTop: 10}}
              placeholder={TEXT_ENTER_ADDRESS2_PLACEHOLDER}
              maxLength={150}
              value={userData.address.addressLine2}
              setValue={val =>
                setUserData({
                  ...userData,
                  address: {...userData.address, addressLine2: val},
                })
              }
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
    marginVertical: 15,
  },
});
