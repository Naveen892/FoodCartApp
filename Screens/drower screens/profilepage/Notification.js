import React from 'react'
import { View, Text ,Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import  Gifts from '/home/naveen/FoodCart/Screens/drower screens/profilepage/Gifts';
import TraceOrder from '/home/naveen/FoodCart/Screens/drower screens/profilepage/TraceOrder';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {color} from "/home/naveen/FoodCart/imp.js";
const NotificataionTab = createMaterialTopTabNavigator();
const width=Dimensions.get('window').width;
export default function Notification({ navigation }) {
    const goToProfile = async() => {
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        console.log(isLoggedIn);
         navigation.navigate(
            isLoggedIn === '1' ? 'ConsumerProfile' : (isLoggedIn==='2' ? 'RetailerProfile':'My Profile')
            );
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.09, backgroundColor: color, flexDirection: 'row', alignItems: 'center', elevation: 10 }}>
                <Icon name='arrow-left' color='#fff' size={25} style={{ marginLeft: 30 }} onPress={() => goToProfile()} />

                <Text style={{ fontSize: 22, marginLeft: 20, color: '#fff', }}>
                    Notifications
                </Text>
            </View>
            <NotificataionTab.Navigator
                tabBarOptions={{

                    labelStyle: { fontSize: 15 },
                    showIcon: true,

                    activeTintColor: color,
                    indicatorStyle: {
                        height:3,
                        backgroundColor: color,
                        borderRadius: 10
                    },
                    style: { backgroundColor: "#fff" }
                }}
            >
                <NotificataionTab.Screen name='Trace Orders' component={TraceOrder} options={{ tabBarLabel: ({ size, color }) => (<Text style={{color:color,fontSize:20,fontWeight:'bold',width:width/2,textAlign:'center'}}>Trace Order</Text>) }}/>
                <NotificataionTab.Screen name='Gifts' component={Gifts} options={{ tabBarLabel: ({ size, color }) => (<Text style={{color:color,fontSize:20,fontWeight:'bold',width:width/2,textAlign:'center'}}>Gifts</Text>) }}/>
            </NotificataionTab.Navigator>



        </View>
    )
}