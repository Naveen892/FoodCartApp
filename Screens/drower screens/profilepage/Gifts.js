import React ,{useEffect} from 'react';
import {View,Text,BackHandler} from 'react-native';
import {color} from "/home/naveen/FoodCart/imp.js";
export default function Gifts({navigation}){
    console.log('in gifts')
    function handleBackButtonClick() {
        console.log('back ');
        
            navigation.goBack();
            
            return true;
       
      }
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        handleBackButtonClick
      );
      useEffect(() => {
            
          return () => backHandler.remove();
        
      }, [navigation]);
    return(
        <View style={{flex:1,alignContent:'center',alignItems:'center',backgroundColor:'#fff',justifyContent:'center'}}>
            <Text style={{fontSize:30,color:color}}>
                You Have No Gifts
            </Text>
            <Text style={{fontSize:20,color:color}}>
                Till Now
            </Text>
        </View>
    )
} 