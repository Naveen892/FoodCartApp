import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import  Gifts from '/home/naveen/FoodCart/Screens/drower screens/profilepage/Gifts';
import TraceOrder from '/home/naveen/FoodCart/Screens/drower screens/profilepage/TraceOrder';
const NotificataionTab = createMaterialTopTabNavigator();
export default function Notification({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.09, backgroundColor: '#00af91', flexDirection: 'row', alignItems: 'center', elevation: 10 }}>
                <Icon name='arrow-left' color='#fff' size={25} style={{ marginLeft: 30 }} onPress={() => { navigation.navigate('ConsumerProfile') }} />

                <Text style={{ fontSize: 22, marginLeft: 20, color: '#fff', }}>
                    Notifications
                </Text>
            </View>
            <NotificataionTab.Navigator
                tabBarOptions={{

                    labelStyle: { fontSize: 15 },
                    showIcon: true,

                    activeTintColor: "#00af91",
                    indicatorStyle: {
                        height:3,
                        backgroundColor: '#00af91',
                        borderRadius: 10
                    },
                    style: { backgroundColor: "#fff" }
                }}
            >
                <NotificataionTab.Screen name='Trace Orders' component={TraceOrder}/>
                <NotificataionTab.Screen name='Gifts' component={Gifts} />
            </NotificataionTab.Navigator>



        </View>
    )
}