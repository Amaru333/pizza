import React from 'react';
import {
  ScrollView,
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
// import {useDispatch, useSelector} from 'react-redux';
// import {decrement, increment} from '../../redux/counter';

const {width} = Dimensions.get('window');
const height = width * 1;

export default function Slider({headerText, images, text, type = 'loading'}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // const {value} = useSelector(state => state.counter);
  // const dispatch = useDispatch();

  const changeCarousel = ({nativeEvent}) => {
    const slide = Math.floor(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== currentImageIndex) {
      setCurrentImageIndex(slide);
    }
  };

  return (
    <View>
      <ScrollView
        style={[
          styles.scrollview,
          {height: type == 'loading' ? height : height - 100},
        ]}
        horizontal
        pagingEnabled
        onScroll={changeCarousel}
        showsHorizontalScrollIndicator={false}>
        {images.map((imageValue, index) => (
          <ImageBackground
            style={[
              styles.image,
              {height: type == 'loading' ? height : height - 100},
              {borderBottomLeftRadius: type == 'product' ? 0 : 15},
              {borderBottomRightRadius: type == 'product' ? 0 : 15},
            ]}
            key={index}
            source={type != 'product' ? imageValue : {uri: imageValue.url}}>
            <View style={type != 'product' && styles.imageOpacity}>
              {type == 'loading' ? (
                <Text style={styles.textOverlay}>
                  {text ? text[index] : ''}
                </Text>
              ) : (
                <View style={styles.multiTextView}>
                  <Text style={styles.headerText}>
                    {headerText ? headerText[index] : ''}
                  </Text>
                  <Text style={styles.descriptionText}>
                    {text ? text[index] : ''}
                  </Text>
                </View>
              )}
            </View>
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
    overflow: 'hidden',
  },
  multiTextView: {
    display: 'flex',
    height: '80%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 20,
  },
  headerText: {
    fontSize: 40,
    fontFamily: 'Poppins-Bold',
    color: COLOR_PRIMARY_ORANGE,
  },
  descriptionText: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: COLOR_PRIMARY_WHITE,
  },
  scrollview: {
    width: width,
  },
  imageOpacity: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: 'center',
  },
  dotsContainer: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  dots: {
    color: COLOR_PRIMARY_WHITE,
    margin: 3,
    fontSize: 12,
    marginBottom: 10,
  },
  dotsActive: {
    color: COLOR_PRIMARY_ORANGE,
    margin: 3,
    fontSize: 12,
    marginBottom: 10,
  },
  textOverlay: {
    color: COLOR_PRIMARY_WHITE,
    fontSize: 30,
    padding: 20,
    width: '80%',
    fontFamily: 'Poppins-Regular',
  },
});
