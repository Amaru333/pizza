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
          rating: 3,
          description: 'Fresh Basil with Tomato and Mozarella',
          price: [
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
          ],
        },
        {
          image: images.IMG_PIZZA_2,
          title: 'Chilly Veg',
          rating: 2,
          description:
            'Oregano, Corn, Pepperoni and Mozarella, bruh, yes, no, ok',
          price: [
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
          ],
        },
        {
          image: images.IMG_PIZZA_1,
          title: 'Basil & Tomato',
          rating: 5,
          description: 'Fresh Basil with Tomato and Mozarella',
          price: [
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
          ],
        },
        {
          image: images.IMG_PIZZA_1,
          title: 'Basil & Tomato',
          rating: 4,
          description: 'Fresh Basil with Tomato and Mozarella',
          price: [
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
          ],
        },
        {
          image: images.IMG_PIZZA_1,
          title: 'Basil & Tomato',
          rating: 1,
          description: 'Fresh Basil with Tomato and Mozarella',
          price: [
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
          ],
        },
        {
          image: images.IMG_PIZZA_1,
          title: 'Basil & Tomato',
          rating: 0,
          description: 'Fresh Basil with Tomato and Mozarella',
          price: [
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
          ],
        },
        {
          image: images.IMG_PIZZA_1,
          title: 'Basil & Tomato',
          rating: 3,
          description: 'Fresh Basil with Tomato and Mozarella',
          price: [
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
          ],
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
          rating: 3,
          description: 'Fresh Basil with Tomato and Mozarella',
          price: [
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
          ],
        },
        {
          image: images.IMG_PIZZA_2,
          title: 'Chilly Veg',
          rating: 3,
          description:
            'Oregano, Corn, Pepperoni and Mozarella, bruh, yes, no, ok',
          price: [
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
          ],
        },
        {
          image: images.IMG_PIZZA_1,
          title: 'Basil & Tomato',
          rating: 3,
          description: 'Fresh Basil with Tomato and Mozarella',
          price: [
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
          ],
        },
        {
          image: images.IMG_PIZZA_1,
          title: 'Basil & Tomato',
          rating: 3,
          description: 'Fresh Basil with Tomato and Mozarella',
          price: [
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
          ],
        },
        {
          image: images.IMG_PIZZA_1,
          title: 'Basil & Tomato',
          rating: 3,
          description: 'Fresh Basil with Tomato and Mozarella',
          price: [
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
          ],
        },
        {
          image: images.IMG_PIZZA_1,
          title: 'Basil & Tomato',
          rating: 3,
          description: 'Fresh Basil with Tomato and Mozarella',
          price: [
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
          ],
        },
        {
          image: images.IMG_PIZZA_1,
          title: 'Basil & Tomato',
          rating: 3,
          description: 'Fresh Basil with Tomato and Mozarella',
          price: [
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
          ],
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
          rating: 3,
          description: 'Fresh Basil with Tomato and Mozarella',
          price: [
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
          ],
        },
        {
          image: images.IMG_PIZZA_2,
          title: 'Chilly Veg',
          rating: 3,
          description:
            'Oregano, Corn, Pepperoni and Mozarella, bruh, yes, no, ok',
          price: [
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
          ],
        },
        {
          image: images.IMG_PIZZA_1,
          title: 'Basil & Tomato',
          rating: 3,
          description: 'Fresh Basil with Tomato and Mozarella',
          price: [
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
          ],
        },
        {
          image: images.IMG_PIZZA_1,
          title: 'Basil & Tomato',
          rating: 3,
          description: 'Fresh Basil with Tomato and Mozarella',
          price: [
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
          ],
        },
        {
          image: images.IMG_PIZZA_1,
          title: 'Basil & Tomato',
          rating: 3,
          description: 'Fresh Basil with Tomato and Mozarella',
          price: [
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
          ],
        },
        {
          image: images.IMG_PIZZA_1,
          title: 'Basil & Tomato',
          rating: 3,
          description: 'Fresh Basil with Tomato and Mozarella',
          price: [
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
          ],
        },
        {
          image: images.IMG_PIZZA_1,
          title: 'Basil & Tomato',
          rating: 3,
          description: 'Fresh Basil with Tomato and Mozarella',
          price: [
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
          ],
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
        {homePageData.map((category, index) => (
          <HorizontalMenu
            key={index}
            data={category}
            navigation={props.navigation}
            route={props.route}
          />
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
