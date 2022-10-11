import React from 'react';
import { View, Text , StyleSheet, ScrollView, Image} from 'react-native';

export default function Detail() {
 return (
   <View style ={styles.container}>
        <View style ={styles.header}>
            <Image
            source={require('../../assets/cabecalho.jpg')}
            style = {styles.image}
            />
        </View>
   </View>
  );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        width: '100%',
        backgroundColor: '#000'
    }
})