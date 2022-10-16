import React from 'react';
import { View, Text , StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';

import SizeButton from '../../component/SizeButton';
import Button from '../../component/Button';
import Books from '../../component/Books';
import Footer from '../../component/Footer';

export default function Detail({navigation}) {
    

    navigation.setOptions({
            headerTitle: 'Detalhes'
    })


 return (
   <ScrollView style = {styles.Container}>
        <Image
        source = {require('../../assets/cabecalho.jpg')}
        style = { styles.image}
        resizeMode = "cover"
        />


        <View>
            <View>
                <Text style = {[styles.title]}>Nome Livro</Text>
            </View>
            <View>
                <Text style = {[styles.Subtitle]}>Estilo de Livro</Text>
            </View>


            <View>
                <View style = {[styles.typeBook]}>
                    <SizeButton bgColor = "#17181a" color = "#FFF">Capa Dura</SizeButton>
                    <SizeButton bgColor = "#17181a" color = "#FFF">E-Book</SizeButton>
                </View>
            </View>


            <View style = {styles.textContent}>
            <Text style = {styles.textTitle}>DETALHES</Text>
                <Text style = {styles.textContent}> Autor: Guilherme Louback  </Text>
                <Text style = {styles.textContent}> Ano: 2022 </Text>
                <Text style = {styles.textContent} > Páginas:  231231 </Text>
                <Text style = {styles.textContent}> Detalhes do Livro </Text>
                <Text style = {styles.textContent}>ddaksjdkJ;SD;asjkdja;sjdkasj;dAKLSJD;KLLWJ;JKJD;LJ;AJD;SJ;JDASjs;adjd</Text>
            </View>


        <Button/>


        <View style = {styles.line}/>

        <Footer/>
        

        </View>
   </ScrollView>
  );
}


const styles = StyleSheet.create({
    Container:{
        flex:1,
        width:'100%',
        backgroundColor:'#FFF'
    },
    image:{
        width:'100%'
    },
    title:{
        fontFamily: 'Anton_400Regular',
        fontSize:26,
        paddingHorizontal: '2%'
    },
    Subtitle:{
        fontFamily: 'Anton_400Regular',
        fontSize:19,
        paddingHorizontal: '30%',
        textAlign:'center'
    }, 
    textContent: {
        fontSize:16,
        lineHeight: 25,
        marginVertical: '2%', 
        paddingHorizontal: '2%'
    },
    textTitle:{
        fontSize: 20, 
        lineHeight: 25,
        alignItems: 'center',
        paddingHorizontal: '40%',
        fontFamily: 'Anton_400Regular'
    },
    line:{
        borderWidth: 1,
        borderBottomColor: '#DDD',
        marginVertical: '2%'
    }, 
    typeBook:{
        flexDirection:'row',
        alignItems: 'center',
        marginVertical: 15,
        marginHorizontal: 40
    }
});