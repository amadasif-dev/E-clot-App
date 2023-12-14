import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native"
import AppColor from "../theme/AppColor";
import AppStrings from "../constants/AppString";
import TextComponents from "../components/TextComponent";
import ButtonComponent from "../components/ButtonComponent";
import { useNavigation } from "@react-navigation/native";
import { AppRoutes } from "../routes/AppRoutes";
import AppIcons from "../constants/AppIcon";
import { Formik } from "formik";
import { signUpValidationSchema } from "../validation/validation";
import BackButtonScreenComponent from "../components/BackButtonScreenComponent";

const SiginUpScreen = () => {
    const navigation = useNavigation()

    handleSignup = () => {
        navigation.navigate(AppRoutes.signIn)
    }
    return (

        <View style={{
            backgroundColor: AppColor.dark,
            flex: 1,
        }}>
            <View style={{marginTop:20,marginLeft:24}}>

                <BackButtonScreenComponent />
            </View>
            <View style={{
                paddingTop: 60,
                paddingHorizontal: 24,
            }}>
                <Text style={styles.textstyle} >{AppStrings.createAccount}</Text>
            </View>
            <ScrollView>
                <Formik
                    initialValues={{ email: 'Johnwick4@gmail.com', password: 'Admin123@', fullName: 'John Wick', lastName: 'Khan 14' }}
                    onSubmit={(values) => {
                        console.log(values)
                        const { fullName, lastName, email, password } = values
                        handleSignup(fullName, lastName, email, password)
                    }}
                    validationSchema={signUpValidationSchema}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        <>
                            <View style={styles.container}>
                                <TextComponents
                                    style={styles.emailText}
                                    placeholder={AppStrings.firstname}
                                    secureTextEntry={false}
                                    onChangeText={handleChange("fullName")}
                                    onBlur={handleBlur("fullName")}
                                    value={values.fullName}
                                />
                            </View>
                            {(errors.email && touched.email) &&
                                <Text style={styles.errorText}>{errors.fullName}</Text>
                            }
                            <View style={[styles.container, { marginTop: 16 }]}>
                                <TextComponents
                                    style={styles.emailText}
                                    placeholder={AppStrings.lastName}
                                    secureTextEntry={false}
                                    onChangeText={handleChange("lastName")}
                                    onBlur={handleBlur("lastName")}
                                    value={values.lastName}
                                />
                            </View>
                            {(errors.email && touched.email) &&
                                <Text style={styles.errorText}>{errors.lastName}</Text>
                            }
                            <View style={[styles.container, { marginTop: 16 }]}>
                                <TextComponents
                                    style={styles.emailText}
                                    placeholder={AppStrings.emailAddress}
                                    keyboardType={"email-address"}
                                    secureTextEntry={false}
                                    onChangeText={handleChange("email")}
                                    onBlur={handleBlur("email")}
                                    value={values.email}

                                />
                            </View>
                            {(errors.email && touched.email) &&
                                <Text style={styles.errorText}>{errors.email}</Text>
                            }
                            <View style={[styles.container, { marginTop: 16 }]}>
                                <TextComponents
                                    style={styles.emailText}
                                    placeholder={AppStrings.password}
                                    secureTextEntry={true}
                                    onChangeText={handleChange("password")}
                                    onBlur={handleBlur("password")}
                                    value={values.password}
                                />
                            </View>
                            {(errors.password && touched.password) &&
                                <Text style={styles.errorText}>{errors.password}</Text>
                            }
                            <View style={{ marginTop: 40 }}>
                                <ButtonComponent
                                    style={styles.btnStyle}
                                    text={AppStrings.continue}
                                    btnLabelStyle={styles.btnText}
                                    onPress={handleSubmit}
                                />
                            </View>
                        </>
                    )}
                </Formik>
                <View style={{
                    paddingHorizontal: 24,
                    paddingTop: 40,
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
                            color: AppColor.white
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
        top: 48,
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
        color: AppColor.white,
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
    },
    errorText: {
        color: AppColor.red,
    },
    errorText: {
        color: AppColor.red,
        fontFamily: "Roboto-Light",
        fontWeight: "400",
        paddingHorizontal: 25,
        marginTop: 5,
    },


})
export default SiginUpScreen;