import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getProductBag} from '../../axiosServices/productCategories/ProductCategoriesData';
import AppColor from '../../theme/AppColor';
import BackButtonScreenComponent from '../../components/BackButtonScreenComponent';
import AppStrings from '../../constants/AppString';
import ItemsComponents from '../../components/ItemsComponent';

const BagScreen = () => {
  const [isData, setIsData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const getData = async () => {
    try {
      setIsloading(true);
      const data = await getProductBag();
      setIsData(data?.products), console.log('data', isData);
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
        <Text style={styles.txtStyle}>{AppStrings.bags}</Text>
      </View>
      <View></View>
      {isLoading ? (
        <ActivityIndicator
          animating={true}
          style={{marginVertical: 10}}
          size={50}
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

export default BagScreen;

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
