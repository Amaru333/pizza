import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Star from '../../assets/vectors/star.svg';
import {
  COLOR_PRIMARY_ORANGE,
  COLOR_PRIMARY_WHITE_DISABLED,
} from '../../constants/ColorConstants';

const RenderRating = ({rating}) => {
  return (
    <View style={styles.ratingContainer}>
      {[...Array(5)].map((v, i) => (
        <Star
          style={styles.iconContainer}
          fill={
            i < rating ? COLOR_PRIMARY_ORANGE : COLOR_PRIMARY_WHITE_DISABLED
          }
          key={i}
        />
      ))}
    </View>
  );
};

export default RenderRating;

const styles = StyleSheet.create({
  ratingContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
  iconContainer: {
    marginHorizontal: 2,
  },
});
