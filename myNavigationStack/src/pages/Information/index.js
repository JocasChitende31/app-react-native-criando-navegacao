import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Information(){
    return (
        <View style={styels.container}>
            <Text style={styels.textContainer}>Bem-vindo as Informações</Text>
        </View>
    )
};
const styels = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20
    },
    textContainer:{
        color: 'green',
        fontSize: 20
    }
});