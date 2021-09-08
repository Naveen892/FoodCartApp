
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchBar from 'react-native-searchbar';

import Icon from 'react-native-vector-icons/FontAwesome';

import React from 'react';
import Veg from './Veg';

import Fruits from './Fruits';

import All from './All';
import MyCart from './MyCart';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { color } from "/home/naveen/FoodCart/imp.js";
import { View, Text, Dimensions ,BackHandler} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const Tab = createMaterialTopTabNavigator();
function Tabs({ navigation }) {
    const goToProfile = async() => {
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        console.log(isLoggedIn);
         navigation.navigate(
            isLoggedIn === '1' ? 'ConsumerProfile' : (isLoggedIn==='2' ? 'RetailerProfile':'My Profile')
            );
    }
    
    

     
    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: height / 15, backgroundColor: color, flexDirection: 'row', alignItems: 'center', }}>
                <SearchBar

                    ref={(ref) =>  searchBar1 = ref}

                />
                <Icon name='bars' color='#fff' size={25} style={{ marginLeft: 30 }} onPress={() => navigation.openDrawer()} />
                <Text style={{ fontSize: 22, marginLeft: 20, color: '#fff', fontWeight: 'bold' }}>
                    OrgoBucket
                </Text>
                <View style={{ flex: 1,justifyContent:'flex-end',  marginEnd: width / 15 ,flexDirection:'row'}}>
                    <View style={{marginEnd:20}}>
                        <Icon name='search' color='#fff' size={width/17} onPress={() => searchBar1.show()} />
                    </View>
                    <View >
                        <Icon name='user-circle-o' color='#fff' size={width/16} onPress={() => goToProfile()} />
                    </View>

                </View>


            </View>
            <Tab.Navigator

                initialRouteName="All"
                tabBarOptions={{

                    labelStyle: { fontSize: 15, fontWeight: "bold" },
                    showIcon: true,
                    tabStyle: { width: 'auto' },
                    activeTintColor: "#fff",
                    indicatorStyle: {
                        backgroundColor: "#fff"
                    },
                    style: { backgroundColor: color },
                    allowFontScaling:false,
                   
                }}
                

            >
                
                <Tab.Screen name='All' component={All} options={{ tabBarLabel: ({ size, color }) => (<Text style={{color:color,fontSize:20,fontWeight:'bold',width:width/4,textAlign:'center'}}>All</Text>) }}/>

                <Tab.Screen name='Veg' component={Veg}  options={{ tabBarLabel: ({ size, color }) => (<Text style={{color:color,fontSize:20,fontWeight:'bold',width:width/4,textAlign:'center'}}>Veg</Text>) }}/>
                <Tab.Screen name='Fruits' component={Fruits} options={{ tabBarLabel: ({ size, color }) => (<Text style={{color:color,fontSize:20,fontWeight:'bold',width:width/4,textAlign:'center'}}>Fruits</Text>) }}/>
                <Tab.Screen name="MyCart" component={MyCart} options={{ tabBarLabel: ({ size, color }) => (<Icon name="shopping-cart" color={color} size={25} />) }} />
            </Tab.Navigator>
        </View>

    )
}



export default Tabs;


