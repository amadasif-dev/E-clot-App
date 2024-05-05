import {
    FlatList,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import AppColor from '../../../theme/AppColor';
import BackButtonScreenComponent from '../../../components/BackButtonScreenComponent';
import ItemsComponents from '../../../components/ItemsComponent';
import { useDispatch, useSelector } from 'react-redux';
import AppIcons from '../../../constants/AppIcon';
import { RemoveWishListItem } from '../../../reduxServices/action/WishListItem';

const WishListScreen = () => {
    const [isData, setIsData] = useState([])
    const dispatch = useDispatch()

    const itemList = useSelector(state => state.wishListItemReducer)
    console.log(itemList.items.length)
    const data = itemList.items
    useEffect(() => {
        setIsData(data)
    }, [itemList])

    // Handle Product remove to wish List items
    const handleRemoveWishListItems = (item) => {
        dispatch(RemoveWishListItem(item));
        console.log(item)
    }
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: AppColor.dark,
            }}>
            <View style={{ marginTop: 20 }}>
                <BackButtonScreenComponent style={{ marginLeft: 27 }} />
            </View>
            <View
                style={{
                    marginHorizontal: 24,
                    marginTop: 16,
                    justifyContent: 'center',
                    alignItems: "center"
                }}>
                <Text style={styles.txtStyle}>My Favourit</Text>
            </View>

            <View>
                <FlatList
                    // numColumns={2}
                    contentContainerStyle={{
                        marginVertical: 16,
                        marginHorizontal: 20,
                        paddingBottom: '10%',
                    }}
                    overScrollMode="never"
                    data={isData}
                    renderItem={({ item }) => (
                        <View
                            style={{
                                flex: 1,
                                marginBottom: 20,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <ItemsComponents
                                key={item.id ? item.id.toString() : Math.random().toString()}
                                img={{ uri: item?.thumbnail }}
                                imgStyle={styles.imgStyle}
                                text={item?.brand}
                                priceText={item?.price}
                                numberOfLines={2}
                                item={item}
                                activeHeartIcon={AppIcons.icRedHeart}
                                 onPress={()=>handleRemoveWishListItems(item)}
                                keyExtractor={item =>
                                    item.id ? item.id.toString() : Math.random().toString()
                                }
                               
                            />
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>

    );
};

export default WishListScreen;

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
