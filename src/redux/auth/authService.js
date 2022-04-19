import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {
  API_GET_USER_DETAILS,
  API_LOGIN_USER,
  API_REGISTER_USER,
  API_UDPATE_USER_DETAILS,
} from '../../constants/APIEndpointConstants';

//Register user
const register = async userData => {
  const response = await axios.post(API_REGISTER_USER, userData);

  if (response.data) {
    AsyncStorage.setItem('user_token', response.data.token);
    AsyncStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

//Login user
const login = async userData => {
  const response = await axios.post(API_LOGIN_USER, userData);

  if (response.data) {
    AsyncStorage.setItem('user_token', response.data.token);
    AsyncStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

//Add user information
const addUserInfo = async userInfo => {
  console.log(userInfo);
  const response = await axios.patch(
    API_UDPATE_USER_DETAILS,
    {
      addressLine1: userInfo.data.addressLine1,
      addressLine2: userInfo.data.addressLine2,
      email: userInfo.data.email,
      latitude: userInfo.data.latitude,
      longitude: userInfo.data.longitude,
      name: userInfo.data.name,
      _id: userInfo.data._id,
    },
    {
      headers: {
        'auth-token': userInfo.token,
      },
    },
  );
  console.log(response);

  if (response.data) {
    let user = response.data;
    user.token = userInfo.token;
    AsyncStorage.setItem('user', JSON.stringify(user));

    return response.data;
  }
};

//Set user details
const setUserDetails = async userData => {
  const response = await axios.post(
    API_GET_USER_DETAILS,
    {_id: userData._id},
    {
      headers: {
        'auth-token': userData.token,
      },
    },
  );

  if (response.data) {
    let user = userData;
    user.address = response.data.address;
    user.email = response.data.email;
    user.name = response.data.name;
    user.phoneNumber = response.data.phoneNumber;

    AsyncStorage.setItem('user', JSON.stringify(user));

    return user;
  }
};

//Logout user
const logout = async () => {
  try {
    await AsyncStorage.removeItem('user_token');
    await AsyncStorage.removeItem('user');
    return true;
  } catch (err) {
    return err;
  }
};

const authService = {
  register,
  login,
  logout,
  setUserDetails,
  addUserInfo,
};

export default authService;
