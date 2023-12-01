
import React from "react";
import { } from "react-native"
import { AppRoutes } from "../routes/AppRoutes";
import SplashScreen from "../screens/SplashScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePageScreen from "../screens/HomeScreen";
import ProductDetailScreen from "../screens/productDetails/ProductDetailScreen";
import SignInScreen from "../screens/signInScreens/SignInScreen";
import PasswordSignInScreen from "../screens/signInScreens/PasswordSignInScreen";
import SiginUpScreen from "../screens/SiginUpScreen";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name={AppRoutes.splash} component={SplashScreen} />
            <Stack.Screen name={AppRoutes.signIn} component={SignInScreen} />
            <Stack.Screen name={AppRoutes.homepage} component={HomePageScreen} />
            <Stack.Screen name={AppRoutes.detail} component={ProductDetailScreen} />
            <Stack.Screen name={AppRoutes.password} component={PasswordSignInScreen} />
            <Stack.Screen name={AppRoutes.createAccount} component={SiginUpScreen}/>
        </Stack.Navigator>
    )
}
export default StackNavigation;