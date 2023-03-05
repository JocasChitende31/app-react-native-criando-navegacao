import 'react-native-gesture-handler';

import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function Contacts({navigation}){
    return(
            <View style={styles.container}>
                <Text style={styles.textContainer}>Bem-vindo aos Contactos</Text>
                <Text style={styles.textNome}>Jeorgel Chitende</Text>
                <Text style={styles.textDetalhes} onPress={()=>navigation.navigate('Information')}>Information...</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    textContainer: {
        top: 10,
        color: 'green',
        fontWeight: 'bold'
    },
    textNome: {
        flex: 1,
        position: 'absolute',
        left: 10,
        top: 50
    },
    textDetalhes: {
        flex: 1,
        position: 'absolute',
        left: 13,
        top: 80,
        fontWeight: '500'
    }

})