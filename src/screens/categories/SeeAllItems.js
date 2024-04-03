import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import AppColor from '../../theme/AppColor';
import BackButtonScreenComponent from '../../components/BackButtonScreenComponent';
import AppStrings from '../../constants/AppString';
import CardComponent from '../../components/CardComponent';
import AppIcons from '../../constants/AppIcon';
import {useNavigation} from '@react-navigation/native';
import {AppRoutes} from '../../routes/AppRoutes';
import {getProductListing} from '../../axiosServices/productCategories/ProductCategoriesData';

const SeeAllItems = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: AppColor.dark}}>
      <View style={{marginTop: 20}}>
        <BackButtonScreenComponent style={{marginLeft: 27}} />
      </View>
      <View style={{marginTop: 16, marginLeft: 24}}>
        <Text
          style={{
            color: AppColor.white,
            fontSize: 24,
          }}>
          {AppStrings.shopCategories}
        </Text>
      </View>
      <View
        style={{
          marginLeft: 24,
          marginRight: 24,
          marginTop: 14,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate(AppRoutes.hoodiesScreen)}>
          <CardComponent
            text={AppStrings.Hoodies}
            icon={AppIcons.icHoddies}
            viewStyle={styles.viewStyle}
            lableStyle={styles.lableStyle}
            style={styles.cardStyle}
            iconStyle={styles.iconStyle}
            disabled={true}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginLeft: 24,
          marginRight: 24,
          marginTop: 8,
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(AppRoutes.productListing, {
              endPoint: '/sunglasses',
              title: AppStrings.accessories,
            })
          }>
          <CardComponent
            text={AppStrings.accessories}
            icon={AppIcons.icAccessories}
            viewStyle={styles.viewStyle}
            lableStyle={styles.lableStyle}
            style={styles.cardStyle}
            iconStyle={styles.iconStyle}
            disabled={true}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginLeft: 24,
          marginRight: 24,
          marginTop: 8,
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(AppRoutes.productListing, {
              endPoint: '/mens-shirts',
              title: AppStrings.shorts,
            })
          }>
          <CardComponent
            text={AppStrings.shorts}
            icon={AppIcons.icShort}
            viewStyle={styles.viewStyle}
            lableStyle={styles.lableStyle}
            style={styles.cardStyle}
            iconStyle={styles.iconStyle}
            disabled={true}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginLeft: 24,
          marginRight: 24,
          marginTop: 8,
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(AppRoutes.productListing, {
              endPoint: '/mens-shoes',
              title: AppStrings.shoes,
            })
          }>
          <CardComponent
            text={AppStrings.shoes}
            icon={AppIcons.icShoes}
            viewStyle={styles.viewStyle}
            lableStyle={styles.lableStyle}
            style={styles.cardStyle}
            iconStyle={styles.iconStyle}
            disabled={true}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginLeft: 24,
          marginRight: 24,
          marginTop: 8,
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(AppRoutes.productListing, {
              endPoint: '/womens-shoes',
              title: AppStrings.womenShoes,
            })
          }>
          <CardComponent
            text={AppStrings.womenShoes}
            icon={AppIcons.icShoes}
            viewStyle={styles.viewStyle}
            lableStyle={styles.lableStyle}
            style={styles.cardStyle}
            iconStyle={styles.iconStyle}
            disabled={true}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginLeft: 24,
          marginRight: 24,
          marginTop: 8,
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(AppRoutes.productListing, {
              endPoint: '/womens-bags',
            })
          }>
          <CardComponent
            text={AppStrings.bag}
            icon={AppIcons.icBag2}
            viewStyle={styles.viewStyle}
            lableStyle={styles.lableStyle}
            style={styles.cardStyle}
            iconStyle={styles.iconStyle}
            disabled={true}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  txtStyle: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    fontWeight: '600',
    color: AppColor.white,
  },
  cardstyle: {
    paddingVertical: 25,
    shadowColor: AppColor.lightDark,
    elevation: 5,
    shadowOpacity: 0.5,
  },
  viewStyle: {
    justifyContent: 'flex-end',
    flexDirection: 'row-reverse',
  },
  lableStyle: {
    marginTop: 25,
    left: 18,
  },
  cardStyle: {
    height: 80,
  },
  iconStyle: {
    marginTop: 5,
    right: 48,
  },
});

export default SeeAllItems;
