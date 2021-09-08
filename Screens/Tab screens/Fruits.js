import React,{useState} from 'react';
import {View,Text,StatusBar,FlatList,ImageBackground,StyleSheet,RefreshControl} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { color } from '../../imp';
import Card from './card';
const data =[
    
];
const columns=2;
function Fruit({navigation}){
    
const data=[
    {image:'https://freepngimg.com/thumb/mango/7-2-mango-free-png-image-thumb.png',type:'Mango'},
    {image:'https://freepngimg.com/thumb/apple_fruit/24632-1-apple-fruit-transparent-thumb.png',type:'Apple'},
    {image:'https://freepngimg.com/thumb/berries/28565-4-berries-photo-thumb.png',type:'berries'},
    {image:'https://freepngimg.com/thumb/banana/5-2-banana-png-hd-thumb.png',type:'banana'},
    {image:'https://freepngimg.com/thumb/grape/5-2-grape-png-thumb.png',type:'grape'},
    {image:'https://freepngimg.com/thumb/guava/8-2-guava-png-image-thumb.png',type:'guava'},
    {image:'https://freepngimg.com/thumb/kiwi/5-2-kiwi-transparent-thumb.png',type:'kiwi'},
    {image:'https://freepngimg.com/thumb/pomegranate/7-2-pomegranate-png-file-thumb.png',type:'pomegranate'},
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
export default Fruit;
const styles=StyleSheet.create({
    back:{
        width:"100%",
        height:"100%"
    }
})