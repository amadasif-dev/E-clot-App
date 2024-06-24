import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform, StyleSheet} from 'react-native';
import {AppRoutes} from '../routes/AppRoutes';

import OrderScreen from '../screens/order/OrderScreen';
import ProfileScreen from '../screens/profileScreens/ProfileScreen';
import AppIcons from '../constants/AppIcon';
import StackNavigation from './StackNavigate';
import NotificationScreen from '../screens/notification/NotificationScreen';
import AppColor from '../theme/AppColor';
import {useSelector} from 'react-redux';
import HomePageScreen from '../screens/HomeScreen';

const Bottom = createBottomTabNavigator();

const BottomNavigation = () => {
  const Theme = useSelector(state => state.themeReducer);
  return (
    <Bottom.Navigator
      initialRouteName={AppRoutes.homepage}
      screenOptions={{
        activeTintColor: AppColor.dark,
        inactiveTintColor: AppColor.primary,
        tabBarActiveTintColor: AppColor.dark,
        tabBarInactiveTintColor:
          Theme.theme === 'light' ? AppColor.dark : AppColor.primary,
        tabBarStyle: [
          styles.tabBarStyle,
          {
            backgroundColor:
              Theme.theme === 'light' ? AppColor.dark : AppColor.white,
          },
        ],
        tabBarShowLabel: false,
      }}>
      <Bottom.Screen
        name={AppRoutes.homepage}
        component={HomePageScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <AppIcons.icHome
                style={{color: color}}
              />
            ) : (
              <AppIcons.icHomeActive style={{color: AppColor.primary}} />
            ),
        }}
      />
      <Bottom.Screen
        name={AppRoutes.notification}
        component={NotificationScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <AppIcons.icActiveNotification style={{color: color}} />
            ) : (
              <AppIcons.icNotificationbing
                style={{color: AppColor.primary}}
              />
            ),
        }}
      />
      <Bottom.Screen
        name={AppRoutes.order}
        component={OrderScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <AppIcons.icOrderActive style={{color: color}} />
            ) : (
              <AppIcons.icOrderNoActice style={{color: AppColor.primary}} />
            ),
        }}
      />
      <Bottom.Screen
        name={AppRoutes.profile}
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <AppIcons.icActiveProfileTab style={{color: color}} />
            ) : (
              <AppIcons.icProfileNoActive
                style={{color: AppColor.primary}}
              />
            ),
        }}
      />
    </Bottom.Navigator>
  );
};
const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: AppColor.dark,
    paddingTop: Platform.OS === 'android' ? 2 : 0,
    height: Platform.OS === 'android' ? 70 : 90,
    justifyContent: 'space-between',
  },
});
export default BottomNavigation;
