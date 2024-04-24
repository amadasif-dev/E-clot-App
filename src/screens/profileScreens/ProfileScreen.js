import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import AppColor from '../../theme/AppColor';
import AppIcons from '../../constants/AppIcon';
import AppStrings from '../../constants/AppString';
import { useNavigation } from '@react-navigation/native';
import { AppRoutes } from '../../routes/AppRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeThemeAction } from '../../reduxServices/action/ChangeThemeAction';
import { signOutAuth } from '../../auth/UserAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppStorage } from '../../auth/storage/AppStorage';
import ProfileScreenComponent from './components/ProfileScreenComponent';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [error, setError] = useState(null);
  const [isdata, setIsData] = useState([])
  const Theme = useSelector(state => state.themeReducer);
  const dispatch = useDispatch();
  console.log(Theme);

  const theme = Theme.theme === 'dark' ? 'light' : 'dark';
  const toggleTheme = () => {
    dispatch(ChangeThemeAction(theme));
  };
  useEffect(() => { }, [Theme]);
  useEffect(() => { readData() }, [])

  const readData = async () => {
    try {
      const storedData = await AsyncStorage.getItem(AppStorage.user);
      if (storedData !== null) {
        const userData = JSON.parse(storedData)
        const showData = [userData.user.displayName,
        userData.user.email
        ]
        setIsData(showData)
        console.log('Read data:', isdata);
      } else {
        console.log('No data found in AsyncStorage');
      }
    } catch (error) {
      console.error('Error reading data from AsyncStorage:', error);
    }
  }
  const signOut = async () => {
    try {
      await signOutAuth();
      await AsyncStorage.removeItem(AppStorage.user);
      navigation.navigate(AppRoutes.signIn);
      console.log("data remove: ", isdata)
    } catch (error) {
      // Handle errors
      setError(error);
    }
  };
  return (
    <View
      style={[
        {
          flex: 1,
          backgroundColor: theme === 'light' ? AppColor.white : AppColor.dark,
        },
      ]}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 140,
          }}>
          <AppIcons.icProfile />
        </View>
        <View
          style={{ margin: 24 }}>
          <ProfileScreenComponent
            title={isdata[0]}
            text={isdata[1]}
            editText={'Edit'}
            date={AppStrings.date}
            lableStyle={styles.lableStyle}
            style={[styles.editCardstyle]}
          />
        </View>
        <View style={{ marginLeft: 24, marginRight: 24 }}>
          <ProfileScreenComponent
            text={AppStrings.addressTilte}
            icon={AppIcons.icArrowright}
            style={styles.cardstyle}
            onPress={() => navigation.navigate(AppRoutes.address)}
          />
        </View>
        <View style={{ marginLeft: 24, marginRight: 24, marginTop: 8 }}>
          <ProfileScreenComponent
            text={AppStrings.wishList}
            icon={AppIcons.icArrowright}
            style={styles.cardstyle}
          />
        </View>
        <View style={{ marginLeft: 24, marginRight: 24, marginTop: 8 }}>
          <ProfileScreenComponent
            text={AppStrings.payment}
            icon={AppIcons.icArrowright}
            style={styles.cardstyle}
          />
        </View>
        <View style={{ marginLeft: 24, marginRight: 24, marginTop: 8 }}>
          <ProfileScreenComponent
            text={AppStrings.help}
            icon={AppIcons.icArrowright}
            style={styles.cardstyle}
          />
        </View>
        <View style={{ marginLeft: 24, marginRight: 24, marginTop: 8 }}>
          <ProfileScreenComponent
            text={AppStrings.support}
            icon={AppIcons.icArrowright}
            style={styles.cardstyle}
          />
        </View>
        <View
          style={[
            styles.themecard,
            {
              backgroundColor:
                theme === 'light' ? AppColor.white : AppColor.lightDark,
            },
          ]}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text
              style={[
                styles.themeText,
                { color: theme === 'light' ? AppColor.dark : AppColor.white },
              ]}>
              Change Theme
            </Text>
            <Switch
              value={theme === 'dark'}
              onValueChange={toggleTheme}
              trackColor={{ false: 'grey', true: 'lightgrey' }}
              thumbColor={theme === 'dark' ? 'white' : 'black'}
            />
          </View>
        </View>
        <TouchableOpacity onPress={() => signOut()}>
          <View style={{ alignItems: 'center', marginTop: 35 }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Roboto-Bold',
                color: AppColor.red,
              }}>
              {AppStrings.signOut}
            </Text>
          </View>
        </TouchableOpacity>
        {error && <Text style={styles.errorText}>{error}</Text>}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  lableStyle: {
    paddingHorizontal: 15,
    fontSize: 16,
    fontFamily: 'Roboto-Light',
  },
  cardstyle: {
    paddingVertical: 15,
    shadowColor: AppColor.lightDark,
    elevation: 5,
    shadowOpacity: 0.5,
  },
  themecard: {
    borderRadius: 8,
    backgroundColor: AppColor.lightDark,
    elevation: 5,
    shadowOpacity: 0.5,
    shadowColor: AppColor.lightDark,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 8,
    paddingVertical: 15,
  },
  themeText: {
    paddingHorizontal: 15,
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    color: AppColor.white,
  },
  errorText: {
    color: AppColor.red,
    fontFamily: 'Roboto-Light',
    fontWeight: '400',
    paddingHorizontal: 25,
    marginTop: 5,
  },
  editCardstyle: {
    paddingVertical: 20,
    shadowColor: AppColor.lightDark,
    elevation: 5,
    shadowOpacity: 0.5,
  },
});
export default ProfileScreen;
