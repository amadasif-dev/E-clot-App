import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import AppColor from "../theme/AppColor";
import AppStrings from "../constants/AppString";
import AppIcons from "../constants/AppIcon";

const CategoriesComponents = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: "space-evenly", alignItems: "center" }}>
            <View style={{
                paddingTop: 16,
                left: 13

            }}  >
                <TouchableOpacity>
                    <AppIcons.icHoddies />
                    <Text
                        style={[styles.textStyle,
                        {
                            paddingHorizontal: 5, paddingTop: 5,
                            fontWeight: "400",
                        }]}
                    >{AppStrings.Hoodies}</Text>
                </TouchableOpacity>

            </View>
            <View style={{
                paddingTop: 16,
                left: 13.5

            }}  >
                <TouchableOpacity>

                    <AppIcons.icShort />
                    <Text
                        style={[styles.textStyle,
                        {
                            paddingHorizontal: 5, paddingTop: 5,
                            fontWeight: "400",
                        }]}
                    >{AppStrings.shorts}</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                paddingTop: 16,
                left: 13

            }}  >
                <TouchableOpacity>

                    <AppIcons.icShoes />
                    <Text
                        style={[styles.textStyle,
                        {
                            paddingHorizontal: 10, paddingTop: 5,
                            fontWeight: "400",
                        }]}
                    >{AppStrings.shoes}</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                paddingTop: 16,
                left: 13

            }}  >
                <TouchableOpacity>

                    <AppIcons.icBag2 />
                    <Text
                        style={[styles.textStyle,
                        {
                            paddingHorizontal: 14, paddingTop: 5,
                            fontWeight: "400",
                        }]}
                    >{AppStrings.bag}</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                paddingTop: 16,
                left: 13

            }}  >
                <TouchableOpacity>

                    <AppIcons.icAccessories />
                    <Text
                        style={[styles.textStyle,
                        {
                            paddingTop: 5,
                            fontWeight: "400",
                            right: 10
                        }]}
                    >{AppStrings.accessories}</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 16,
        fontWeight: '700',
        color: AppColor.white,
    },

})
export default CategoriesComponents;