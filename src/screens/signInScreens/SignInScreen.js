import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AppColor from '../../theme/AppColor';
import AppStrings from '../../constants/AppString';
import TextComponents from '../../components/TextComponent';
import AppIcons from '../../constants/AppIcon';
import ButtonComponent from '../../components/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import AppImages from '../../constants/AppImages';
import {AppRoutes} from '../../routes/AppRoutes';
import {Formik} from 'formik';
import {loginValidationSchema} from '../../validation/validation';
import {facebookSignInAuth, googleSignInAuth} from '../../auth/UserAuth';
import LoaderComponent from '../../components/LoaderComponent';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const SignInScreen = () => {
  const navigation = useNavigation();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [isAuthError, setIsAuthError] = useState(null);

  // email password login handle
  const handleLogin = async email => {
    try {
      if (email !== '') {
        navigation.navigate(AppRoutes.password, {email});
      }
    } catch (error) {
      console.log('email: ', error);
    }
  };

  // Google signin Config
  useEffect(() => {
    // google Config();
    GoogleSignin.configure({
      webClientId:
        '274819137897-7icgporru6nnglvn35dpng95cdic8bhr.apps.googleusercontent.com',
      offlineAccess: false,
    });
  });

  // Google SignIn handle
  const handleGoogleSignIn = async () => {
    try {
      setLoader(true);
      const userInfo = await googleSignInAuth();
      console.log('Google Sign-In Successful:', userInfo);
      navigation.navigate(AppRoutes.bottomTabs);
    } catch (error) {
      console.log('Error during Google Sign-In:', error);
      setIsAuthError(error);
      setLoader(false);
    }
  };

  // Facebook Sign In Handle
  const handleFacebookSignIn = async () => {
    try {
      setLoader(true)
      await facebookSignInAuth();
      navigation.navigate(AppRoutes.bottomTabs);
      setLoader(false)
    } catch (error) {
      setIsAuthError(error);
      setLoader(false)
    }
  };

  return (
    <View
      style={{
        backgroundColor: AppColor.dark,
        flex: 1,
      }}>
      <View
        style={{
          paddingTop: 123,
          paddingHorizontal: 24,
        }}>
        <Text style={styles.textstyle}>{AppStrings.signin}</Text>
      </View>

      <Formik
        initialValues={{email: 'test@gmail.com'}}
        onSubmit={values => {
          console.log(values);
          const {email} = values;
          handleLogin(email);
        }}
        validationSchema={loginValidationSchema}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <View style={styles.container}>
              <TextComponents
                style={styles.emailText}
                placeholder={AppStrings.emailAddress}
                keyboardType={'email-address'}
                secureTextEntry={true}
                placeholderTextColor={styles.placeholderTextColor}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>
            {errors.email && touched.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
            <View>
              <ButtonComponent
                style={styles.btnStyle}
                text={AppStrings.continue}
                btnLabelStyle={styles.btnText}
                onPress={handleSubmit}
              />
              {error && (
                <Text style={[styles.errorText, {paddingTop: 10}]}>
                  {error}
                </Text>
              )}
            </View>
          </>
        )}
      </Formik>

      <View
        style={{
          paddingHorizontal: 24,
          paddingTop: 16,
          flexDirection: 'row',
        }}>
        <Text
          style={[
            {
              fontSize: 12,
              color: AppColor.white,
              fontFamily: 'Roboto-Light',
              fontWeight: '400',
              letterSpacing: -0.4,
              fontSize: 12,
            },
          ]}>
          {AppStrings.anAccount}
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(AppRoutes.createAccount)}>
          <Text
            style={{
              fontFamily: 'Roboto-Bold',
              fontWeight: '400',
              letterSpacing: -0.4,
              fontSize: 12,
              color: AppColor.white,
            }}>
            {AppStrings.createOne}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 71}}>
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
          onPress={() => handleGoogleSignIn()}
        />
      </View>
      <View>
        <ButtonComponent
          style={styles.btnTypes}
          text={AppStrings.facebook}
          img={AppImages.imgFacebook}
          btnLabelStyle={styles.btnText}
          onPress={() => handleFacebookSignIn()}
        />
      {isAuthError && (
        <Text style={[styles.errorText, {paddingTop: 10}]}>{isAuthError}</Text>
      )}
      </View>
      <LoaderComponent isLoading={loader} color={AppColor.primary} size={45} />
    </View>
  );
};
const styles = StyleSheet.create({
  textstyle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 24,
    color: AppColor.white,
  },
  emailText: {
    fontFamily: 'Roboto-Light',
    fontWeight: '400',
    letterSpacing: -0.4,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTypes: {
    width: 340,
    paddingVertical: 15,
    backgroundColor: AppColor.lightDark,
    marginTop: 16,
    borderRadius: 100,
  },
  btnText: {
    paddingHorizontal: 55,
  },
  placeholderTextColor: {
    color: AppColor.lightDark,
  },
  errorText: {
    color: AppColor.red,
    fontFamily: 'Roboto-Light',
    fontWeight: '400',
    paddingHorizontal: 25,
    marginTop: 5,
  },
});
export default SignInScreen;
