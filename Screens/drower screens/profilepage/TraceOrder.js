import React from 'react';
import { View, Text, StatusBar, FlatList, ImageBackground, StyleSheet } from 'react-native';
import TraceCard from '/home/naveen/FoodCart/Screens/drower screens/profilepage/TraceCard.js';

function TraceOrder({ navigation }) {

    const data = [
        { image: 'https://freepngimg.com/thumb/potato/10-potato-png-images-pictures-download-thumb.png', type: 'Potato', price: 20, grade: 'A' },
        { image: 'https://freepngimg.com/thumb/potato/10-potato-png-images-pictures-download-thumb.png', type: 'Onion', price: 24, grade: 'B' },
        { image: 'https://freepngimg.com/thumb/potato/10-potato-png-images-pictures-download-thumb.png', type: 'type3', price: 20, grade: 'C' },
        { image: 'https://freepngimg.com/thumb/potato/10-potato-png-images-pictures-download-thumb.png', type: 'type4', price: 10, grade: 'A' },
        { image: 'https://freepngimg.com/thumb/potato/10-potato-png-images-pictures-download-thumb.png', type: 'type5', price: 20, grade: 'B' },
        { image: 'https://freepngimg.com/thumb/potato/10-potato-png-images-pictures-download-thumb.png', type: 'type1', price: 20, grade: 'B' },
        { image: 'https://freepngimg.com/thumb/potato/10-potato-png-images-pictures-download-thumb.png', type: 'type2', price: 90, grade: 'A' },
        { image: 'https://freepngimg.com/thumb/potato/10-potato-png-images-pictures-download-thumb.png', type: 'type6', price: 25, grade: 'C' },
    ];
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor="#00af91" />

                <FlatList
                    key={(item) => '' + item.type}
                    data={data}
                    renderItem={({ item }) => TraceCard(item, { navigation })}
                    keyExtractor={(item) => '' + item.type}
                />

            </View>
        </View>

    )
}
export default TraceOrder;
const styles = StyleSheet.create({
    back: {
        width: "100%",
        height: "100%"
    }
})