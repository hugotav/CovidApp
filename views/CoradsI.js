import React from 'react';
import { Image, StyleSheet, View, Dimensions, ScrollView, Text } from 'react-native'; 

import coradsI from '../assets/pulmoes-imagem.png';
import Topo from '../componentes/Topo';

import ci1 from '../assets/C-I-1.jpg';
import ci2 from '../assets/C-I-2.jpg';
import ci3 from '../assets/C-I-3.jpg';
import ci4 from '../assets/C-I-4.jpg';
import ci5 from '../assets/C-I-5.jpg';

import { Video } from 'expo-av';

const width = Dimensions.get('screen').width;

export default function CoradsI({route}){
    const secondVideo = React.useRef(null);
    const [statusSecondVideo, setStatusSecondVideo] = React.useState({});
    
    return<>
        <ScrollView>
            <View style={estilos.design}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1, height: 40, backgroundColor: "#239B56", marginBottom: 10}} />
                </View>
                <Text style={estilos.textoPagina}>Os achados tomográficos são compatíveis com tomografias normais ou com doenças não infecciosas, como derrame pleural por hipervolemia, insuficiência cardíaca, neoplasias, doença pulmonar obstrutiva crônica. Tais achados não têm relação com a COVID-19. {'\n'}Vale ressaltar que nos primeiros dias de infecção leve pelo coronavírus, a tomografia pode não apresentar alterações.</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1, height: 4, backgroundColor: "#239B56", marginTop: 20, marginBottom: 20 }} />
                </View>
                <Image source={ci1} style={estilos.foto}/>
                <Text style={estilos.textoPagina}>Figura 1 - Parênquima pulmonar sem alterações.</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1, height: 4, backgroundColor: "#239B56", marginTop: 20, marginBottom: 20 }} />
                </View>
                <Image source={ci2} style={estilos.foto}/>
                <Text style={estilos.textoPagina}>Figura 2 - Parênquima pulmonar sem alterações.</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1, height: 4, backgroundColor: "#239B56", marginTop: 20, marginBottom: 20 }} />
                </View>
                <Image source={ci3} style={estilos.foto}/>
                <Text style={estilos.textoPagina}>Figura 3 - Parênquima pulmonar sem alterações.</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1, height: 4, backgroundColor: "#239B56", marginTop: 20, marginBottom: 20 }} />
                </View>
                <Image source={ci4} style={estilos.foto}/>
                <Text style={estilos.textoPagina}>Figura 4 - Presença de cistos subpleurais notadamente na região posterior em pulmão esquerdo.</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1, height: 4, backgroundColor: "#239B56", marginTop: 20, marginBottom: 20 }} />
                </View>
                <Image source={ci5} style={estilos.foto}/>
                <Text style={estilos.textoPagina}>Figura 5 - Derrame pleural de pequeno volume em pulmão direito.</Text>
                
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
    video: {
        width: "100%",
        height: 260 / 260 * width,
    },
})