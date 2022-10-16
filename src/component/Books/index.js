import React from 'react';
import { View , Text, TouchableOpacity, Image , StyleSheet} from 'react-native';

export default function Books(props) {

function filterDesc(desc){
        if(desc.lenght < 27){
           return desc; 
    }

    return `${desc.substring(0,23)}...`;
}


 return (
   <TouchableOpacity style = {styles.container} onPress ={props.onClick}>
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
    container:{
        paddingVertical:'2%',
        alignItems: "center",
        justifyContent: "center"
    },
    bookImg:{
        width:170,
        height: 170
    },
    bookTxt:{
        fontSize: 16
    }
});