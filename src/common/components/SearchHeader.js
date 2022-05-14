import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
  TextInput,
  Dimensions,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {logout, reset} from '../../redux/auth/authSlice';

import Hamburger from '../../assets/vectors/menu_hamburger.svg';
import Search from '../../assets/vectors/menu_search.svg';
import {
  COLOR_PLACEHOLDER_TEXT,
  COLOR_WHITE,
} from '../../constants/ColorConstants';
import {TEXT_SEARCH_FOR_PIZZA} from '../../constants/TextConstants';

export default function SearchHeader(props) {
  return (
    <SafeAreaView>
      <View style={styles.searchBarWrapper}>
        <Hamburger />
        <TextInput
          placeholderTextColor={COLOR_PLACEHOLDER_TEXT}
          placeholder={TEXT_SEARCH_FOR_PIZZA}
          style={styles.textInputBox}
        />
        <Search />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  searchBarWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 0,
    position: 'absolute',
    backgroundColor: COLOR_WHITE,
    right: 0,
    top: 0,
    zIndex: 20,
  },
  textInputBox: {
    fontSize: 16,
    flex: 1,
    paddingHorizontal: 30,
  },
});
