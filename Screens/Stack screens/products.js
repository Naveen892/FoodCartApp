import React from 'react';
import { View, Text, StatusBar, FlatList, ImageBackground, StyleSheet,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBar from 'react-native-searchbar';
import OneCard from '/home/naveen/FoodCart/Screens/OneCard.js';
import { useState } from 'react/cjs/react.production.min';
const height=Dimensions.get('window').height;
const width =Dimensions.get('window').width;
const columns = 2;
function products({ navigation }) {

    const data = [
        { image: 'https://freepngimg.com/thumb/potato/10-potato-png-images-pictures-download-thumb.png', type: 'Potato', rating: 4, price: 20, grade: 'A' },
        { image: 'https://freepngimg.com/thumb/potato/10-potato-png-images-pictures-download-thumb.png', type: 'Onion', rating: 3, price: 24, grade: 'B' },
        { image: 'https://freepngimg.com/thumb/potato/10-potato-png-images-pictures-download-thumb.png', type: 'type3', rating: 0, price: 20, grade: 'C' },
        { image: 'https://freepngimg.com/thumb/potato/10-potato-png-images-pictures-download-thumb.png', type: 'type4', rating: 4, price: 10, grade: 'A' },
        { image: 'https://freepngimg.com/thumb/potato/10-potato-png-images-pictures-download-thumb.png', type: 'type5', rating: 4, price: 20, grade: 'B' },
        { image: 'https://freepngimg.com/thumb/potato/10-potato-png-images-pictures-download-thumb.png', type: 'type1', rating: 4, price: 20, grade: 'B' },
        { image: 'https://freepngimg.com/thumb/potato/10-potato-png-images-pictures-download-thumb.png', type: 'type2', rating: 5, price: 90, grade: 'A' },
        { image: 'https://freepngimg.com/thumb/potato/10-potato-png-images-pictures-download-thumb.png', type: 'type6', rating: 4, price: 25, grade: 'C' },
    ];
    return (
        <View style={{ flex: 1 }}>
            
            <View style={{ height:height/11, backgroundColor: '#00af91', flexDirection: 'row', alignItems: 'center',elevation:10 }}>
            <SearchBar
                
                ref={(ref) => searchBar2 = ref}
                heightAdjust={height/65}

            />
                <Icon name='arrow-left' color='#fff' size={25} style={{ marginLeft: 30 }} onPress={() => {navigation.navigate('FoodCart')}} />

                <Text style={{ fontSize: 22, marginLeft: 20, color: '#fff', fontWeight: 'bold' }}>
                    Products
                </Text>
                <View style={{ flex: 1,justifyContent:'flex-end',  marginEnd: width / 15 ,flexDirection:'row'}}>
                    <View >
                        <Icon name='search' color='#fff' size={width/17} onPress={() => searchBar2.show()} />
                    </View>

                </View>
            </View>
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor="#00af91" />

                <FlatList
                    key={(item) => '' + item.type}
                    data={data}
                    renderItem={({ item }) => OneCard(item, { navigation })}
                    keyExtractor={(item) => '' + item.type}
                />

            </View>
        </View>

    )
}
export default products;
const styles = StyleSheet.create({
    back: {
        width: "100%",
        height: "100%"
    }
})