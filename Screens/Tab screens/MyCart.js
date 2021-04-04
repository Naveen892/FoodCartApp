import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, FlatList, ImageBackground, StyleSheet, Alert, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import OneCard from '/home/naveen/FoodCart/Screens/OneCard.js';

const columns = 2;
function MyCart({ navigation }) {
    const [data, setData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    // const data=[
    //     {image:'https://freepngimg.com/thumb/potato/10-potato-png-images-pictures-download-thumb.png',type:'Potato',rating:4,price:20,grade:'A'},
    //     {image:'https://freepngimg.com/thumb/potato/10-potato-png-images-pictures-download-thumb.png',type:'Onion',rating:3,price:24,grade:'B'},
    //     {image:'https://freepngimg.com/thumb/potato/10-potato-png-images-pictures-download-thumb.png',type:'type3',rating:0,price:20,grade:'C'},
    //     {image:'https://freepngimg.com/thumb/potato/10-potato-png-images-pictures-download-thumb.png',type:'type4',rating:4,price:10,grade:'A'},
    //     {image:'https://freepngimg.com/thumb/potato/10-potato-png-images-pictures-download-thumb.png',type:'type5',rating:4,price:20,grade:'B'},
    //     {image:'https://freepngimg.com/thumb/potato/10-potato-png-images-pictures-download-thumb.png',type:'type1',rating:4,price:20,grade:'B'},
    //     {image:'https://freepngimg.com/thumb/potato/10-potato-png-images-pictures-download-thumb.png',type:'type2',rating:5,price:90,grade:'A'},
    //     {image:'https://freepngimg.com/thumb/potato/10-potato-png-images-pictures-download-thumb.png',type:'type6',rating:4,price:25,grade:'C'},
    // ];
    function getData() {
        {
            fetch('http://10.150.42.223:8000/api/products/', {
                method: "GET"
            })
                .then((response) => response.json())
                .then(json => setData(json))
                .catch(error => console.log('error'))
        }
    }
    useEffect(() => getData() , []);

    function onRefresh() {
        setRefreshing(true);
        
        getData();
        setTimeout(()=>{setRefreshing(false);},500)
        
    }

    return (
        <View>
            <StatusBar backgroundColor="#00af91" />
            <FlatList
                key={(item) => '' + item.id}
                data={data}
                renderItem={({ item }) => OneCard(item, { navigation })}
                keyExtractor={(item) => '' + item.id}
                refreshControl={<RefreshControl
                    colors={["#00af91", "#689F38"]}
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />}
            />

        </View>
    )
}
export default MyCart;
const styles = StyleSheet.create({
    back: {
        width: "100%",
        height: "100%"
    }
})