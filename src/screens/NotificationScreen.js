import { View, Text } from 'react-native'
import React from 'react'
import AppColor from '../theme/AppColor'

const NotificationScreen = () => {
  return (
    <View style={{flex:1,backgroundColor:AppColor.dark}}>
      <Text style={{color:"#000"}}>NotificationScreen</Text>
    </View>
  )
}

export default NotificationScreen