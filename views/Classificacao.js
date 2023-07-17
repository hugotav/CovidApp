import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

import Topo from '../componentes/Topo';

const largura = Dimensions.get('screen').width;
const altura = Dimensions.get('screen').height;

export default function Classificação({navigation})
{
    return<> 

        <View style={estilos.design}>
            <Topo />
            <Text style = {estilos.descricao}>Selecione a classificação CO-RADS:</Text>
            <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Corads-1',{})}>
                <Text style={estilos.textoBotao}>CORADS 1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Corads-2',{})}>
                <Text style={estilos.textoBotao}>CORADS 2</Text>
            </TouchableOpacity>

            <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Corads-3',{})}>
                <Text style={estilos.textoBotao}>CORADS 3</Text>
            </TouchableOpacity>

            <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Corads-4',{})}>
                <Text style={estilos.textoBotao}>CORADS 4</Text>
            </TouchableOpacity>

            <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Corads-5',{})}>
                <Text style={estilos.textoBotao}>CORADS 5</Text>
            </TouchableOpacity>

    </View>
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
        //flexDirection: 'column',
        alignItems: 'center',
        //position: 'relative',
      },
      botao: {
        //marginTop: 2,
        backgroundColor: "#239B56",
        paddingVertical: 16,
        //paddingHorizontal: 8,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 6,
        //flexDirection: "row",
        //width: '100%',
        width: "80%",
        height: 38 / 228 * largura,
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
    descricao: {
        color: "#000000",
        fontSize: 18,
        lineHeight: 26, 
        textAlign: "justify",
        paddingBottom: 10, 
    },

    })