import React from 'react';
import { Image, StyleSheet, View, Dimensions, ScrollView, Text } from 'react-native'; 

import civ2 from '../assets/C-IV-2.jpg';
import civ3 from '../assets/C-IV-3.jpg';

const width = Dimensions.get('screen').width;

export default function CoradsIV({route})
{
    return<>
        <ScrollView>

            <View style={estilos.design}>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1, height: 40, backgroundColor: "#239B56", marginBottom: 10}} />
                </View>
                <Text style={estilos.textoPagina}> As tomografias apresentam achados suspeitos, mas não tão típicos de COVID-19, ou são tomografias que tem sobreposição de achados sugestivos de COVID-19 com outras doenças pulmonares associadas.</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1, height: 4, backgroundColor: "#239B56", marginTop: 20, marginBottom: 20 }} />
                </View>
                <Image source={civ2} style={estilos.foto}/>
                <Text style={estilos.textoPagina}> Figura 1 - Alterações em vidro fosco bilateralmente, periféricas, associadas à lesões císticas subpleurais, sugestivas de doença inflamatório pulmonar crônica.</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1, height: 4, backgroundColor: "#239B56", marginTop: 20, marginBottom: 20 }} />
                </View>
                <Image source={civ3} style={estilos.foto}/>
                <Text style={estilos.textoPagina}> Figura 2 -  Imagem de vidro fosco unilateral acometendo pulmão esquerdo.</Text>
                

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