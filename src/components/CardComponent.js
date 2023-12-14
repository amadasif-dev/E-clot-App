import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppColor from '../theme/AppColor'
import AppStrings from '../constants/AppString'
import AppIcons from '../constants/AppIcon'

const CardComponent = props => {
    const { text, title, icon, date, editText, style, lableStyle, onPress, lineNumber, editTextStyle } = props
    return (
        <View style={[styles.container, style && { ...style }]}>
            {title && <Text style={styles.txtStyle}>{title}</Text>}
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                {text && <Text numberOfLines={lineNumber}

                    style={[styles.txtStyle,
                    lableStyle && { ...lableStyle }]}>{text}
                </Text>}
                <TouchableOpacity
                    onPress={onPress}
                    style={styles.txtStyle}
                >
                    {editText && <Text style={[styles.editClick, editTextStyle && { ...editTextStyle }]}>
                        {editText}</Text>}
                    {icon && <props.icon />}
                </TouchableOpacity>
            </View>
            <View>
                {date && <Text style={[styles.txtStyle,
                lableStyle && { ...lableStyle }]} >{date}</Text>}

            </View>
        </View>
    )
}

export default CardComponent

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
        fontFamily: "Roboto-Bold",
        paddingHorizontal: 16,
        marginTop: 8,
        alignItems:"center",
    },
    editClick: {
        color: AppColor.primary,
        marginRight: 12,
        fontFamily: "Roboto-Bold",
        fontSize: 16,
    }


})