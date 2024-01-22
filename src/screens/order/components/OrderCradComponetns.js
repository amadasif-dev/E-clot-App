import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppIcons from '../../../constants/AppIcon';
import AppColor from '../../../theme/AppColor';

const OrderCradComponetns = props => {
  const {leadingIcon, title, subTitle, trailingIcon} = props;
  return (
    <View style={styles.container}>
    <View style={styles.body}>
      {leadingIcon && <props.leadingIcon />}
      <View style={{ flex: 1, justifyContent: 'flex-start', paddingHorizontal: 19 }}>
        {title && <Text style={{ color: AppColor.white }}>{title}</Text>}
      </View>
      <View style={styles.trailingIconstyle}>{trailingIcon && <props.trailingIcon />}</View>
    </View>
    <View style={{ paddingHorizontal: 64 }}>
      {subTitle && <Text>{subTitle}</Text>}
    </View>
  </View>
  
  );
};

export default OrderCradComponetns;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColor.lightDark,
    borderRadius: 8,
    paddingVertical: 15,
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  trailingIconstyle:{
    marginLeft:24
  
  },
});
