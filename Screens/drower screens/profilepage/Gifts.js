import React from 'react';
import {View,Text} from 'react-native';
export default function Gifts(){
    return(
        <View style={{flex:1,alignContent:'center',alignItems:'center',backgroundColor:'#fff',justifyContent:'center'}}>
            <Text style={{fontSize:30,color:'#00af91'}}>
                You Have No Gifts
            </Text>
            <Text style={{fontSize:20,color:'#00af91'}}>
                Till Now
            </Text>
        </View>
    )
}