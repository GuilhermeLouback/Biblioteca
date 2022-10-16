import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Books from '../Books';

export default function Footer() {
 return (
   <View>
       <Text style={styles.title}>VOCÊ TAMBEM PODE GOSTAR</Text>
       <View style={{flexDirection: 'row'}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{marginHorizontal: 10}}>
                <Books img={require('../../assets/1.jpg')} cost="RESERVAR">
                Pense em Python   
                </Books>
            </View>
            <View style={{marginHorizontal: 10}}>
                <Books img={require('../../assets/3.jpg')} cost="RESERVAR">
                JavaScript 
                </Books>
            </View>
            <View style={{marginHorizontal: 10}}>
                <Books img={require('../../assets/5.jpg')} cost="RESERVAR">
                Lógica de programacao e Algoritimos com JavaScript   
                </Books>
            </View>
            <View style={{marginHorizontal: 10}}>
                <Books img={require('../../assets/6.jpg')} cost="RESERVAR">
                JavaScript - Alto Desempenho   
                </Books>
            </View>
            <View style={{marginHorizontal: 10}}>
                <Books img={require('../../assets/2.jpg')} cost="RESERVAR">
                    Python Fluente
                </Books>
            </View>
            <View style={{marginHorizontal: 10}}>
                <Books img={require('../../assets/4.jpg')} cost="RESERVAR">
                Programacao em JavaScript    
                </Books>
            </View>
        </ScrollView> 
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%',
    }
})