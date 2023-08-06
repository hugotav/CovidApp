import React from 'react';
import { Image, StyleSheet, View, Dimensions, ScrollView, Text } from 'react-native'; 

import coradsI from '../assets/pulmoes-imagem.png';
import Topo from '../componentes/Topo';

const width = Dimensions.get('screen').width;

export default function Sobre({route})
{
    return<>
        <ScrollView>

            <View style={estilos.design}>

                <Text style={estilos.textoPagina}>O CovidApp é um aplicativo desenvolvido como produto de educação em saúde para dissertação do Programa de Mestrado em Saúde na Amazônia do Núcleo de Medicina Tropical da Universidade Federal do Pará no ano de 2023. {'\n'}Esse aplicativo compõe o atlas radiológico de lesões pulmonares e sua classificação CORADS com o intuito de difundir conhecimento e promover educação continuada em saúde. {'\n'}Para dúvidas ou sugestões, entrar em contato com a autora pelo e-mail marcelacalves95@gmail.com</Text>

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