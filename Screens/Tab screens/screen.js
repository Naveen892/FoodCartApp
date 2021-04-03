
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchBar from 'react-native-searchbar';

import Icon from 'react-native-vector-icons/FontAwesome';

import React from 'react';
import Veg from './Veg';

import Fruits from './Fruits';

import All from './All';
import MyCart from './MyCart';
import { View, Text, Dimensions } from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const Tab = createMaterialTopTabNavigator();
function Tabs({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: height / 15, backgroundColor: '#00af91', flexDirection: 'row', alignItems: 'center', }}>
                <SearchBar

                    ref={(ref) => searchBar1 = ref}

                />
                <Icon name='bars' color='#fff' size={25} style={{ marginLeft: 30 }} onPress={() => navigation.openDrawer()} />
                <Text style={{ fontSize: 22, marginLeft: 20, color: '#fff', fontWeight: 'bold' }}>
                    FoodCart
                </Text>
                <View style={{ flex: 1,justifyContent:'flex-end',  marginEnd: width / 15 ,flexDirection:'row'}}>
                    <View style={{marginEnd:20}}>
                        <Icon name='search' color='#fff' size={width/17} onPress={() => searchBar1.show()} />
                    </View>
                    <View >
                        <Icon name='user-circle-o' color='#fff' size={width/16} onPress={() => navigation.navigate('My Profile')} />
                    </View>

                </View>


            </View>
            <Tab.Navigator

                tabBarOptions={{

                    labelStyle: { fontSize: 15, fontWeight: "bold" },
                    showIcon: true,

                    activeTintColor: "#fff",
                    indicatorStyle: {
                        backgroundColor: "#fff"
                    },
                    style: { backgroundColor: "#00af91" }
                }}

            >

                <Tab.Screen name='All' component={All} />

                <Tab.Screen name='Veg' component={Veg} />
                <Tab.Screen name='Fruits' component={Fruits} />
                <Tab.Screen name="MyCart" component={MyCart} options={{ tabBarLabel: ({ size, color }) => (<Icon name="shopping-cart" color={color} size={25} />) }} />
            </Tab.Navigator>
        </View>

    )
}



export default Tabs;


