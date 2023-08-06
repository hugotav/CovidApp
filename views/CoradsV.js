import React from 'react';
import { Image, StyleSheet, View, Dimensions, ScrollView, Text } from 'react-native'; 

import coradsI from '../assets/pulmoes-imagem.png';
import Topo from '../componentes/Topo';

import cv1 from '../assets/C-V-1.jpg';
import cv2 from '../assets/C-V-2.jpg';
import cv3 from '../assets/C-V-3.jpg';
import cv4 from '../assets/C-V-4.jpg';
import cv5 from '../assets/C-V-5.jpg';
import cv6 from '../assets/C-V-5.jpg';
import cv7 from '../assets/C-V-5.jpg';
import cv8 from '../assets/C-V-5.jpg';

import { Video } from 'expo-av';

const width = Dimensions.get('screen').width;

export default function CoradsV({route}){
    const secondVideo = React.useRef(null);
    const [statusSecondVideo, setStatusSecondVideo] = React.useState({});
    
    return<>
        <ScrollView>

            <View style={estilos.design}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1, height: 40, backgroundColor: "#239B56", marginBottom: 10}} />
                </View>
                <Text style={estilos.textoPagina}>São tomografias que apresentam achados típicos da COVID-19, em que a suspeita é alta ou confirmada para a doença. São alterações com áreas de vidro fosco bilateral, de distribuição periférica, principalmente em lobos basais, associadas ou não a consolidações, espessamento vascular, pavimentação.</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1, height: 4, backgroundColor: "#239B56", marginTop: 20, marginBottom: 20 }} />
                </View>
                <Video
                    ref={secondVideo}
                    style={estilos.video}
                    source={require("../assets/VC-5.mp4")}
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                    onPlaybackStatusUpdate={setStatusSecondVideo}
                />
                <Text style={estilos.textoPagina}>Vídeo 1</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1, height: 4, backgroundColor: "#239B56", marginTop: 20, marginBottom: 20 }} />
                </View>
                <Image source={cv1} style={estilos.foto}/>
                <Text style={estilos.textoPagina}>Figura 1</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1, height: 4, backgroundColor: "#239B56", marginTop: 20, marginBottom: 20 }} />
                </View>
                <Image source={cv2} style={estilos.foto}/>
                <Text style={estilos.textoPagina}>Figura 2</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1, height: 4, backgroundColor: "#239B56", marginTop: 20, marginBottom: 20 }} />
                </View>
                <Image source={cv3} style={estilos.foto}/>
                <Text style={estilos.textoPagina}>Figura 3</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1, height: 4, backgroundColor: "#239B56", marginTop: 20, marginBottom: 20 }} />
                </View>
                <Image source={cv4} style={estilos.foto}/>
                <Text style={estilos.textoPagina}>Figura 4</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1, height: 4, backgroundColor: "#239B56", marginTop: 20, marginBottom: 20 }} />
                </View>
                <Image source={cv5} style={estilos.foto}/>
                <Text style={estilos.textoPagina}>Figura 5</Text>
                    
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