import React from 'react';
import {Text, View, Button, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import marcela from '../assets/marcela-icon.png'

const width = Dimensions.get('screen').width;

export default function Home({navigation}) {

    return <>
        <View style={estilos.design}>
            <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Classificação',{})}>
                <Text style={estilos.textoBotao}>ACESSAR O ATLAS</Text>
            </TouchableOpacity>
            <Image source={marcela} style={estilos.foto}/>
        </View>
    </>
}

const estilos = StyleSheet.create({
    design: {
        height: "98%",
        backgroundColor: '#F6F6F6',
        marginVertical: 8,
        marginHorizontal: 16, 
        borderRadius: 6,
        paddingTop: 50,
        //borderWidth: 10,
        //borderColor: '#006400', 
        elevation: 12,
        alignItems: 'center'
      },
    foto: {
        width: "100%",
        height: "55%",
        resizeMode: "contain",
        alignSelf: "center",
        //marginTop: -40,
        //borderRadius: 6,
        
    },
    textoPagina: {
        color: "#000000",
        fontSize: 18,
        lineHeight: 26, 
        textAlign: "justify",
        marginHorizontal: 11,
    },
    botao: {
        //marginTop: 2,
        backgroundColor: "#239B56",
        paddingVertical: 16,
        //paddingHorizontal: 8,
        marginHorizontal: 10,
        // marginTop: 5,
        borderRadius: 40,
        //flexDirection: "row",
        //width: '100%',
        width: "50%",
        height: 38 / 228 * width,
        alignItems: "center",
        
    },
    textoBotao: {
        alignItems: "center",
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },
})