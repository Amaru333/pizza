import React from 'react';
import {View, Modal, ActivityIndicator, StyleSheet} from 'react-native';
import {
  COLOR_BLACK_50,
  COLOR_PRIMARY_ORANGE,
} from '../../constants/ColorConstants';

export default function LoadingSpinner({loading}) {
  return (
    <Modal animationType="slide" transparent={true} visible={loading}>
      <View style={styles.modalBackground}>
        <ActivityIndicator
          size="large"
          animating={loading}
          color={COLOR_PRIMARY_ORANGE}
        />
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  modalBackground: {
    height: '100%',
    backgroundColor: COLOR_BLACK_50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
