import React from 'react';
import { View, Text ,StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
function Offers({navigation}) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.09, backgroundColor: '#00af91', flexDirection: 'row', alignItems: 'center', elevation: 10 }}>
                <Icon name='arrow-left' color='#fff' size={25} style={{ marginLeft: 30 }} onPress={() => { navigation.navigate('FoodCart') }} />

                <Text style={{ fontSize: 22, marginLeft: 20, color: '#fff',  }}>
                    Order History
                </Text>
                <StatusBar backgroundColor="#00af91" />
            </View>
        <View style={{ flex: 1, alignContent: 'center', alignItems: 'center', backgroundColor: '#fff', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30, color: '#00af91' }}>
                You Have No Offers
            </Text>
            <Text style={{ fontSize: 20, color: '#00af91' }}>
                Till Now
            </Text>
        </View>
        </View>
    )
}
export default Offers;