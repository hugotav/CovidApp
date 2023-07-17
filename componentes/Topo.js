import React from "react";
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native'; 

import topo from '../assets/pulmoes-imagem.png';

const largura = Dimensions.get('screen').width;
const altura = Dimensions.get('screen').height;

export default function Topo({ titulo }) {
    return <>
        <View style={estilos.design}>

            <Image source={topo} style={estilos.topo} />
            

        </View>
        
    </>
    
}

const estilos = StyleSheet.create ({
    design: {
        //paddingVertical: 0,
        //paddingHorizontal: 16,
        //flexDirection: "row",
        //alignItems: "center",
        //marginVertical: 24,
        //marginHorizontal: 16,
        //alignSelf: "center",
        //width: "100%",
        //height: "8%",
        //alignItems: "center",
        //flexDirection: 'column',
        //position: 'relative'
        
      },
    
    topo: {
        //marginHorizontal: 32,   
        //width: '45%',
        //height: '45%',
        //width: "100%",
        height: 58 / 248 * largura,
        resizeMode: "contain",
        marginTop: 10
    },

    titulo: {
        //width: "100%",
        alignItems: "center",
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
        marginHorizontal: 32,
    },


})