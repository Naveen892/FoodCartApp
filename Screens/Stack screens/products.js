import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, FlatList, ImageBackground, StyleSheet, Dimensions, RefreshControl, Alert, BackHandler } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBar from 'react-native-searchbar';
import OneCard from '/home/naveen/FoodCart/Screens/OneCard.js';
import { Badge } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { color } from '../../imp';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
var refx;
var searchBar2;
export default function products({ route, navigation }) {
    const { type, image } = route.params;
    // const [data, setData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [i, setI] = useState(0);
    const [bill, setBill] = useState(0);
    const data = [
        { id: 1, brand: 'ABC', description: 'Good', image: image, type: 'Potato', rating: 4, price: 20, grade: 'A' },
        { id: 2, brand: 'DEF', description: 'very Good', image: image, type: 'Onion', rating: 3, price: 24, grade: 'B' },
        { id: 3, brand: 'AX', description: 'nice', image: image, type: 'type3', rating: 0, price: 20, grade: 'C' },
        { id: 4, brand: 'AB', description: 'A1', image: image, type: 'type4', rating: 4, price: 10, grade: 'A' },
        { id: 5, brand: 'ABX', description: 'pretty', image: image, type: 'type5', rating: 4, price: 20, grade: 'B' },
        { id: 6, brand: 'ACD', description: 'Good', image: image, type: 'type1', rating: 4, price: 20, grade: 'B' },
        { id: 7, brand: 'AB', description: 'nice', image: image, type: 'type2', rating: 5, price: 90, grade: 'A' },
        { id: 8, brand: 'ABC', description: 'Good', image: image, type: 'type6', rating: 4, price: 25, grade: 'C' },
    ];
    console.log(type)
    function handleBackButtonClick() {
        console.log('back ');
        searchBar2.hide();

        

        navigation.goBack();

        return true;

    }
    const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        handleBackButtonClick
    );

    function getData() {
        {
            // const url ='http://10.150.38.43:8000/api/products/'
            // fetch(url, {
            //     method: "GET"
            // })
            //     .then((response) => response.json())
            //     .then(json => setData(json))
            //     .catch(error => console.log("error")
            //     )




            AsyncStorage.getItem('Add', (err, result) => {

                if (result !== null) {

                    console.log(JSON.parse(result).length)
                    setI(JSON.parse(result).length);
                }
                else {
                    setI(0);
                }


            })
        }
    }
    // function handleBackButtonClick() {
    //     // BackHandler.exitApp();
    //     navigation.goBack(null);
    //     return true;
    //   }
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            onRefresh();

            console.log("use Effect")
            refx.scrollToIndex({ index: 0,animated:true });
            return () => backHandler.remove();

        });

        return unsubscribe;
        // BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        // return () => {
        //   BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
        // };
    }, [navigation]);

    function onRefresh() {
        setRefreshing(true);

        getData();
        setTimeout(() => { setRefreshing(false); }, 500)

    }
    return (
        <View style={{ flex: 1 }}>

            <View style={{ height: height / 11, backgroundColor: color, flexDirection: 'row', alignItems: 'center', elevation: 10 }}>
                <SearchBar
                    allowFontScaling={false}
                    ref={(ref) => searchBar2 = ref}
                    heightAdjust={height / 65}
                />
                <Icon name='arrow-left' color='#fff' size={25} style={{ marginLeft: 30 }} onPress={() => { navigation.navigate('FoodCart'),refx.scrollToIndex({ index: 0 }); }} />

                <Text style={{ fontSize: 22, marginLeft: 20, color: '#fff', fontWeight: 'bold' }}>
                    {"" + type}
                </Text>
                <View style={{ flex: 1, justifyContent: 'flex-end', marginEnd: width / 15, flexDirection: 'row' }}>
                    <View style={{ marginEnd: width / 15 }} >
                        <Icon allowFontScaling={false} name='shopping-cart' color='#fff' size={width / 17} onPress={() => navigation.navigate('MyCart')} />
                        {i > 0 ?
                            <Badge value={i} status="error" containerStyle={styles.badgeStyle} onPress={() => navigation.navigate('MyCart')} />
                            :
                            <View onPress={() => navigation.navigate('MyCart')} ></View>
                        }

                    </View>
                    <View >
                        <Icon name='search' color='#fff' size={width / 17} onPress={() => searchBar2.show()} />
                    </View>

                </View>
            </View>
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor={color} />

                <FlatList
                    key={(item) => '' + item.id}
                    data={data}
                    ref={(ref) => refx = ref}
                    renderItem={({ item }) => OneCard(item, i, setI, type,  { navigation })}
                    keyExtractor={(item) => '' + item.id}
                    refreshControl={<RefreshControl
                        colors={[color, "#689F38"]}
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />}
                    getItemLayout={(data, index) => (
                        { length: width / 2, offset: (width / 2) * index, index }
                    )}
                />

            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    back: {
        width: "100%",
        height: "100%"
    },
    badgeStyle: {
        position: 'absolute',
        top: -10,
        right: -15,
        width: width / 15
    },
})