import React ,{useEffect,useState} from 'react';
import {View,Text,StatusBar,FlatList,ImageBackground,StyleSheet,BackHandler,RefreshControl} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Card from './card';
import { color } from "/home/naveen/FoodCart/imp.js";
const data =[
    
];
const columns=2;
function All({navigation}){
    function handleBackButtonClickX() {
      console.log('exit');

        BackHandler.exitApp();
        // navigation.goBack();
        return true;
      }
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",handleBackButtonClickX
      );
      useEffect(() => {
        
          

          const unsubscribe = navigation.addListener('focus', () => {
            onRefresh()
            console.log("use Effect")
            
      
          return () => backHandler.remove();
          });
      
          return unsubscribe;
        
      }, [navigation]);

      const [refreshing, setRefreshing] = useState(false);

      function onRefresh() {
        setRefreshing(true);

        // getData();
        setTimeout(() => { setRefreshing(false); }, 500)

    }
const data=[
    
    {image:'https://freepngimg.com/thumb/apple_fruit/24632-1-apple-fruit-transparent-thumb.png',type:'Apple'},
    {image:'https://freepngimg.com/thumb/onion/10-red-onion-png-image-thumb.png',type:'Onion'},
    {image:'https://freepngimg.com/thumb/berries/28565-4-berries-photo-thumb.png',type:'berries'},
    {image:'https://freepngimg.com/thumb/carrot/1-carrot-png-image-thumb.png',type:'Carrot '},
    {image:'https://freepngimg.com/thumb/grape/5-2-grape-png-thumb.png',type:'grapes'},
    {image:'https://freepngimg.com/thumb/broccoli/1-green-broccoli-png-image-thumb.png',type:'green broccoli'},
    {image:'https://freepngimg.com/thumb/cucumber/1-2-cucumber-png-hd-thumb.png',type:'cucumber'},
    {image:'https://freepngimg.com/thumb/kiwi/5-2-kiwi-transparent-thumb.png',type:'kiwi'},
    {image:'https://freepngimg.com/thumb/pomegranate/7-2-pomegranate-png-file-thumb.png',type:'pomegranate'},
    {image:'https://freepngimg.com/thumb/tomato/1-2-tomato-png-file-thumb.png',type:'tomato'},
    {image:'https://freepngimg.com/thumb/pepper/31-pepper-png-image-thumb.png',type:'pepper'},
    {image:'https://freepngimg.com/thumb/ladyfinger/42356-1-lady-finger-free-download-png-hd-thumb.png',type:'ladyfinger'},
    {image:'https://freepngimg.com/thumb/mango/7-2-mango-free-png-image-thumb.png',type:'Mango'},
    
    
    {image:'https://freepngimg.com/thumb/banana/5-2-banana-png-hd-thumb.png',type:'banana'},
    
    {image:'https://freepngimg.com/thumb/guava/8-2-guava-png-image-thumb.png',type:'guava'},
    
    {image:'https://freepngimg.com/thumb/potato/10-potato-png-images-pictures-download-thumb.png',type:'Potato'},
  ];
return(
<View>
<StatusBar backgroundColor={color}/>
    <FlatList 
    key={(item)=>''+item.type}
    numColumns={2}
    data={data}
    renderItem={({item})=>Card(item,{navigation})}
    keyExtractor={(item)=>''+item.type}
    refreshControl={<RefreshControl
      colors={[color, "#689F38"]}
      refreshing={refreshing}
      onRefresh={onRefresh}
  />}
    /> 

</View>
)
}
export default All;
const styles=StyleSheet.create({
    back:{
        width:"100%",
        height:"100%"
    }
})