import React from "react";
import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native"
import AppColor from "../theme/AppColor";
import AppIcons from "../constants/AppIcon";
const ProductQuantity = props => {
    const { text, minusIcon, count, addIcon, handleSubtract, handleAdd } = props
    return (
        <View style={styles.sizeBox}>
            <View style={styles.textContainer}>
                <Text style={{
                    color: AppColor.white,
                    fontSize: 16,
                    fontWeight: "400"
                }}>{text}</Text>
            </View>

            <TouchableOpacity

                onPress={() => handleAdd(count)}

            >
                <View style={{
                    borderRadius: 100,
                    borderWidth: 0.2,
                    backgroundColor: AppColor.primary,
                    width: 40,
                    height: 40,
                    right: 24,
                    position: "relative",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <View style={{ position: 'absolute' }}>
                        {addIcon && <props.addIcon />}
                    </View>
                </View>
            </TouchableOpacity>
            <View style={{ paddingRight: 50 }}>
                <Text style={{
                    fontSize: 14, fontWeight: "400",
                    color: AppColor.white
                }}>{count}</Text>
            </View>
            <TouchableOpacity onPress={() => handleSubtract(count)}>
                <View style={{
                    borderRadius: 100,
                    borderWidth: 0.2,
                    backgroundColor: AppColor.primary,
                    width: 40,
                    height: 40,
                    right: 24,
                    position: "relative",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    {minusIcon && <props.minusIcon />}
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    sizeBox: {
        flexDirection: 'row',
        backgroundColor: AppColor.lightDark,
        width: 342,
        borderRadius: 100,
        left: 20,
        height: 56,
        alignItems: 'center'
    },
    textContainer: {
        flex: 1,
        paddingHorizontal: 16,

    },
    middleContainer: {
        paddingRight: 29,
    },
    iconContainer: {
        paddingRight: 16
    }

})
export default ProductQuantity;