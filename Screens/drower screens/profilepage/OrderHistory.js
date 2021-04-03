import React from 'react';
import { View, Text, StatusBar, FlatList, ImageBackground, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import orderHistoryCard from '/home/naveen/FoodCart/Screens/drower screens/profilepage/orderHistoryCard';

const columns = 2;
function OrderHistory({ navigation }) {

    const data = [
        { type: 'Potato', price: 20, grade: 'A', id: 1, quantity: 6 },
        { type: 'Onion', price: 24, grade: 'B', id: 2, quantity: 2 },
        { type: 'type3', price: 20, grade: 'C', id: 4, quantity: 1 },
        { type: 'type4', price: 30, grade: 'A', id: 3, quantity: 7 },
        { type: 'type5', price: 24, grade: 'B', id: 6, quantity: 5 },
        { type: 'type6', price: 22, grade: 'A', id: 7, quantity: 8 },
        { type: 'type7', price: 20, grade: 'C', id: 2, quantity: 3 },
    ];
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.09, backgroundColor: '#00af91', flexDirection: 'row', alignItems: 'center', elevation: 10 }}>
                <Icon name='arrow-left' color='#fff' size={25} style={{ marginLeft: 30 }} onPress={() => { navigation.navigate('ConsumerProfile') }} />

                <Text style={{ fontSize: 22, marginLeft: 20, color: '#fff',  }}>
                    Order History
                </Text>
            </View>
            <View style={{flex:1}}>
                <StatusBar backgroundColor="#00af91" />
                <FlatList
                    key={(item) => '' + item.type}
                    data={data}
                    renderItem={({ item }) => orderHistoryCard(item, { navigation })}
                    keyExtractor={(item) => '' + item.type}
                />

            </View>


        </View>
    )
}
export default OrderHistory;
const styles = StyleSheet.create({
    back: {
        width: "100%",
        height: "100%"
    }
})