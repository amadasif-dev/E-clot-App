import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getProductListing} from '../../axiosServices/productCategories/ProductCategoriesData';
import AppColor from '../../theme/AppColor';
import BackButtonScreenComponent from '../../components/BackButtonScreenComponent';
import AppStrings from '../../constants/AppString';
import ItemsComponents from '../../components/ItemsComponent';
import {MaterialIndicator} from 'react-native-indicators';

const ProductListing = props => {
  const {endPoint, title} = props?.route?.params;

  console.log(props);
  const [isData, setIsData] = useState({data: []});
  const [isLoading, setIsloading] = useState(false);
  const getData = async () => {
    try {
      setIsloading(true);
      const products = await getProductListing(endPoint);
      setIsData(products?.products);
      console.log('data', isData);
      setIsloading(false);
    } catch (error) {
      console.log('error: ', error);
      setIsloading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: AppColor.dark,
      }}>
      <View style={{marginTop: 20}}>
        <BackButtonScreenComponent style={{marginLeft: 27}} />
      </View>
      <View
        style={{
          marginHorizontal: 24,
          marginTop: 16,
        }}>
        <Text style={styles.txtStyle}>{title}</Text>
      </View>
      {/* <View>
        <MaterialIndicator color="white" />
      </View> */}
      {isLoading ? (
        <MaterialIndicator
          animating={true}
          style={{marginVertical: 10}}
          size={50}
          color={AppColor.primary}
        />
      ) : (
        <FlatList
          numColumns={2}
          contentContainerStyle={{
            marginVertical: 16,
            marginHorizontal: 20,
            paddingBottom: '10%',
          }}
          overScrollMode="never"
          data={isData}
          renderItem={({item}) => (
            <View
              style={{
                flex: 1,
                marginBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <ItemsComponents
                key={item.id ? item.id.toString() : Math.random().toString()}
                img={{uri: item?.thumbnail}}
                imgStyle={styles.imgStyle}
                text={item?.brand}
                priceText={item?.price}
                numberOfLines={2}
                item={item}
                keyExtractor={item =>
                  item.id ? item.id.toString() : Math.random().toString()
                }
              />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default ProductListing;

const styles = StyleSheet.create({
  txtStyle: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    color: AppColor.white,
  },
  imgStyle: {
    width: '100%',
    height: 200,
  },
});
