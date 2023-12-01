import React, { Component } from 'react'
import { View, TextInput } from "react-native";
const TextComponents = props => {
    const { placeholder, style, obscure, onChangeText, onBlur, value, keyboardType,secureTextEntry,icon } = props;
    return (
        <View>
            <TextInput
                placeholder={placeholder}
                style={style}
                obscure={obscure}
                onChangeText={onChangeText}
                onBlur={onBlur}
                value={value}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                
            />
        </View>

    )
}
export default TextComponents;

