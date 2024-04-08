import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import AppColor from '../theme/AppColor';
import AppImages from '../constants/AppImages';
import {useNavigation} from '@react-navigation/native';
import {AppRoutes} from '../routes/AppRoutes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppStorage} from '../auth/storage/AppStorage';
import LoaderComponent from '../components/LoaderComponent';

const SplashScreen = () => {
  const navigation = useNavigation();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    ScreenNavigation();
  }, [navigation]);

  const ScreenNavigation = async () => {
    try {
      const res = await AsyncStorage.getItem(AppStorage.user);
      console.log('res: ', res);

      if (res !== null) {
        setLoader(true);
        navigation.navigate(AppRoutes.bottomTabs);
      } else {
        const timer = setTimeout(() => {
          navigation.navigate(AppRoutes.signIn);
        }, 1000);
        return () => clearTimeout(timer);
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: AppColor.primary,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image source={AppImages.imgClot} />
      <View>
        <LoaderComponent
          isLoading={loader}
          color={AppColor.primary}
          size={45}
        />
      </View>
    </View>
  );
};
export default SplashScreen;
