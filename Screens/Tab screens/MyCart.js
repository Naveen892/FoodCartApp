import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, FlatList, TouchableOpacity, StyleSheet, Dimensions, Alert, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import cartCard from '/home/naveen/FoodCart/Screens/cartCard';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
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
            fetch('http://10.4.13.1:8000/api/products/', {
                method: "GET"
            })
                .then((response) => response.json())
                .then((json) => console.log("right"))
                .catch(error => console.log(error))
        }
    }
    useEffect(() => getData(), []);

    function onRefresh() {
        setRefreshing(true);

        getData();
        setTimeout(() => { setRefreshing(false); }, 500)

    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{flex:0.93}}>
                <StatusBar backgroundColor="#00af91" />
                <FlatList
                    key={(item) => '' + item.id}
                    data={data}
                    renderItem={({ item }) => cartCard(item, { navigation })}
                    keyExtractor={(item) => '' + item.id}
                    refreshControl={<RefreshControl
                        colors={["#00af91", "#689F38"]}
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />}
                />

            </View>

            <View style={styles.btns}>
                <TouchableOpacity style={styles.btn1} activeOpacity={0.8}>
                    <Text style={{ fontSize: height/40, fontWeight: 'bold', color: '#fff' , marginStart: width / 20 }}>
                        BUY NOW
                </Text>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Text style={{ fontSize: height/40, fontWeight: 'bold', color: '#fff', marginEnd: width / 20  }}>
                        {'\u20B9'} 200
                    </Text>

                    </View>
                    <View style={{ alignItems: 'flex-end', marginEnd: width / 20 }}>
                        <Icon name='long-arrow-right' size={width / 10} color="#fff" />

                    </View>

                </TouchableOpacity>
            </View>

        </View>
    )
}
export default MyCart;
const styles = StyleSheet.create({
    back: {
        width: "100%",
        height: "100%"
    }, btn1: {
        width: width,
        height: height / 15,
        backgroundColor: '#00af91',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',

    },
    btns: {
        flex: 0.07,
        flexDirection: 'row',

    },
})