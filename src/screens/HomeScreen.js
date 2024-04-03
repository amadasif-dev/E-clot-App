import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';
import AppIcons from '../constants/AppIcon';
import AppColor from '../theme/AppColor';
import AppStrings from '../constants/AppString';
import TextComponents from '../components/TextComponent';
import CategoriesComponents from '../components/CategoriesComponent';
import ItemsComponents from '../components/ItemsComponent';
import ProductListing from '../json/ProductListingJson';
import CustomModal from '../components/ModalComponent';
import ButtonComponent from '../components/ButtonComponent';
import {AppRoutes} from '../routes/AppRoutes';
import {useNavigation} from '@react-navigation/native';
import {getProductListing} from '../axiosServices/productCategories/ProductCategoriesData';
import {MaterialIndicator} from 'react-native-indicators';

const HomePageScreen = props => {
  const navigation = useNavigation();
  // const {endPoint} = props?.route?.params;
  console.log(props);
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [isData, setIsData] = useState({data: []});
  const [isLoading, setIsloading] = useState(false);

  const openModal = () => {
    setAlertVisible(true);
  };

  const closeModal = () => {
    setAlertVisible(false);
  };

  const getData = async () => {
    try {
      setIsloading(true);
      const menShoseData = await getProductListing('/mens-shoes');
      const womwnShoseData = await getProductListing('/womens-shoes');
      const allDataMarge = [
        ...menShoseData.products,
        ...womwnShoseData.products,
      ];
      setIsData(allDataMarge);
      setIsloading(false);
      console.log(isData);
    } catch (error) {
      console.log('error: ', error);
      setIsloading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: AppColor.dark}}>
      <View style={styles.conatiner}>
        <View style={{left: 24}}>
          <AppIcons.icProfile />
        </View>
        <View style={styles.circle}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
            }}>
            <View
              style={{
                paddingHorizontal: 12,
                top: 12,
              }}>
              <TouchableOpacity>
                <AppIcons.icBag />
              </TouchableOpacity>
              {/* <CustomModal isVisible={isAlertVisible} onClose={closeModal}>
                <View style={styles.container}>
                  <TextComponents
                    style={styles.emailText}
                    placeholder={'Item Name'}
                    secureTextEntry={false}
                  />
                </View>
                <View style={styles.container}>
                  <TextComponents
                    style={styles.emailText}
                    placeholder={'Item Price'}
                    secureTextEntry={false}
                  />
                </View>
                <View style={styles.container}>
                  <TextComponents
                    style={styles.emailText}
                    placeholder={'Color Code'}
                    secureTextEntry={false}
                  />
                </View>
                <View style={[styles.container]}>
                  <TextComponents
                    style={styles.emailText}
                    placeholder={'Details'}
                    secureTextEntry={false}
                  />
                </View>
                <View>
                  <ButtonComponent
                    style={styles.btnStyle}
                    text={'Submit'}
                    btnLabelStyle={styles.btnText}
                  />
                </View>
              </CustomModal> */}
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          top: 24,
          borderRadius: 100,
          backgroundColor: AppColor.lightDark,
          margin: 24,
          flexDirection: 'row',
        }}>
        <View
          style={{
            paddingHorizontal: 19,
            justifyContent: 'center',
          }}>
          <AppIcons.icSearch />
        </View>
        <TextComponents
          style={styles.searchStyle}
          placeholder={AppStrings.Search}
          secureTextEntry={false}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 24,
        }}>
        <Text style={[styles.textStyle, {}]}>{AppStrings.Categories}</Text>
        <TouchableOpacity onPress={() => navigation.navigate(AppRoutes.seeAll)}>
          <View>
            <Text style={[styles.textStyle, {fontWeight: '400'}]}>
              {AppStrings.SeeAll}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <CategoriesComponents />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={[styles.textStyle, {paddingTop: 24}]}>
          {AppStrings.topSelling}
        </Text>
        <View>
          <Text style={[styles.textStyle, {fontWeight: '400', paddingTop: 24}]}>
            {AppStrings.SeeAll}
          </Text>
        </View>
      </View>

      <ScrollView overScrollMode="never">
        <FlatList
          overScrollMode="never"
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 8, paddingTop: 16}}
          data={ProductListing}
          renderItem={({item}) => {
            return (
              <View style={{paddingLeft: 15}}>
                <ItemsComponents
                  key={item.id ? item.id.toString() : Math.random().toString()}
                  img={item?.productImage}
                  text={item?.productName}
                  icon={AppIcons.icApple}
                  priceText={item?.productPrice}
                  numberOfLines={2}
                  item={item}
                />
              </View>
            );
          }}
          keyExtractor={item =>
            item.id ? item.id.toString() : Math.random().toString()
          }
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={[
              styles.textStyle,
              {paddingTop: 24, color: AppColor.primary},
            ]}>
            {AppStrings.newIn}
          </Text>
          <View>
            <Text style={[styles.textStyle, {paddingTop: 24}]}>
              {AppStrings.SeeAll}
            </Text>
          </View>
        </View>
        <View>
          {isLoading ? (
            <MaterialIndicator
              animating={true}
              style={{marginVertical: 10}}
              size={30}
              color={AppColor.primary}
            />
          ) : (
            <View>
              <FlatList
                contentContainerStyle={{
                  marginVertical: 16,
                  marginHorizontal: 8,
                  paddingBottom: '5%',
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                overScrollMode="never"
                data={isData}
                renderItem={({item}) => (
                  <View
                    style={{
                      flex: 1,
                      marginBottom: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingLeft: 15,
                    }}>
                    <ItemsComponents
                      key={
                        item.id ? item.id.toString() : Math.random().toString()
                      }
                      img={{uri: item?.thumbnail}}
                      imgStyle={styles.imgStyle}
                      text={item?.brand}
                      priceText={item?.price}
                      numberOfLines={1}
                      item={item}
                      keyExtractor={item =>
                        item.id ? item.id.toString() : Math.random().toString()
                      }
                    />
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: 100,
    height: 50,
  },
  conatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
  },
  circle: {
    borderRadius: 100,
    borderWidth: 0.2,
    backgroundColor: AppColor.primary,
    width: 40,
    height: 40,
    right: 24,
    position: 'relative',
  },
  searchStyle: {
    fontFamily: 'Roboto-Light',
    fontWeight: '400',
    letterSpacing: -0.4,
    fontSize: 16,
    color: AppColor.white,
  },
  textInput: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 160,
    paddingHorizontal: 19,
    color: AppColor.white,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Roboto-Bold',
    color: AppColor.white,
    paddingHorizontal: 24,
  },
  emailText: {
    fontFamily: 'Roboto-Light',
    fontWeight: '400',
    letterSpacing: -0.4,
    fontSize: 16,
    paddingHorizontal: 15,
    color: AppColor.white,
  },
  container: {
    borderRadius: 4,
    backgroundColor: AppColor.lightDark,
    marginTop: 10,
    marginHorizontal: 24,
  },
  btnStyle: {
    width: 250,
    paddingVertical: 15,
    backgroundColor: AppColor.lightDark,
    marginTop: 16,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    width: '100%',
    height: 200,
    // resizeMode: 'contain',
  },
});
export default HomePageScreen;
