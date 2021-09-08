import React,{useState} from 'react';
import {View,Text,StatusBar,FlatList,StyleSheet,ImageBackground,RefreshControl} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {color} from "/home/naveen/FoodCart/imp.js";
import Card from './card';
const data =[
    
];
const columns=2;
function Veg({navigation}){
   
    const data=[
        {image:'https://freepngimg.com/thumb/potato/10-potato-png-images-pictures-download-thumb.png',type:'Potato'},
        {image:'https://freepngimg.com/thumb/onion/10-red-onion-png-image-thumb.png',type:'Onion'},
        {image:'https://freepngimg.com/thumb/carrot/1-carrot-png-image-thumb.png',type:'Carrot '},
        {image:'https://freepngimg.com/thumb/broccoli/1-green-broccoli-png-image-thumb.png',type:'green broccoli'},
        {image:'https://freepngimg.com/thumb/cucumber/1-2-cucumber-png-hd-thumb.png',type:'cucumber'},
        {image:'https://freepngimg.com/thumb/tomato/1-2-tomato-png-file-thumb.png',type:'tomato'},
        {image:'https://freepngimg.com/thumb/pepper/31-pepper-png-image-thumb.png',type:'pepper'},
        {image:'https://freepngimg.com/thumb/ladyfinger/42356-1-lady-finger-free-download-png-hd-thumb.png',type:'ladyfinger'},
    ];
    const [refreshing, setRefreshing] = useState(false);

      function onRefresh() {
        setRefreshing(true);

        // getData();
        setTimeout(() => { setRefreshing(false); }, 500)

    }
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
export default Veg;

const styles=StyleSheet.create({
    back:{
        width:"100%",
        height:"100%"
    }
})