import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import AppColor from '../../../theme/AppColor';

const ProfileScreenComponent = props => {
  const {
    text,
    title,
    icon,
    date,
    editText,
    style,
    lableStyle,
    onPress,
    lineNumber,
    editTextStyle,
    viewStyle,
    iconStyle,
    disabled,
  } = props;
  const Theme = useSelector(state => state.themeReducer);
  return (
    <View style={[styles.container, style && {...style}]}>
      {title && <Text style={styles.txtStyle}>{title}</Text>}

      <View style={[styles.viewStyle, viewStyle && {...viewStyle}]}>
        {text && (
          <Text
            numberOfLines={lineNumber}
            style={[styles.txtStyle, lableStyle && {...lableStyle}]}>
            {text}
          </Text>
        )}
        <View style={{right: 4}}>
          <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={styles.txtStyle}>
            {editText && (
              <Text
                style={[styles.editClick, editTextStyle && {...editTextStyle}]}>
                {editText}
              </Text>
            )}
            {icon && (
              <props.icon
                style={[styles.iconStyle, iconStyle && {...iconStyle}]}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {date && (
          <Text style={[styles.txtStyle, lableStyle && {...lableStyle}]}>
            {date}
          </Text>
        )}
      </View>
    </View>
  );
};

export default ProfileScreenComponent;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: AppColor.lightDark,
    elevation: 5,
    shadowOpacity: 0.5,
    shadowColor: AppColor.lightDark,
  },
  txtStyle: {
    fontSize: 16,
    color: AppColor.white,
    fontFamily: 'Roboto-Bold',
    paddingHorizontal: 16,
    marginTop: 7,
  },
  editClick: {
    color: AppColor.primary,
    marginLeft: 50,
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
  },
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconStyle:{
    paddingHorizontal:24
  }
});
