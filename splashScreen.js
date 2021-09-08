import React,{useEffect} from 'react'
import { View,Text,StatusBar,Dimensions} from 'react-native'
const width = Dimensions.get('window').width;
import {color} from "/home/naveen/FoodCart/imp.js";
export default function splash({navigation}){
    useEffect(()=>{
        setTimeout(
            ()=>navigation.navigate('App'),200
        )
        
    },[]
    )

    return (
        <View style={{backgroundColor:color,flex:1,alignContent:'center',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
            <StatusBar backgroundColor={color}/>
            
            <Text style={{color:'#fff',fontSize:60,fontFamily:'Rundkursiv',width:width,textAlign:'center'}} >
            FoodCart
            </Text>

            
        </View>
    )
}
    