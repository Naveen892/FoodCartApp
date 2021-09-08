
import React from 'react';
import { View, StyleSheet, Share, Alert } from 'react-native';
import {
    Title,
    Drawer,
    Text,
    TouchableRipple,
    Switch

} from 'react-native-paper'
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {color} from "/home/naveen/FoodCart/imp.js";
export default function Drawerx(props) {
    const onShare = async () => {
        props.navigation.closeDrawer();
        try {
            const result = await Share.share({
                message:
                    "https://www.youtube.com/watch?v=mEdMUvf2mRs"
            });

        } catch (error) {
            alert(error.message);
        }
    };
    const goToProfile = async () => {
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        props.navigation.navigate(
            isLoggedIn === '1' ? 'ConsumerProfile' : (isLoggedIn === '2' ? 'RetailerProfile' : 'My Profile')
        );
    }
    const myOrder = async () =>{
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        if(isLoggedIn==='1' || isLoggedIn==='2'){
            props.navigation.navigate('MyOrder')
        }else{
            Alert.alert("Thanks", "You Are AllReady Signed Out", [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                { text: "Please Log In", onPress: () => props.navigation.navigate('My Profile') }
            ]);
        }
    }
    const myOffer = async () =>{
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        if(isLoggedIn==='1' || isLoggedIn==='2'){
            props.navigation.navigate('Offers')
        }else{
            Alert.alert("Thanks", "You Are AllReady Signed Out", [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                { text: "Please Log In", onPress: () => props.navigation.navigate('My Profile') }
            ]);
        }
    }
    
    const signOut = async () => {

        props.navigation.closeDrawer();
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        if (isLoggedIn === '1' || isLoggedIn === '2') {
            Alert.alert("Warning", "Are You Sure !", [{
                text: "Cancel",
                style: "cancel"
            },
            {
                text: "Sure", onPress: async() => {
                    await AsyncStorage.clear();
                    Alert.alert("Thanks", "Sign Out SucessFully!");
                }
            }
            ]);

        }
        else {
            Alert.alert("Thanks", "You Are AllReady Signed Out", [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                { text: "Please Log In", onPress: () => props.navigation.navigate('My Profile') }
            ]);
        }

    }

    return (
        <View style={styles.window}>
            <View style={{ flex: 0.158, alignItems: 'baseline', justifyContent: 'flex-end' }}>
                <Text style={{ margin: 15, fontSize: 20, color: '#fff' }}>
                    WelCome !
                </Text>
            </View>
            <DrawerContentScrollView >

                <Drawer.Section style={styles.btns, { borderTopWidth: 1, borderTopColor: '#fff', borderBottomColor: '#fff', borderBottomWidth: 1 }}
                >
                    <DrawerItem
                        label='FoodCart'
                        labelStyle={styles.btns}

                        icon={() => (
                            <Icon
                                name='home'
                                color='#fff'
                                size={22}
                            />
                        )}
                        onPress={() => { props.navigation.navigate('FoodCart') }}
                    />
                    <DrawerItem
                        label='My Profile'
                        labelStyle={styles.btns}
                        icon={() => (
                            <Icon
                                name='user-o'
                                color='#fff'
                                size={22}
                            />
                        )}
                        onPress={() => goToProfile()}
                    />
                    <DrawerItem
                        label='My Order'
                        labelStyle={styles.btns}
                        icon={() => (
                            <Icon
                                name='shopping-cart'
                                color='#fff'
                                size={22}
                            />
                        )}
                        onPress={() => myOrder()}
                    />
                    <DrawerItem
                        label='Offers'
                        labelStyle={styles.btns}
                        icon={() => (
                            <Icon
                                name='gift'
                                color='#fff'
                                size={22}
                            />
                        )}
                        onPress={() =>  myOffer()}
                    />
                </Drawer.Section>
                <Drawer.Section title={<Text style={{ color: '#fff' }}>Other</Text>}
                    style={{ borderBottomWidth: 1, borderBottomColor: '#fff' }}>
                    <DrawerItem
                        label='About Us'
                        labelStyle={styles.btns}
                        icon={() => (
                            <Icon
                                name='foursquare'
                                color='#fff'
                                size={22}
                            />
                        )}
                    />
                    <DrawerItem
                        label='Share'
                        labelStyle={styles.btns}
                        icon={() => (
                            <Icon
                                name='share-alt'
                                color='#fff'
                                size={22}
                            />
                        )}
                        onPress={() => onShare()}
                    />
                    <DrawerItem
                        label='Contact Us'
                        labelStyle={styles.btns}
                        icon={() => (
                            <Icon
                                name='users'
                                style={{ marginRight: 0 }}
                                color='#fff'
                                size={22}
                            />
                        )}
                    />
                    <DrawerItem
                        label='Rate Us'
                        labelStyle={styles.btns}
                        icon={() => (
                            <Icon
                                name='star-o'
                                color='#fff'
                                size={22}
                            />
                        )}
                    />

                </Drawer.Section>
            </DrawerContentScrollView>
            <Drawer.Section style={{ borderTopWidth: 1, borderTopColor: '#fff' }}>
                <DrawerItem
                    label='Sign Out'
                    labelStyle={{ color: '#fff' }}
                    icon={({ color, size }) => (
                        <Icon name='sign-out'
                            color='#fff'
                            size={size} />
                    )}
                    onPress={() => signOut()}
                />
            </Drawer.Section>
        </View>
    );
}


const styles = StyleSheet.create({
    btns: {
        color: '#fff',
        fontSize: 19,


    },
    window: {
        flex: 1,
        backgroundColor: color,


    }
})