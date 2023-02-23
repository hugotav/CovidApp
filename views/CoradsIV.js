import React from 'react';
import { Image, StyleSheet, View, Dimensions, ScrollView, Text } from 'react-native'; 

import coradsI from '../assets/pulmoes-imagem.png';
import Topo from '../componentes/Topo';

const width = Dimensions.get('screen').width;

export default function CoradsIV({route})
{
    return<>
        <ScrollView>

            <View style={estilos.design}>

                <Topo />
                
                <Image source={coradsI} style={estilos.foto}/>

                <Text style={estilos.textoPagina}>Xxxxxxxxxxxxxxxx
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</Text>

            </View>

        </ScrollView>
        
    </>    
}

const estilos = StyleSheet.create({
    design: {
        backgroundColor: '#F6F6F6',
        marginVertical: 8,
        marginHorizontal: 16, 
        borderRadius: 6,
        //borderWidth: 10,
        //borderColor: '#006400', 
        elevation: 12,
        alignItems: 'center'
      },
    foto: {
        width: "95%",
        height: 378 / 568 * width,
        resizeMode: "contain",
        alignSelf: "center",
        //borderRadius: 6,
        
    },
    textoPagina: {
        color: "#000000",
        fontSize: 18,
        lineHeight: 26, 
        textAlign: "justify",
        marginHorizontal: 11,
    },
})