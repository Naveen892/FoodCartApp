import React from 'react';
import { View, Text, StatusBar, FlatList, ImageBackground, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {color} from "/home/naveen/FoodCart/imp.js";
import MyProductCard from '/home/naveen/FoodCart/Screens/drower screens/profilepage/MyProductCard';

const columns = 2;
function MyProducts({ navigation }) {

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
            <View style={{ flex: 0.09, backgroundColor: color, flexDirection: 'row', alignItems: 'center',elevation:10 }}>
                <Icon name='arrow-left' color='#fff' size={25} style={{ marginLeft: 30 }} onPress={() => {navigation.navigate('RetailerProfile')}} />

                <Text style={{ fontSize: 22, marginLeft: 20, color: '#fff', fontWeight: 'bold' }}>
                    My Products
                </Text>
            </View>
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor={color} />

                <FlatList
                    key={(item) => '' + item.type}
                    data={data}
                    renderItem={({ item }) => MyProductCard(item, { navigation })}
                    keyExtractor={(item) => '' + item.type}
                />

            </View>
        </View>

    )
}
export default MyProducts;
const styles = StyleSheet.create({
    back: {
        width: "100%",
        height: "100%"
    }
})