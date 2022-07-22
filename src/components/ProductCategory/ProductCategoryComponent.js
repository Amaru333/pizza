import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {COLOR_PRIMARY_ORANGE} from '../../constants/ColorConstants';
import VerticalProductCard from '../../common/components/VerticalProductCard';
import {useDispatch, useSelector} from 'react-redux';
import {
  getPopularPage,
  getPopularProducts,
  getProductListByType,
  getProductsByType,
  getVegPage,
  paginationType,
} from '../../redux/product/productSlice';
import {PAGE_LIMIT} from '../../constants/APIEndpointConstants';

const ProductCategoryComponent = props => {
  const categoryData = props.route.params?.data;

  const pageNumber = useSelector(getPopularPage);

  const vegPageNumber = useSelector(getVegPage);

  const getPaginationDetails = useSelector(paginationType(categoryData?.slug));
  const dispatch = useDispatch();

  const renderItem = ({item}) => {
    return <VerticalProductCard data={item} navigation={props.navigation} />;
  };

  const item_list = useSelector(getProductListByType(categoryData?.slug));

  const loadItems = () => {
    if (getPaginationDetails.page * PAGE_LIMIT < getPaginationDetails.count) {
      if (categoryData?.slug == 'popular_choices') {
        dispatch(
          getPopularProducts({
            page: pageNumber,
            limit: PAGE_LIMIT,
            skip: pageNumber * PAGE_LIMIT,
          }),
        );
      } else {
        dispatch(
          getProductsByType({
            page: vegPageNumber,
            limit: PAGE_LIMIT,
            skip: vegPageNumber * PAGE_LIMIT,
            type: categoryData?.slug,
          }),
        );
      }
    }
  };

  const renderLoader = () => {
    return getPaginationDetails.page * PAGE_LIMIT <
      getPaginationDetails.count ? (
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color={COLOR_PRIMARY_ORANGE} />
      </View>
    ) : null;
  };

  return (
    <View style={styles.productCategoryWrapper}>
      <Text style={styles.heading}>{categoryData.heading}</Text>
      <FlatList
        data={item_list}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        ListFooterComponent={renderLoader}
        onEndReached={loadItems}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

export default ProductCategoryComponent;

const styles = StyleSheet.create({
  productCategoryWrapper: {
    marginTop: 60,
    marginBottom: 150,
  },
  heading: {
    fontSize: 22,
    fontFamily: 'Poppins-SemiBold',
    color: COLOR_PRIMARY_ORANGE,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: 'center',
  },
});
