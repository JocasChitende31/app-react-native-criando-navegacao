import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Information({ route }) {
    return (
        <View style={styels.container}>
            <Text style={styels.titleContainer}>Informações do Contacto ({route.params.lastName})</Text>
            <View style={styels.content}>
                <Text style={styels.textContent}>Nome: {route.params?.nome}</Text>
                <Text style={styels.textContent}>Telefone: {route.params?.telefone}</Text>
                <Text style={styels.textContent}>Endereço: {route.params?.endereco}</Text>
                <Text style={styels.textContent}>BI: {route.params?.bi}</Text>
                <Text style={styels.textContent}>Profissão: {route.params?.profissao}</Text>
                <Text style={styels.textContent}>Email: {route.params?.email}</Text>
            </View>
        </View>
    )
};
const styels = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        fontSize: 20
    },
    titleContainer: {
        top: 15,
        color: 'green',
        fontWeight: 'bold',
        textAlign: 'center'
        
    },
    content: {
        left: 10,
        top: 40
    },
    textContent:{
       marginBottom:15
    }
});