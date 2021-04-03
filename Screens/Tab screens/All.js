import React from 'react';
import {View,Text,StatusBar,FlatList,ImageBackground,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Card from './card';
const data =[
    
];
const columns=2;
function All({navigation}){
   
const data=[
    {image:'https://freepngimg.com/thumb/potato/14-potato-png-images.png',type:'Potato'},
    {image:'https://freepngimg.com/thumb/potato/14-potato-png-images.png',type:'Onion'},
    {image:'https://freepngimg.com/thumb/potato/14-potato-png-images.png',type:'type3'},
    {image:'https://freepngimg.com/thumb/potato/14-potato-png-images.png',type:'type4'},
    {image:'https://freepngimg.com/thumb/potato/14-potato-png-images.png',type:'type5'},
    {image:'https://freepngimg.com/thumb/potato/14-potato-png-images.png',type:'type1'},
    {image:'https://freepngimg.com/thumb/potato/14-potato-png-images.png',type:'type2'},
    {image:'https://freepngimg.com/thumb/potato/14-potato-png-images.png',type:'type6'},
];
return(
<View>
<StatusBar backgroundColor="#00af91"/>
    <FlatList 
    key={(item)=>''+item.type}
    numColumns={2}
    data={data}
    renderItem={({item})=>Card(item,{navigation})}
    keyExtractor={(item)=>''+item.type}
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