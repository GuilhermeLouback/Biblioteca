import React from 'react';
import { View , Text, TouchableOpacity, Image , StyleSheet} from 'react-native';

export default function Books(props) {

function filterDesc(desc){
        if(desc.lenght < 27){
           return desc; 
    }

    return `${desc.substring(0,22)}...`;
}


 return (
   <TouchableOpacity style = {styles.contairner} onPress ={props.onClick}>
        <Image
        source={props.img}
        style ={styles.bookImg}
        />
        <Text style ={styles.bookTxt}>
            {filterDesc(props.children)}
        </Text>
        <View opacity = {0.4}>
            <Text style ={styles.bookTxt}>{props.cost}</Text>
        </View>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    contairner:{
        paddingVertical:'2%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bookImg:{
        width:175,
        height: 175,
    },
    bookTxt:{
        fontSize: 16
    }
});