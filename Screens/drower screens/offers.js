import React from 'react';
import { View, Text ,StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {color} from "/home/naveen/FoodCart/imp.js";
function Offers({navigation}) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.09, backgroundColor: color, flexDirection: 'row', alignItems: 'center', elevation: 10 }}>
                <Icon name='arrow-left' color='#fff' size={25} style={{ marginLeft: 30 }} onPress={() => { navigation.navigate('FoodCart') }} />

                <Text style={{ fontSize: 22, marginLeft: 20, color: '#fff',  }}>
                    Your Offers
                </Text>
                <StatusBar backgroundColor={color} />
            </View>
        <View style={{ flex: 1, alignContent: 'center', alignItems: 'center', backgroundColor: '#fff', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30, color: color }}>
                You Have No Offers
            </Text>
            <Text style={{ fontSize: 20, color: color }}>
                Till Now
            </Text>
        </View>
        </View>
    )
}
export default Offers;