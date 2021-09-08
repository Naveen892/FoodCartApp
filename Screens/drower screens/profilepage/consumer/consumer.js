import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Dimensions, Alert, ToastAndroid } from 'react-native';
import {color} from "/home/naveen/FoodCart/imp.js";
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
const height = Dimensions.get('window').height;

function Consumer({ navigation }) {
    const pin1 = useRef();
    const pin2 = useRef();
    const pin3 = useRef();
    const pin4 = useRef();
    const [userName, setUserName] = useState("");
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");

    const createAcc = () => {
        Alert.alert("Alert", "Please Chack All Details", [
            {
                text: 'Cencel',
                style: 'cancel'
            },
            {
                text: 'Register',
                onPress: () => {
                    
                    ToastAndroid.showWithGravity("Created account SucessFully!",
                        ToastAndroid.LONG, ToastAndroid.BOTTOM);
                    navigation.navigate("ConsumerProfile");

                    AsyncStorage.setItem('isLoggedIn', '1');
                    AsyncStorage.setItem('cartItem', {})
                }
            }
        ])
        
    }
    return (

        <ScrollView >
            <View style={styles.upperView}>
                <View style={{ flexDirection: 'row', }}>
                    <Icon name='arrow-left' style={{ marginLeft: 40, marginTop: 40 }} size={25} color='#fff' onPress={() => navigation.navigate('LogInConsumer')} />
                    <View style={{ alignItems: 'flex-end', flex: 1 }}>
                        <Text style={styles.name}>Consumer</Text>

                    </View>
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                </View>
                <Text style={{ marginHorizontal: 80, marginBottom: 5, fontSize: 15, color: '#fff' }}>
                    <Text style={{ color: 'red' }}>*</Text>Your Name
                        </Text>
                <View style={styles.input}>

                    <TextInput
                    allowFontScaling={false}
                        placeholder='Please Enter Your Name'
                        placeholderTextColor='#ccc'
                        
                        onChangeText={(text) => setUserName(text)}
                    />

                </View>
                <Text style={{ marginHorizontal: 80, marginBottom: 5, fontSize: 15, color: '#fff' }}>
                    <Text style={{ color: 'red' }}>*</Text>Your Contact Number
                        </Text>
                <View style={styles.input}>

                    <TextInput
                    allowFontScaling={false}
                        placeholder='Please Enter Your Mobile Number'
                        placeholderTextColor='#ccc'
                        keyboardType='phone-pad'
                        
                        onChangeText={(text) => setContact(text)}
                    />

                </View>
                <Text style={{ marginHorizontal: 80, marginBottom: 5, fontSize: 15, color: '#fff' }}>
                    <Text style={{ color: 'red' }}>*</Text>Make Your Password
                        </Text>
                <View style={styles.input}>

                    <TextInput
                    allowFontScaling={false}
                        placeholder='Please Enter Your Password'
                        placeholderTextColor='#ccc'
                        
                        onChangeText={(text) => setPassword(text)}
                    />

                </View>

                <Text style={{ marginLeft: 80, marginBottom: 5, fontSize: 15, color: '#fff' }}>
                    Your Address (Optional)
                        </Text>

                <View style={styles.input}>

                    <TextInput
                    allowFontScaling={false}
                        placeholder='Please Enter Your Address (Optional)'
                        placeholderTextColor='#ccc'
                        
                        onChangeText={(text) => setAddress(text)}
                    />
                    

                </View>
                <TouchableOpacity allowFontScaling={false} activeOpacity={0.8} style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end', marginEnd: 80, marginBottom: 25 }}>
                        <Icon name='map-marker' color="#fff" size={20} style={{}} />
                        <Text style={{ color: '#fff', marginLeft: 10, fontSize: 15 }}>
                            Choose from map
                            </Text>

                    </TouchableOpacity>




            </View>
            <View style={styles.lowerView}>
                <View style={{ flex: 1, alignItems: 'flex-end', marginHorizontal: 30, marginTop: 20 }}>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Text style={{ fontSize: 15, color: color }}>
                            <Icon name='send-o' size={15} /> Send OTP
                            </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row', marginBottom: 20, marginTop: 20 }}>
                    <View style={{ borderWidth: 2, borderColor: color, width: 40, marginHorizontal: 5, borderRadius: 10, alignItems: 'center', }}>
                        <TextInput allowFontScaling={false} ref={pin1} placeholder='_' placeholderTextColor='#ccc' onChangeText={(pin1) => { if (pin1 != "") { pin2.current.focus() } }} style={{ marginHorizontal: 6, fontSize: 20, color: color }} maxLength={1} keyboardType='numeric' />
                    </View>
                    <View style={{ borderWidth: 2, borderColor: color, width: 40, marginHorizontal: 5, borderRadius: 10, alignItems: 'center', }}>
                        <TextInput allowFontScaling={false} ref={pin2} placeholder='_' placeholderTextColor='#ccc' onChangeText={(pin2) => { if (pin2 != "") { pin3.current.focus() } }} style={{ marginHorizontal: 6, fontSize: 20, color: color }} maxLength={1} keyboardType='numeric' />
                    </View>
                    <View style={{ borderWidth: 2, borderColor: color, width: 40, marginHorizontal: 5, borderRadius: 10, alignItems: 'center', }}>
                        <TextInput allowFontScaling={false}ref={pin3} placeholder='_' placeholderTextColor='#ccc' onChangeText={(pin3) => { if (pin3 != "") { pin4.current.focus() } }} style={{ marginHorizontal: 6, fontSize: 20, color: color }} maxLength={1} keyboardType='numeric' />
                    </View>
                    <View style={{ borderWidth: 2, borderColor: color, width: 40, marginHorizontal: 5, borderRadius: 10, alignItems: 'center', }}>
                        <TextInput allowFontScaling={false} ref={pin4} placeholder='_' placeholderTextColor='#ccc' style={{ marginHorizontal: 6, fontSize: 20, color: color }} maxLength={1} keyboardType='numeric' />
                    </View>
                </View>
                <TouchableOpacity style={styles.signinbtn} activeOpacity={0.8} onPress={() => createAcc()}>
                    <Text style={{ fontSize: 20, fontWeight: '300', color: color }}>
                        Create Account
                </Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity style={styles.privacy} activeOpacity={0.8}>
                        <Text style={{ fontSize: 15, fontWeight: '200', color: color, textDecorationLine: 'underline' }}>
                            Terms and condition
                </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.privacy} activeOpacity={0.8}>
                        <Text style={{ fontSize: 15, fontWeight: '200', color: color, textDecorationLine: 'underline' }}>
                            Privacy policy
                </Text>
                    </TouchableOpacity>
                </View>

            </View>



        </ScrollView>


    )
}

export default Consumer;

const styles = StyleSheet.create({
    upperView: {
        flex: 2,
        height: 2 * height / 3,
        backgroundColor: color,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        flexDirection: 'column',
        elevation: 7
    },
    lowerView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    name: {
        marginRight: 40,
        marginTop: 40,
        fontSize: 25,
        color: '#fff',
    },
    loginbtn: {
        marginHorizontal: 60,
        marginBottom: 30,
        alignItems: 'center',
        backgroundColor: color,
        borderColor: '#fff',
        borderWidth: 2,
        padding: 5,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 5,
        borderTopRightRadius: 5,
        elevation: 7
    },
    privacy: {
        margin: 10,
        marginTop: 0,
        marginBottom: 40
    },
    signinbtn: {
        marginHorizontal: 60,
        marginBottom: 30,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: color,
        borderWidth: 2,
        padding: 5,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 5,
        borderTopRightRadius: 5,
        elevation: 7
    },
    input: {
        marginHorizontal: 60,
        marginBottom: 15,
        alignItems: 'center',
        backgroundColor: color,
        borderColor: '#fff',
        borderWidth: 2,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 5,
        borderTopRightRadius: 5,
        elevation: 7
    },

})