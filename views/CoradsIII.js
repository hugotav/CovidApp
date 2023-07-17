import React from 'react';
import { Image, StyleSheet, View, Dimensions, ScrollView, Text } from 'react-native'; 

import coradsI from '../assets/pulmoes-imagem.png';
import Topo from '../componentes/Topo';

import ciii1 from '../assets/C-III-1.jpg';
import ciii2 from '../assets/C-III-2.jpg';
import ciii3 from '../assets/C-III-3.jpg';
import ciii4 from '../assets/C-III-4.jpg';

const width = Dimensions.get('screen').width;

export default function CoradsIII({route})
{
    return<>
        <ScrollView>

            <View style={estilos.design}>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1, height: 40, backgroundColor: "#239B56", marginBottom: 10}} />
                </View>
                <Image source={ciii1} style={estilos.foto}/>
                <Text style={estilos.textoPagina}>Figura 1 - Área de consolidação isolada, unilateral, com vidro fosco de permeio e espessamento brônquico.</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1, height: 4, backgroundColor: "#239B56", marginTop: 20, marginBottom: 20 }} />
                </View>
                <Image source={ciii2} style={estilos.foto}/>
                <Text style={estilos.textoPagina}>Figura 2 - Área de consolidação isolada, unilateral, com vidro fosco de permeio e espessamento brônquico.</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1, height: 4, backgroundColor: "#239B56", marginTop: 20, marginBottom: 20 }} />
                </View>
                <Image source={ciii3} style={estilos.foto}/>
                <Text style={estilos.textoPagina}>Figura 3 - alterações indicando infecção, consolidações e vidro fosco acometendo um lobo pulmonar, difícil confirmar que não tem acometimento por COVID-19 associado.</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1, height: 4, backgroundColor: "#239B56", marginTop: 20, marginBottom: 20 }} />
                </View>
                <Image source={ciii4} style={estilos.foto}/>
                <Text style={estilos.textoPagina}>Figura 4 - Consolidação peribroncovascular unilateral, sem opacidades em vidro fosco de permeio.</Text>
                

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