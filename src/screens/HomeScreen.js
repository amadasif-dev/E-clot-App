import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, ScrollView, FlatList } from "react-native"
import AppIcons from "../constants/AppIcon";
import ButtonComponents from "../components/ButtonComponent";
import AppColor from "../theme/AppColor";
import AppStrings from "../constants/AppString";
import TextComponents from "../components/TextComponent";
import CategoriesComponents from "../components/CategoriesComponent";
import ItemsComponents from "../components/ItemsComponent";
import AppImages from "../constants/AppImages";
import ProductListing from "../json/ProductListingJson";

const HomePageScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: AppColor.dark }}>
            <View style={styles.conatiner}>
                <View style={{ left: 24 }} >
                    <AppIcons.icProfile />
                </View>
                <View style={styles.circle}>
                    <View style={{
                        justifyContent: "center",
                        alignItems: 'center',
                        position: "absolute"
                    }}>
                        <View style={{
                            paddingHorizontal: 12,
                            top: 12
                        }}>
                            <TouchableOpacity>
                                <AppIcons.icBag />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{
                top: 24,
                borderRadius: 100,
                backgroundColor: AppColor.lightDark,
                margin: 24,
                flexDirection: 'row',
            }}>
                <View style={{
                    paddingHorizontal: 19,
                    justifyContent: "center"
                }} >
                    <AppIcons.icSearch />
                </View>
                <TextComponents
                    style={styles.searchStyle}
                    placeholder={AppStrings.Search}
                    secureTextEntry={false}
                />

            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", paddingTop: 24 }}>
                <Text style={[styles.textStyle]}>
                    {AppStrings.Categories}
                </Text>
                <View>
                    <Text style={[styles.textStyle, { fontWeight: "400" }]}>
                        {AppStrings.SeeAll}
                    </Text>

                </View>
            </View>
            <ScrollView>


                <CategoriesComponents />
                <View style={{ flexDirection: 'row', justifyContent: "space-between", }}>
                    <Text style={[styles.textStyle, { paddingTop: 24 }]}>
                        {AppStrings.topSelling}
                    </Text>
                    <View>
                        <Text style={[styles.textStyle, { fontWeight: "400", paddingTop: 24 }]}>
                            {AppStrings.SeeAll}
                        </Text>
                    </View>
                </View>

                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 12, paddingTop: 16 }}
                    data={ProductListing}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ paddingHorizontal: 13 }}>
                                <ItemsComponents
                                    img={item?.productImage}
                                    text={item?.productName}
                                    icon={AppIcons.icApple}
                                    priceText={item?.productPrice}
                                    item={item}
                                />
                            </View>
                        )
                    }
                    }
                    keyExtractor={item => item.id}
                />
            </ScrollView>

        </View>

    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        width: 100,
        height: 50
    },
    conatiner: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingTop: 15,

    },
    circle: {
        borderRadius: 100,
        borderWidth: 0.2,
        backgroundColor: AppColor.primary,
        width: 40,
        height: 40,
        right: 24,
        position: "relative",
    },
    searchStyle: {
        fontFamily: "Roboto-Light",
        fontWeight: "400",
        letterSpacing: -0.400,
        fontSize: 16,
        color: AppColor.white,
    },
    textInput: {
        fontSize: 12,
        fontWeight: "400",
        lineHeight: 160,
        paddingHorizontal: 19,
    },
    textStyle: {
        fontSize: 16,
        fontWeight: '700',
        color: AppColor.white,
        paddingHorizontal: 24,

    }

})
export default HomePageScreen;