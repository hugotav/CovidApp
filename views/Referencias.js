import React from 'react';
import { Image, StyleSheet, View, Dimensions, ScrollView, Text } from 'react-native'; 

import coradsI from '../assets/pulmoes-imagem.png';
import Topo from '../componentes/Topo';

const width = Dimensions.get('screen').width;

export default function Referencias({route})
{
    return<>
        <ScrollView>

            <View style={estilos.design}>

                <Text style={estilos.textoPagina}>1. PROKOP, M.; EVERDINGEN, V.R.; et al. CO-RADS: A Categorical CT Assessment Scheme for Patients Suspected of Having COVID-19—Definition and Evaluation. v. 296, n. 2, p. E97–E104, 2020. Disponível em: https://pubmed.ncbi.nlm.nih.gov/32339082/ 
                {'\n'}{'\n'}2. The Radiology Assistant : COVID-19 CO-RADS classification. Radiologyassistant.nl. Disponível em: https://radiologyassistant.nl/chest/covid-19/corads-classification
                {'\n'}{'\n'}3. PENHA, D.; PINTO, E.; MATOS, F.B.; et al. CO-RADS: Coronavirus Classification Review. v. 11, p. 9–9, 2021. Disponível em: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7981938/
                {'\n'}{'\n'}4. FONSECA, E. K. U. N. et al. Evaluation of the RSNA and CORADS classifications for COVID-19 on chest computed tomography in the Brazilian population. Clinics (Sao Paulo, Brazil), v. 76, p. e2476, 2021.
                {'\n'}{'\n'}5. HIMOTO, Y. et al. Diagnostic performance of chest CT to differentiate COVID-19 pneumonia in non-high-epidemic area in Japan. Japanese Journal of Radiology, v. 38, n. 5, p. 400–406, 30 mar. 2020.
                {'\n'}{'\n'}6. WALLER, J. V. et al. Diagnostic Tools for Coronavirus Disease (COVID-19): Comparing CT and RT-PCR Viral Nucleic Acid Testing. American Journal of Roentgenology, v. 215, n. 4, p. 834–838, 2020.
                {'\n'}{'\n'}7. UMAKANTHAN, S. et al. Origin, transmission and diagnosis of COVID-19. Postgrad Med J, v. 96, 2020.
                {'\n'}{'\n'}8. SHARMA, A.; AHMAD FAROUK, I.; LAL, S. K. COVID-19: A Review on the Novel Coronavirus Disease Evolution, Transmission, Detection, Control and Prevention. Viruses, v. 13, n. 2, p. 202, 29 2021.
                {'\n'}{'\n'}9. SCHALEKAMP, S. et al. Chest CT in the Emergency Department for Diagnosis of COVID-19 Pneumonia: Dutch Experience. Radiology, v. 298, n. 2, p. E98–E106, 2021.
                {'\n'}{'\n'}10. ÖZEL, M.; ASLAN, A.; ARAÇ, S. Use of the COVID-19 Reporting and Data System (CO-RADS) classification and chest computed tomography involvement score (CT-IS) in COVID-19 pneumonia. La radiologia medica, v. 126, n. 5, p. 679–687, 2021.
                {'\n'}{'\n'}11. OJHA, V. et al. CT in coronavirus disease 2019 (COVID-19): a systematic review of chest CT findings in 4410 adult patients. European Radiology, v. 30, n. 11, p. 6129– 6138, 2020.
                {'\n'}{'\n'}12. LONG, B. et al. Clinical update on COVID-19 for the emergency clinician: Presentation and evaluation. The American Journal of Emergency Medicine, v. 54, p. 46–57, abr. 2022.
                {'\n'}{'\n'}13. KNIEP, I. et al. COVID-19 lungs in post-mortem computed tomography. Rechtsmedizin, v. 31, n. 2, p. 145–147, 15 fev. 2021.
                {'\n'}{'\n'}14. KASSEM, M. N. E.; MASALLAT, D. T. Clinical Application of Chest Computed Tomography (CT) in Detection and Characterization of Coronavirus (Covid-19) Pneumonia in Adults. Journal of Digital Imaging, v. 34, n. 2, p. 273–283, 9 fev. 2021.
                {'\n'}{'\n'}15. KARIMIAN, M.; AZAMI, M. Chest computed tomography scan findings of coronavirus disease 2019 (COVID-19) patients: a comprehensive systematic review and meta-analysis. Polish Journal of Radiology, v. 86, n. 1, p. 31–49, 2021.
                {'\n'}{'\n'}16. ISLAM, N. et al. Thoracic imaging tests for the diagnosis of COVID-19. Cochrane Database of Systematic Reviews, v. 2021, n. 3, 16 mar. 2021.
                {'\n'}{'\n'}17. GU, Q. et al. A retrospective study of the initial chest CT imaging findings in 50 COVID-19 patients stratified by gender and age. Journal of X-Ray Science and Technology, v. 28, n. 5, p. 875–884, 19 set. 2020.
                {'\n'}{'\n'}18. GOYAL, N. et al. Computed Tomography Features of Coronavirus Disease 2019 (COVID-19). Journal of Thoracic Imaging, v. Publish Ahead of Print, 15 maio 2020.
                {'\n'}{'\n'}19. DE SMET, K. et al. Diagnostic Performance of Chest CT for SARS-CoV-2 Infection in Individuals with or without COVID-19 Symptoms. Radiology, v. 298, n. 1, p. 30–37, 2021.
                {'\n'}{'\n'}20. CAROTTI, M. et al. Chest CT features of coronavirus disease 2019 (COVID-19) pneumonia: key points for radiologists. La radiologia medica, v. 125, n. 7, p. 636–646, 2020.
                </Text>


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
    textoPagina: {
        color: "#000000",
        fontSize: 18,
        lineHeight: 26, 
        marginHorizontal: 11,
    },
})