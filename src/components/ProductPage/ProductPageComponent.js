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

export default function ProductPageComponent() {
  const varities = [
    {
      type: 'Medium',
      tag: 'med',
      price: 199,
    },
    {
      type: 'Small',
      tag: 'sm',
      price: 149,
    },
    {
      type: 'Large',
      tag: 'lar',
      price: 299,
    },
  ];
  const [variety, setVariety] = useState(varities[0].tag);
  return (
    <SafeAreaView>
      <View style={styles.productPageContainer}>
        <Slider images={HOME_PAGE_SLIDER_IMAGES} type="product" />
        <View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.heading}>Basil & Tomato</Text>
            <RenderRating rating={3} />
            <View style={styles.ingredientsContainer}>
              <Text style={styles.ingredients}>Ingredients: </Text>
              <Text style={styles.ingredientsContent}>
                Fresh Basil with Tomato and some Mozarella
              </Text>
            </View>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {varities.map((varietyName, index) => (
              <PriceTag
                text={varietyName.type}
                price={varietyName.price}
                variety={varietyName.tag}
                active={varietyName.tag == variety}
                key={index}
                setVariety={setVariety}
              />
            ))}
            {/* <PriceTag text="Medium" price={199} active={true} />
            <PriceTag text="Small" price={199} active={false} />
            <PriceTag text="Large" price={199} active={false} /> */}
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
    // marginBottom: 70,
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
