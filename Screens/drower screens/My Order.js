import React from 'react';
import { View, Text, StatusBar, FlatList, ImageBackground, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TraceOrder from '/home/naveen/FoodCart/Screens/drower screens/profilepage/TraceOrder';

function MyOrder({ navigation }) {

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.09, backgroundColor: '#00af91', flexDirection: 'row', alignItems: 'center', elevation: 10 }}>
                <Icon name='arrow-left' color='#fff' size={25} style={{ marginLeft: 30 }} onPress={() => { navigation.navigate('FoodCart') }} />

                <Text style={{ fontSize: 22, marginLeft: 20, color: '#fff',  }}>
                    My Orders
                </Text>
            </View>
            
        <TraceOrder/>


        </View>
    )
}
export default MyOrder;
const styles = StyleSheet.create({
    back: {
        width: "100%",
        height: "100%"
    }
})