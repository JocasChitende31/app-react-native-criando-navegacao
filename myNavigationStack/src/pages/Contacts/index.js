import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Contacts({ navigation }) {
    return (
        <View >
            <View >
                <Text style={styles.titleContainer}>Bem-vindo aos Contactos</Text>
                <View style={styles.container}>
                    <Text style={styles.textNome}>Nome: Jeorgel Chitende
                    </Text>
                    <Text style={styles.textNumber}>Telefone: +244 933 728 898</Text>
                    <Text onPress={() => navigation.navigate('Information',
                        {
                            lastName: 'Sr. Chitende',
                            nome: 'Jeorgel Chitende',
                            telefone: '+244 933 728 098',
                            endereco: 'Urbanização Nova Vida',
                            bi: '006533351',
                            profissao: 'Programador FullStack',
                            email: 'joshtende03@test.co.ao',
                        }
                    )} style={styles.textDetalhes}>Ver Detalhes...</Text>

                </View>
            </View>

            <View>
                <View style={styles.container2}>
                    <Text style={styles.textNome}>Nome: Delfina Mucanda</Text>
                    <Text style={styles.textNumber}>Telefone: +244  926 164 696</Text>
                    <Text onPress={() => navigation.navigate('Information',
                        {
                            lastName: 'Sra. Mucanda',
                            nome: 'Delfina Mucanda',
                            telefone: '+244 926 164 696',
                            endereco: 'Cnetralidade do Mutundo',
                            profissao: 'professora',
                            bi: '009384683',
                            email: 'delfina12@test.co.ao',
                        }
                    )} style={styles.textDetalhes}>Ver Detalhes...</Text>
                </View>
            </View>
        </View>
    )

}

var styles = StyleSheet.create({

    container: {
       flex: 1
    },
    titleContainer: {
        top: 15,
        color: 'green',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textNome: {
        position: 'absolute',
        left: 10,
        top: 40
    },
    textNumber: {
        position: 'absolute',
        left: 10,
        top: 70
    },
    textDetalhes: {
        position: 'absolute',
        left: 13,
        top: 110,
        fontWeight: '500',
        color: 'blue'
    },
    container2: {
        marginTop: 110
    }

})