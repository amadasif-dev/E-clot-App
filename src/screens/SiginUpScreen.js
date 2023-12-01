import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native"
import AppColor from "../theme/AppColor";
import AppStrings from "../constants/AppString";
import TextComponents from "../components/TextComponent";
import ButtonComponent from "../components/ButtonComponent";
import { useNavigation } from "@react-navigation/native";
import { AppRoutes } from "../routes/AppRoutes";
import AppIcons from "../constants/AppIcon";


const SiginUpScreen = () => {
    const navigation = useNavigation()
    return (



        <View style={{
            backgroundColor: AppColor.dark,
            flex: 1,
        }}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
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

                            <AppIcons.icArrowleft2 />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={{
                paddingTop: 123,
                paddingHorizontal: 24,
            }}>
                <Text style={styles.textstyle} >{AppStrings.createAccount}</Text>
            </View>
            <ScrollView>


                <View style={styles.container}>
                    <TextComponents
                        style={styles.emailText}
                        placeholder={AppStrings.firstname}
                        secureTextEntry={false}
                    />
                </View>
                <View style={styles.container}>
                    <TextComponents
                        style={styles.emailText}
                        placeholder={AppStrings.lastName}
                        secureTextEntry={false}
                    />
                </View>
                <View style={styles.container}>
                    <TextComponents
                        style={styles.emailText}
                        placeholder={AppStrings.emailAddress}
                        keyboardType={"email-address"}
                        secureTextEntry={false}
                    />
                </View>
                <View style={styles.container}>
                    <TextComponents
                        style={styles.emailText}
                        placeholder={AppStrings.password}
                        keyboardType={"email-address"}
                        secureTextEntry={true}
                    />
                </View>
                <View>
                    <ButtonComponent
                        style={styles.btnStyle}
                        text={AppStrings.continue}
                        btnLabelStyle={styles.btnText}
                        onPress={() => navigation.navigate(AppRoutes.homepage)}
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

                    }]}>{AppStrings.forgotPassword}</Text>
                    <TouchableOpacity>
                        <Text style={{
                            fontFamily: "Roboto-Bold",
                            fontWeight: "400",
                            letterSpacing: -0.400,
                            fontSize: 12,
                            color:AppColor.white
                        }} >{AppStrings.reset}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>

    )
}
const styles = StyleSheet.create({

    circle: {
        borderRadius: 100,
        borderWidth: 0.2,
        backgroundColor: AppColor.lightDark,
        width: 40,
        height: 40,
        position: "relative",
        top:48,
        left: 27
    },
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
        color:AppColor.white,
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
export default SiginUpScreen;