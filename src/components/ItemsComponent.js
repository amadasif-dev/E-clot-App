import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import AppColor from "../theme/AppColor";
import AppIcons from "../constants/AppIcon";
import { useNavigation } from "@react-navigation/native";
import { AppRoutes } from "../routes/AppRoutes";

const ItemsComponents = props => {
    const navigation = useNavigation();
    const { img, text, priceText, onPress, item, numberOfLines, imgStyle, activeHeartIcon,icShare } = props
    console.log(props)

    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: "row-reverse",
                position: "relative"
            }}>
                <Image source={img}
                    style={[imgStyle, { ...imgStyle }]}
                />
                <View style={{
                    position: "absolute",
                    paddingTop: 9,
                    paddingRight: 15,
                }}>
                    <TouchableOpacity onPress={onPress}>
                        {activeHeartIcon && < props.activeHeartIcon />}
                    </TouchableOpacity>
                    
                    <View style={{paddingTop:5}}>

                    <TouchableOpacity>
                        {icShare && <props.icShare />}
                    </TouchableOpacity>
                    </View>

                </View>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate(AppRoutes.detail, { item: item })}
            >
                <View style={styles.textStyle}>
                    <Text numberOfLines={numberOfLines} style={[styles.textStyle, { paddingTop: 1 }]} >{text}</Text>
                </View>
                <View style={{ paddingVertical: 12 }}>
                    <Text style={[styles.textStyle, {
                        paddingTop: 1, fontFamily: 'Roboto-Bold',
                        fontWeight: '400',
                    }]}>
                        Rs# {priceText}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {

        backgroundColor: AppColor.lightDark,
        width: 160,
        position: "relative",
        borderRadius: 8,
        overflow: "hidden",
        elevation: 0.5,

    },
    textStyle: {
        fontSize: 14,
        fontWeight: '400',
        paddingTop: 10,
        paddingHorizontal: 2,
        color: AppColor.white,
        maxWidth: 100,
        fontFamily: 'Roboto-Light',
        fontWeight: '400',
    },

})
export default ItemsComponents;