import React from 'react';
import { Image, StyleSheet, View, Dimensions, ScrollView, Text } from 'react-native'; 

import cii1 from '../assets/C-II-1.jpg';
import cii2 from '../assets/C-II-2.jpg';
import cii3 from '../assets/C-II-3.jpg';
import cii4 from '../assets/C-II-4.jpg';

const width = Dimensions.get('screen').width;

export default function CoradsII({route})
{
    return<>
        <ScrollView>

            <View style={estilos.design}>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1, height: 40, backgroundColor: "#239B56", marginBottom: 10}} />
                </View>
                <Text style={estilos.textoPagina}>A suspeita de COVID-19 é baixa, os achados tomográficos são compatíveis com outros processos infecciosos, como abscessos, broncopneumonia e infecção por micobacteriose.</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1, height: 4, backgroundColor: "#239B56", marginTop: 20, marginBottom: 20 }} />
                </View>
                <Image source={cii1} style={estilos.foto}/>
                <Text style={estilos.textoPagina}>Figura 1 - Extensa área de consolidação, com broncogramas e áreas de árvore em brotamento, espessamento brônquico e micronódulos.</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1, height: 4, backgroundColor: "#239B56", marginTop: 20, marginBottom: 20 }} />
                </View>
                <Image source={cii2} style={estilos.foto}/>
                <Text style={estilos.textoPagina}>Figura 2 - Extensa área de consolidação, com broncogramas e áreas de árvore em brotamento, espessamento brônquico e micronódulos.</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1, height: 4, backgroundColor: "#239B56", marginTop: 20, marginBottom: 20  }} />
                </View>
                <Image source={cii3} style={estilos.foto}/>
                <Text style={estilos.textoPagina}>Figura 3 - Consolidação acometendo o ápice pulmonar, com bronquiectasias e cavitação.</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1, height: 4, backgroundColor: "#239B56", marginTop: 20, marginBottom: 20  }} />
                </View>
                <Image source={cii4} style={estilos.foto}/>
                <Text style={estilos.textoPagina}>Figura 4 - Extensa área de consolidação, com broncogramas e áreas de árvore em brotamento, espessamento brônquico e micronódulos.</Text>

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
        width: "100%",
        height: 378 / 568 * width,
        // resizeMode: "contain",
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 20,
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