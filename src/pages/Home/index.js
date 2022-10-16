import React from 'react';
import { View, Text , StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
import { useNavigation} from '@react-navigation/native'

import Books from '../../component/Books';


export default function Home() {

    const navigation = useNavigation();

 return (
   <View  style ={styles.Container}>
        <View style ={styles.header}>
            <Image
            source={require('../../assets/cabecalho.jpg')}
            style={styles.Image}
            />

            <View style = {styles.textContainer}>
                <Text style = {styles.text}>Livros</Text>
                <Text style = {[styles.text, {color: '#CECECF'}]}>-</Text>
                <Text style = {[styles.text, {color: '#CECECF'}]}>Generos</Text>
                 <TouchableOpacity style = {{position: 'absolute',right: 0, alignSelf: "center" }}>
                    <MaterialIcons
                    name ='filter-list'
                    size={24}
                    color = "#000"
                    />
                 </TouchableOpacity>
            </View>
        </View>


        <View style ={styles.line}/>
        
        
        <ScrollView>

            <Text style ={styles.text}> LANCAMENTOS </Text>

            <View style = {{flexDirection:'row', justifyContent: 'space-around' }}>
                <Books img={require('../../assets/1.jpg')} cost="RESERVAR" onClick= {() => navigation.navigate('Detail')}>
                    Pense em Python
                </Books>
                <Books img={require('../../assets/2.jpg')} cost="RESERVAR" onClick= {() => navigation.navigate('Detail')}>
                    Python Fluente 
                </Books>               
            </View>

            <View style = {{flexDirection:'row', justifyContent: 'space-around' }}>
                <Books img={require('../../assets/3.jpg')} cost="RESERVAR" onClick= {() => navigation.navigate('Detail')}>
                    JavaScript
                </Books>
                <Books img={require('../../assets/4.jpg')} cost="RESERVAR" onClick= {() => navigation.navigate('Detail')}>
                    Programacao em JavaScript 
                </Books>               
            </View>

            <View style = {{flexDirection:'row', justifyContent: 'space-around' }}>
                <Books img={require('../../assets/5.jpg')} cost="RESERVAR" onClick= {() => navigation.navigate('Detail')}>
                    Lógica de programacao e Algoritimos com JavaScript
                </Books>
                <Books img={require('../../assets/6.jpg')} cost="RESERVAR" onClick= {() => navigation.navigate('Detail')}>
                    JavaScript - Alto Desempenho 
                </Books>               
            </View>


        </ScrollView>

   </View>
  );
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        width:'100%',
        backgroundColor: '#FFF'
    },
    header:{
        marginBottom: 8
    },
    Image:{
        width: '100%'
    },
    textContainer:{
        flexDirection:'row',
        marginVertical: '5%',
        marginHorizontal:'5%'
    },
    text:{
        fontFamily: 'Anton_400Regular',
        fontSize:26,
        marginHorizontal:'2%'
    },
    line:{
        borderBottomColor:'#D8d8d8',
        borderBottomWidth: 2,
    }

});