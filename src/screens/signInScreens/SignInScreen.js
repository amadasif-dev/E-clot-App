import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import AppColor from "../../theme/AppColor";
import AppStrings from "../../constants/AppString";
import TextComponents from "../../components/TextComponent";
import AppIcons from "../../constants/AppIcon";
import ButtonComponent from "../../components/ButtonComponent";

import { useNavigation } from "@react-navigation/native";
import AppImages from "../../constants/AppImages";
import { AppRoutes } from "../../routes/AppRoutes";

const SignInScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={{
            backgroundColor: AppColor.dark,
            flex: 1,
        }}>
            <View style={{
                paddingTop: 123,
                paddingHorizontal: 24,
            }}>
                <Text style={styles.textstyle} >{AppStrings.signin}</Text>
            </View>
            <View style={styles.container}>
                <TextComponents
                    style={styles.emailText}
                    placeholder={AppStrings.emailAddress}
                    keyboardType={"email-address"}
                    secureTextEntry={true}
                />
            </View>
            <View>
                <ButtonComponent
                    style={styles.btnStyle}
                    text={AppStrings.continue}
                    btnLabelStyle={styles.btnText}
                    onPress={() => navigation.navigate(AppRoutes.password)}
                />
            </View>
            <View style={{
                paddingHorizontal: 24,
                paddingTop: 16,
                flexDirection: "row",

            }}>
                <Text style={[{
                    fontSize: 12,
                    color: AppColor.white,
                    fontFamily: "Roboto-Light",
                    fontWeight: "400",
                    letterSpacing: -0.400,
                    fontSize: 12,

                }]}>{AppStrings.anAccount}</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate(AppRoutes.createAccount)}
                >
                    <Text style={{
                        fontFamily: "Roboto-Bold",
                        fontWeight: "400",
                        letterSpacing: -0.400,
                        fontSize: 12,
                    }} >{AppStrings.createOne}</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 71 }} >
                <ButtonComponent
                    style={styles.btnTypes}
                    text={AppStrings.apple}
                    icon={AppIcons.icApple}
                    btnLabelStyle={styles.btnText}
                />
            </View>
            <View>
                <ButtonComponent
                    style={styles.btnTypes}
                    text={AppStrings.google}
                    img={AppImages.imgGoogle}
                    btnLabelStyle={styles.btnText}
                />

            </View>
            <View>
                <ButtonComponent
                    style={styles.btnTypes}
                    text={AppStrings.facebook}
                    img={AppImages.imgFacebook}
                    btnLabelStyle={styles.btnText}
                />

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    textstyle: {
        fontFamily: "Roboto-Bold",
        fontSize: 24,
        color: AppColor.white,

    },
    emailText: {
        fontFamily: "Roboto-Light",
        fontWeight: "400",
        letterSpacing: -0.400,
        fontSize: 16,
        paddingHorizontal: 15,
    },
    container: {
        borderRadius: 4,
        backgroundColor: AppColor.lightDark,
        marginTop: 32,
        marginHorizontal: 24,
    },
    btnStyle: {
        width: 340,
        paddingVertical: 15,
        backgroundColor: AppColor.primary,
        marginTop: 16,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",

    },
    btnTypes: {
        width: 340,
        paddingVertical: 15,
        backgroundColor: AppColor.lightDark,
        marginTop: 16,
        borderRadius: 100,
    },
    btnText: {
        paddingHorizontal: 55
    }

})
export default SignInScreen;