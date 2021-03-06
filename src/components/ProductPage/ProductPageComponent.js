import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';
import PriceTag from '../../common/components/PriceTag';
import PrimaryButton from '../../common/components/PrimaryButton';
import RenderRating from '../../common/components/RenderRating';
import SecondaryButton from '../../common/components/SecondaryButton';
import Slider from '../../common/components/Slider';
import {
  COLOR_PRIMARY_BLACK,
  COLOR_PRIMARY_ORANGE,
  COLOR_PRIMARY_WHITE,
} from '../../constants/ColorConstants';
import {HOME_PAGE_SLIDER_IMAGES} from '../../constants/ImageConstants';

let ScreenHeight = Dimensions.get('window').height;

export default function ProductPageComponent(props) {
  const productData = props?.route?.params?.data;
  const [variety, setVariety] = useState(productData.price[0].type);

  return (
    <SafeAreaView>
      <View style={styles.productPageContainer}>
        <Slider images={productData.image} type="product" />
        <View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.heading}>{productData.title}</Text>
            <RenderRating rating={productData.rating} />
            <View style={styles.ingredientsContainer}>
              <Text style={styles.ingredients}>Ingredients: </Text>
              <Text style={styles.ingredientsContent}>
                {productData.description}
              </Text>
            </View>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {productData.price.map((varietyName, index) => (
              <PriceTag
                text={varietyName.type}
                price={varietyName.price}
                variety={varietyName.type}
                active={varietyName.type == variety}
                key={index}
                setVariety={setVariety}
              />
            ))}
          </ScrollView>
          <View style={styles.buttonContainer}>
            <View style={styles.flex1}>
              <PrimaryButton width="90%">
                <Text style={styles.addButton}>{`Add    >`}</Text>
              </PrimaryButton>
            </View>
            <View style={styles.flex1}>
              <SecondaryButton width="90%">
                <Text style={styles.customizeButton}>{`Customize    >`}</Text>
              </SecondaryButton>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  productPageContainer: {
    minHeight: ScreenHeight,
    marginTop: 50,
  },
  descriptionContainer: {
    margin: 5,
    display: 'flex',
    alignItems: 'center',
  },
  ingredientsContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  heading: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    color: COLOR_PRIMARY_ORANGE,
    marginTop: 10,
  },
  ingredients: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: COLOR_PRIMARY_ORANGE,
    flex: 2.7,
  },
  ingredientsContent: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: COLOR_PRIMARY_BLACK,
    flex: 8,
    marginBottom: 10,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  flex1: {
    flex: 1,
  },
  addButton: {
    fontFamily: 'Poppins-Medium',
    color: COLOR_PRIMARY_WHITE,
  },
  customizeButton: {
    fontFamily: 'Poppins-Medium',
    color: COLOR_PRIMARY_ORANGE,
  },
});
