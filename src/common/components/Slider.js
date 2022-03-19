import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  View,
} from 'react-native';
import {useState} from 'react';
import {
  COLOR_PRIMARY_ORANGE,
  COLOR_PRIMARY_WHITE,
} from '../../constants/ColorConstants';

const {width} = Dimensions.get('window');
const height = width * 1;

export default function Slider({images}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changeCarousel = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== currentImageIndex) {
      setCurrentImageIndex(slide);
    }
  };

  return (
    <View>
      <ScrollView
        style={styles.scrollview}
        horizontal
        pagingEnabled
        onScroll={changeCarousel}
        showsHorizontalScrollIndicator={false}>
        {images.map((imageValue, index) => (
          <ImageBackground style={styles.image} key={index} source={imageValue}>
            <View style={styles.imageOpacity} />
          </ImageBackground>
        ))}
      </ScrollView>
      <View style={styles.dotsContainer}>
        {images.map((imageValue, index) => (
          <Text
            key={index}
            style={
              index === currentImageIndex ? styles.dotsActive : styles.dots
            }>
            ⬤
          </Text>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    resizeMode: 'cover',
    width: width,
    height: height,
    overflow: 'hidden',
  },
  scrollview: {
    width: width,
    height: height,
  },
  imageOpacity: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  dotsContainer: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  dots: {
    color: COLOR_PRIMARY_ORANGE,
    margin: 3,
  },
  dotsActive: {
    color: COLOR_PRIMARY_WHITE,
    margin: 3,
  },
});
