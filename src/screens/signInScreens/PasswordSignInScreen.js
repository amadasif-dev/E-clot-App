import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import AppStrings from '../../constants/AppString';
import ButtonComponent from '../../components/ButtonComponent';
import TextComponents from '../../components/TextComponent';
import AppColor from '../../theme/AppColor';
import {AppRoutes} from '../../routes/AppRoutes';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import {passwordValidationSchema} from '../../validation/validation';
import {handleSignInAuth} from '../../auth/UserAuth';
import LoaderComponent from '../../components/LoaderComponent';

const PasswordSignInScreen = props => {
  const email = props.route.params.email;
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  const handlePassword = async password => {
    try {
      setLoader(true);
      const userLogin = await handleSignInAuth(email, password);
      console.log(userLogin);
      setLoader(false);
      navigation.navigate(AppRoutes.bottomTabs);
    } catch (error) {
      console.log('Error during registration:', error);
      setError(error);
      setLoader(false);
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
        initialValues={{password: 'Admin123@'}}
        onSubmit={values => {
          console.log(values);
          const {password} = values;
          handlePassword(password);
        }}
        validationSchema={passwordValidationSchema}>
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <View style={styles.container}>
              <TextComponents
                style={styles.emailText}
                placeholder={AppStrings.password}
                secureTextEntry={true}
                placeholderTextColor={styles.placeholderTextColor}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </View>
            {errors.password && touched.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            <View>
              <ButtonComponent
                style={styles.btnStyle}
                text={AppStrings.continue}
                btnLabelStyle={styles.btnText}
                onPress={handleSubmit}
              />
              {error && <Text style={styles.errorText}>{error}</Text>}
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
          {AppStrings.forgotPassword}
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Roboto-Bold',
              fontWeight: '400',
              letterSpacing: -0.4,
              fontSize: 12,
              color: AppColor.white,
            }}>
            {AppStrings.reset}
          </Text>
        </TouchableOpacity>
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
  errorText: {
    color: AppColor.red,
    fontFamily: 'Roboto-Light',
    fontWeight: '400',
    paddingHorizontal: 25,
    marginTop: 5,
  },
});

export default PasswordSignInScreen;
