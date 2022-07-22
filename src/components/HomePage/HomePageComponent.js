import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Button, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import HorizontalMenu from '../../common/components/HorizontalMenu';
import Slider from '../../common/components/Slider';
import {PAGE_LIMIT} from '../../constants/APIEndpointConstants';
import {HOME_PAGE_SLIDER_IMAGES} from '../../constants/ImageConstants';
import {
  TEXT_HOME_PAGE_SLIDER_1,
  TEXT_HOME_PAGE_SLIDER_2,
} from '../../constants/TextConstants';
import {logout, reset} from '../../redux/auth/authSlice';
import {
  getNonVegPage,
  getNonVegProduct,
  getPopularPage,
  getPopularProduct,
  getPopularProducts,
  getProductsByType,
  getVegPage,
  getVegProduct,
  resetProductSlice,
} from '../../redux/product/productSlice';

export default function HomePageComponent(props) {
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout());
    dispatch(reset());
    dispatch(resetProductSlice());
    props.navigation.reset({
      index: 0,
      routes: [{name: 'LoginScreen'}],
    });
  };

  const pageNumber = useSelector(getPopularPage);
  const product_data = useSelector(getPopularProduct);

  const vegPageNumber = useSelector(getVegPage);
  const veg_product_data = useSelector(getVegProduct);

  const nonvegPageNumber = useSelector(getNonVegPage);
  const nonveg_product_data = useSelector(getNonVegProduct);

  useEffect(() => {
    dispatch(
      getPopularProducts({
        page: pageNumber,
        limit: PAGE_LIMIT,
        skip: pageNumber * PAGE_LIMIT,
      }),
    );
    dispatch(
      getProductsByType({
        page: vegPageNumber,
        limit: PAGE_LIMIT,
        skip: vegPageNumber * PAGE_LIMIT,
        type: 'veg',
      }),
    );
    dispatch(
      getProductsByType({
        page: nonvegPageNumber,
        limit: PAGE_LIMIT,
        skip: nonvegPageNumber * PAGE_LIMIT,
        type: 'non_veg',
      }),
    );
  }, []);

  const homePageData = [
    {
      heading: 'Popular Choices',
      slug: 'popular_choices',
      rank: 1,
      products: product_data?.slice(0, 5),
    },
    {
      heading: 'Veg Pizzas',
      slug: 'veg',
      rank: 2,
      icon: 'veg',
      products: veg_product_data?.slice(0, 5),
    },
    {
      heading: 'Non Veg Pizzas',
      slug: 'non_veg',
      rank: 3,
      icon: 'non_veg',
      products: nonveg_product_data?.slice(0, 5),
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
