import 'react-native-gesture-handler';
import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function Information(){
   return(
    <View style={styels.container}>
    <Text style={styels.textContainer}>Bem-vindos as Informações</Text>
</View>
   )
}

const styels = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        bottom: 5
    },
    textContainer: {
        top: 12,
        color: 'green',
        fontWeight: 'bold',
        fontSize: 14
    }
});