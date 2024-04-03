import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
  Button,
} from 'react-native';
import React, {useEffect} from 'react';
import CardComponent from '../../components/CardComponent';
import AppColor from '../../theme/AppColor';
import AppIcons from '../../constants/AppIcon';
import AppStrings from '../../constants/AppString';
import {useNavigation} from '@react-navigation/native';
import {AppRoutes} from '../../routes/AppRoutes';
import {useDispatch, useSelector} from 'react-redux';
import {ChangeThemeAction} from '../../reduxServices/action/ChangeThemeAction';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const Theme = useSelector(state => state.themeReducer);
  const dispatch = useDispatch();
  console.log(Theme);

  const theme = Theme.theme === 'dark' ? 'light' : 'dark';
  const toggleTheme = () => {
    dispatch(ChangeThemeAction(theme));
  };
  useEffect(() => {}, [Theme]);

  const signOut=()=>{
    
  }
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
        contentContainerStyle={{paddingBottom: 20}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 140,
          }}>
          <AppIcons.icProfile />
        </View>
        <View style={{margin: 24}}>
          <CardComponent
            title={AppStrings.GilbertJones}
            text={AppStrings.Glbertgmail}
            editText={'Edit'}
            date={AppStrings.date}
            lableStyle={styles.lableStyle}
            style={[styles.cardstyle]}
          />
        </View>
        <View style={{marginLeft: 24, marginRight: 24}}>
          <CardComponent
            text={AppStrings.addressTilte}
            icon={AppIcons.icArrowright}
            style={styles.cardstyle}
            onPress={() => navigation.navigate(AppRoutes.address)}
          />
        </View>
        <View style={{marginLeft: 24, marginRight: 24, marginTop: 8}}>
          <CardComponent
            text={AppStrings.wishList}
            icon={AppIcons.icArrowright}
            style={styles.cardstyle}
          />
        </View>
        <View style={{marginLeft: 24, marginRight: 24, marginTop: 8}}>
          <CardComponent
            text={AppStrings.payment}
            icon={AppIcons.icArrowright}
            style={styles.cardstyle}
          />
        </View>
        <View style={{marginLeft: 24, marginRight: 24, marginTop: 8}}>
          <CardComponent
            text={AppStrings.help}
            icon={AppIcons.icArrowright}
            style={styles.cardstyle}
          />
        </View>
        <View style={{marginLeft: 24, marginRight: 24, marginTop: 8}}>
          <CardComponent
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
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={[
                styles.themeText,
                {color: theme === 'light' ? AppColor.dark : AppColor.white},
              ]}>
              Change Theme
            </Text>
            <Switch
              value={theme === 'dark'}
              onValueChange={toggleTheme}
              trackColor={{false: 'grey', true: 'lightgrey'}} 
              thumbColor={theme === 'dark' ? 'white' : 'black'}
            />
          </View>
        </View>
        <TouchableOpacity>
          <View style={{alignItems: 'center', marginTop: 35}}>
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
});
export default ProfileScreen;
