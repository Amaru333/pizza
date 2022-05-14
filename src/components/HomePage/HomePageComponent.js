import React from 'react';
import {SafeAreaView, StyleSheet, Button, View} from 'react-native';
import {useDispatch} from 'react-redux';
import HorizontalMenu from '../../common/components/HorizontalMenu';
import Slider from '../../common/components/Slider';
import images, {HOME_PAGE_SLIDER_IMAGES} from '../../constants/ImageConstants';
import {
  TEXT_HOME_PAGE_SLIDER_1,
  TEXT_HOME_PAGE_SLIDER_2,
} from '../../constants/TextConstants';
import {logout, reset} from '../../redux/auth/authSlice';

export default function HomePageComponent(props) {
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout());
    dispatch(reset());
    props.navigation.reset({
      index: 0,
      routes: [{name: 'LoginScreen'}],
    });
  };

  const homePageData = [
    {
      heading: 'Popular Choices',
      slug: 'popular_choices',
      rank: 1,
      products: [
        {
          image: images.IMG_PIZZA_1,
          title: 'Basil & Tomato',
          description: 'Fresh Basil with Tomato and Mozarella',
          price: 199,
        },
        {
          image: images.IMG_PIZZA_2,
          title: 'Chilly Veg',
          description:
            'Oregano, Corn, Pepperoni and Mozarella, bruh, yes, no, ok',
          price: 239,
        },
        {
          image: images.IMG_PIZZA_1,
          title: 'Basil & Tomato',
          description: 'Fresh Basil with Tomato and Mozarella',
          price: 199,
        },
        {
          image: images.IMG_PIZZA_1,
          title: 'Basil & Tomato',
          description: 'Fresh Basil with Tomato and Mozarella',
          price: 199,
        },
        {
          image: images.IMG_PIZZA_1,
          title: 'Basil & Tomato',
          description: 'Fresh Basil with Tomato and Mozarella',
          price: 199,
        },
        {
          image: images.IMG_PIZZA_1,
          title: 'Basil & Tomato',
          description: 'Fresh Basil with Tomato and Mozarella',
          price: 199,
        },
        {
          image: images.IMG_PIZZA_1,
          title: 'Basil & Tomato',
          description: 'Fresh Basil with Tomato and Mozarella',
          price: 199,
        },
      ],
    },
    {
      heading: 'Veg Pizzas',
      slug: 'veg_pizzas',
      rank: 1,
      icon: 'veg',
      products: [
        {
          image: images.IMG_PIZZA_1,
          title: 'Basil & Tomato',
          description: 'Fresh Basil with Tomato and Mozarella',
          price: 199,
        },
        {
          image: images.IMG_PIZZA_2,
          title: 'Chilly Veg',
          description:
            'Oregano, Corn, Pepperoni and Mozarella, bruh, yes, no, ok',
          price: 239,
        },
        {
          image: images.IMG_PIZZA_1,
          title: 'Basil & Tomato',
          description: 'Fresh Basil with Tomato and Mozarella',
          price: 199,
        },
        {
          image: images.IMG_PIZZA_1,
          title: 'Basil & Tomato',
          description: 'Fresh Basil with Tomato and Mozarella',
          price: 199,
        },
        {
          image: images.IMG_PIZZA_1,
          title: 'Basil & Tomato',
          description: 'Fresh Basil with Tomato and Mozarella',
          price: 199,
        },
        {
          image: images.IMG_PIZZA_1,
          title: 'Basil & Tomato',
          description: 'Fresh Basil with Tomato and Mozarella',
          price: 199,
        },
        {
          image: images.IMG_PIZZA_1,
          title: 'Basil & Tomato',
          description: 'Fresh Basil with Tomato and Mozarella',
          price: 199,
        },
      ],
    },
    {
      heading: 'Non Veg Pizzas',
      slug: 'non_veg_pizzas',
      rank: 1,
      icon: 'non_veg',
      products: [
        {
          image: images.IMG_PIZZA_1,
          title: 'Basil & Tomato',
          description: 'Fresh Basil with Tomato and Mozarella',
          price: 199,
        },
        {
          image: images.IMG_PIZZA_2,
          title: 'Chilly Veg',
          description:
            'Oregano, Corn, Pepperoni and Mozarella, bruh, yes, no, ok',
          price: 239,
        },
        {
          image: images.IMG_PIZZA_1,
          title: 'Basil & Tomato',
          description: 'Fresh Basil with Tomato and Mozarella',
          price: 199,
        },
        {
          image: images.IMG_PIZZA_1,
          title: 'Basil & Tomato',
          description: 'Fresh Basil with Tomato and Mozarella',
          price: 199,
        },
        {
          image: images.IMG_PIZZA_1,
          title: 'Basil & Tomato',
          description: 'Fresh Basil with Tomato and Mozarella',
          price: 199,
        },
        {
          image: images.IMG_PIZZA_1,
          title: 'Basil & Tomato',
          description: 'Fresh Basil with Tomato and Mozarella',
          price: 199,
        },
        {
          image: images.IMG_PIZZA_1,
          title: 'Basil & Tomato',
          description: 'Fresh Basil with Tomato and Mozarella',
          price: 199,
        },
      ],
    },
  ];
  return (
    <SafeAreaView>
      <View style={styles.homePageContainer}>
        <Slider
          headerText={TEXT_HOME_PAGE_SLIDER_1}
          text={TEXT_HOME_PAGE_SLIDER_2}
          images={HOME_PAGE_SLIDER_IMAGES}
          type="home"
        />
        {homePageData.map(category => (
          <HorizontalMenu data={category} navigation={props.navigation} />
        ))}
        <View style={styles.buttonBruh}>
          <Button title="Pls logout" onPress={logoutUser} />
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  homePageContainer: {
    marginBottom: 70,
    marginTop: 48,
  },
  buttonBruh: {
    marginVertical: 20,
    marginHorizontal: 100,
  },
});
