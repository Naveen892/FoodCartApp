import React, { useState } from 'react'
import { View, Text, ScrollView, Image, StyleSheet, Dimensions, TouchableOpacity, Modal, TextInput, ToastAndroid,Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
const height = Dimensions.get('screen').height;


export default function ConsumerProfile({ navigation }) {
    const [editprofile, seteditprofile] = useState(false);
    const [name, setName] = useState('Naveen Kumar');
    const [contact, setContact] = useState('8529654124');
    const [location, setLocation] = useState('IIT Guwahati');
    var nameString = name;
    var contactString = contact;
    var locationString = location;
    const signOut = async () => {
            Alert.alert("Warning", "Are You Sure !", [{
                text: "Cancel",
                style: "cancel"
            },
            {
                text: "Sure", onPress: async() => {
                    await AsyncStorage.clear();
                    ToastAndroid.showWithGravity("Sign Out SucessFully!",
                        ToastAndroid.LONG, ToastAndroid.BOTTOM);
                    navigation.navigate('My Profile')
                }
            }
            ]);

    }
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>

            {/* User Information */}
            <View style={{ backgroundColor: '#00af91', elevation: 10, height: 3 * height / 7, borderBottomRightRadius: 30, borderBottomLeftRadius: 5 }}>
                <View style={{ flexDirection: 'row', backgroundColor: '#00af91' }}>
                    <Icon name='arrow-left' style={{ marginTop: 40, marginLeft: 40, marginBottom: 20 }} size={25} color='#fff' onPress={() => navigation.navigate('FoodCart')} />
                    <View style={{ alignItems: 'flex-end', flex: 1 }}>
                        <Text style={styles.name}>Consumer</Text>

                    </View>
                </View>
                <View style={styles.usercard}>
                    <Icon name='user-circle-o' size={100} color='#00af91' style={{ marginLeft: 20 }} />
                    <View style={{ flex: 1, marginLeft: 10, justifyContent: 'center', alignContent: 'center' }}>
                        <Text
                            style={{ fontSize: 30, color: '#00af91' }}
                        >{"" + name.toString()}
                        </Text>


                        <Text
                            style={{ color: '#00af91', marginVertical: 5, fontSize: 15 }}
                        >
                            {"" + contact.toString()}
                        </Text>


                        <Text
                            style={{ color: '#d89216', borderWidth: 1, borderColor: '#d89216', fontSize: 15, padding: 2, marginRight: 40, borderRadius: 5, paddingStart: 9 }}

                        >
                            <Icon name='map-marker' color="#d89216" size={17} style={{}} /> {location}
                        </Text>

                    </View>
                </View>
                <TouchableOpacity style={{ flex: 0.3, alignContent: 'center', alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row', marginRight: 40 }} activeOpacity={1}>
                    <Icon name='edit' color='#fff' size={25} onPress={() => seteditprofile(true)} />
                    <Text style={{ color: '#fff', fontSize: 20 }} onPress={() => seteditprofile(true)}  > Edit Profile</Text>
                </TouchableOpacity>



                {/* Modal for Edit Consumer Profile*/}
                <Modal
                    transparent={true}
                    visible={editprofile}
                >
                    <View style={{ flex: 1, backgroundColor: '#000000aa', alignContent: 'center', justifyContent: 'center' }}>

                        <View style={{ height: height / 3 }}>
                            <View style={styles.usercardmodal}>
                                <View style={{ flex: 4, alignItems: 'center', flexDirection: 'row', paddingBottom: 0 }}>
                                    <Icon name='user-circle-o' size={100} color='#00af91' style={{}} />
                                    <View style={{ flex: 1, marginLeft: 10, justifyContent: 'center', alignContent: 'center' }}>
                                        <TextInput
                                            style={{ fontSize: 25, color: '#00af91', padding: 0, borderColor: '#00af91', borderWidth: 1, paddingLeft: 10, borderRadius: 5 }}
                                            defaultValue={name}
                                            maxLength={20}
                                            placeholderTextColor='#00af91'
                                            onChangeText={(text) => { if (text != "") nameString = "" + text }}
                                        />


                                        <TextInput
                                            style={{ color: '#00af91', marginVertical: 5, fontSize: 15, padding: 0, borderColor: '#00af91', borderWidth: 1, marginRight: 60, paddingLeft: 10, borderRadius: 5 }}
                                            defaultValue={contact}
                                            keyboardType='phone-pad'
                                            placeholderTextColor='#00af91'
                                            maxLength={10}
                                            onChangeText={(text) => { if (text != "") contactString = "" + text }}
                                        />



                                        <TextInput
                                            style={{
                                                color: '#d89216', borderWidth: 1, borderColor: '#d89216', fontSize: 15, padding: 2, marginRight: 20, borderRadius: 5, paddingStart: 9, marginBottom: 0
                                            }}
                                            defaultValue={location}
                                            placeholderTextColor='#d89216'
                                            maxLength={25}
                                            onChangeText={(text) => { if (text != "") locationString = "" + text }}
                                        />


                                        <TouchableOpacity activeOpacity={0.8} style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end', marginEnd: 20, marginTop: 5 }}>
                                            <Icon name='map-marker' color="#d89216" size={20} />
                                            <Text style={{ color: '#d89216', marginLeft: 6, fontSize: 12 }}>
                                                Choose from map
                            </Text>

                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end', marginRight: 10, marginBottom: 0, flexDirection: 'row' }}>
                                    <TouchableOpacity activeOpacity={0.8} style={styles.btncencel} onPress={() => seteditprofile(false)}>

                                        <Text style={styles.text, { color: '#00af91' }}>Cencel</Text>

                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        style={styles.button}
                                        onPress={() => {
                                            seteditprofile(false);
                                            setName(nameString);
                                            setContact(contactString);
                                            setLocation(locationString);

                                        }}>

                                        <Text style={styles.text, { color: '#fff' }}>Done</Text>

                                    </TouchableOpacity>
                                </View>


                            </View>

                        </View>



                    </View>


                </Modal>


            </View>
            {/* Scroll View under user data */}
            <ScrollView style={{ height: 2 * height / 3, backgroundColor: '#fff' }}>
                <View style={{ margin: 10 }}>
                    <Text style={{ color: '#aaa' }}>
                        details
                    </Text>
                </View>
                <View style={{ borderBottomWidth: 1, borderBottomColor: "#aaa", marginHorizontal: 10 }}></View>
                <TouchableOpacity style={{ margin: 10, flexDirection: 'row', alignItems: 'center' }} activeOpacity={0.8} onPress={() => navigation.navigate('OrderHistory')}>
                    <Icon name='history' color='#00af91' size={23} style={{ marginLeft: 20, marginRight: 10 }} />
                    <Text style={{ color: '#00af91', fontSize: 23 }}>
                        Order History
                    </Text>
                </TouchableOpacity>

                <View style={{ borderBottomWidth: 1, borderBottomColor: "#ddd", marginHorizontal: 10 }}></View>
                <TouchableOpacity style={{ margin: 10, flexDirection: 'row', alignItems: 'center' }} activeOpacity={0.8} onPress={() => navigation.navigate('Notification')}>
                    <Icon name='bell-o' color='#00af91' size={23} style={{ marginLeft: 20, marginRight: 10 }} />
                    <Text style={{ color: '#00af91', fontSize: 23 }}>
                        Notifications
                    </Text>
                </TouchableOpacity>
                <View style={{ borderBottomWidth: 1, borderBottomColor: "#ddd", marginHorizontal: 10 }}></View>
                <TouchableOpacity style={{ margin: 10, flexDirection: 'row', alignItems: 'center' }} activeOpacity={0.8}>
                    <Icon name='gift' color='#00af91' size={23} style={{ marginLeft: 20, marginRight: 10 }} />
                    <Text style={{ color: '#00af91', fontSize: 23 }}>
                        My Gifts
                    </Text>
                </TouchableOpacity>
                <View style={{ borderBottomWidth: 1, borderBottomColor: "#ddd", marginHorizontal: 10 }}></View>
                <TouchableOpacity style={{ margin: 10, flexDirection: 'row', alignItems: 'center' }} activeOpacity={0.8}>
                    <Icon name='star-half-o' color='#00af91' size={23} style={{ marginLeft: 20, marginRight: 10 }} />
                    <Text style={{ color: '#00af91', fontSize: 23 }}>
                        Ratings And Reviews
                    </Text>
                </TouchableOpacity>
                <View style={{ borderBottomWidth: 1, borderBottomColor: "#ddd", marginHorizontal: 10 }}></View>
                <TouchableOpacity style={{ margin: 10, flexDirection: 'row', alignItems: 'center' }} activeOpacity={0.8}>
                    <Icon name='question-circle' color='#00af91' size={23} style={{ marginLeft: 20, marginRight: 10 }} />
                    <Text style={{ color: '#00af91', fontSize: 23 }}>
                        Ask A Question
                    </Text>
                </TouchableOpacity>
                <View style={{ borderBottomWidth: 1, borderBottomColor: "#ddd", marginHorizontal: 10 }}></View>
                <TouchableOpacity style={{ margin: 10, flexDirection: 'row', alignItems: 'center' }} activeOpacity={0.8}>
                    <Icon name='comments' color='#00af91' size={23} style={{ marginLeft: 20, marginRight: 10 }} />
                    <Text style={{ color: '#00af91', fontSize: 23 }}>
                        Feedback
                    </Text>
                </TouchableOpacity>
                <View style={{ borderBottomWidth: 1, borderBottomColor: "#ddd", marginHorizontal: 10 }}></View>
                <TouchableOpacity style={{ margin: 10, flexDirection: 'row', alignItems: 'center' }} activeOpacity={0.8}>
                    <Icon name='info-circle' color='#00af91' size={23} style={{ marginLeft: 20, marginRight: 10 }} />
                    <Text style={{ color: '#00af91', fontSize: 23 }}>
                        Information
                    </Text>
                </TouchableOpacity>
                <View style={{ borderBottomWidth: 1, borderBottomColor: "#ddd", marginHorizontal: 10 }}></View>

                <TouchableOpacity style={{ margin: 10, flexDirection: 'row', alignItems: 'center' }} activeOpacity={0.8} onPress={() => signOut()}>
                    <Icon name='sign-out' color='#00af91' size={23} style={{ marginLeft: 20, marginRight: 10 }} />
                    <Text style={{ color: '#00af91', fontSize: 23 }}>
                        Log Out
                    </Text>
                </TouchableOpacity>
                <View style={{ borderBottomWidth: 1, borderBottomColor: "#ddd", marginHorizontal: 10 }}></View>
                <View style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#aaa' }}>
                        {'\u00A9'} FoodCart Pvt Ltd
                        </Text>
                </View>
            </ScrollView>


        </View>



    )

}


const styles = StyleSheet.create({
    usercard: {
        flex: 0.7,
        backgroundColor: '#fff',
        margin: 20,
        marginBottom: 0,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 30,
        elevation: 10,
        flexDirection: 'row'
    },
    usercardmodal: {
        padding: 20,
        flex: 0.8,
        height: height / 4,
        backgroundColor: '#fff',
        margin: 20,
        marginBottom: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 30,
        elevation: 10,
    },

    name: {
        marginRight: 40,
        marginTop: 40,
        fontSize: 25,
        color: '#fff',
    },
    button: {
        backgroundColor: "#00af91",
        alignItems: 'center',
        width: 100,
        borderColor: '#fff',
        borderWidth: 2,
        margin: 1,
        padding: 2,
        borderBottomRightRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 2,
        borderTopRightRadius: 2,
        elevation: 7,
    },
    btncencel: {
        backgroundColor: "#fff",
        marginEnd: 10,
        alignItems: 'center',
        width: 100,
        borderColor: '#00af91',
        borderWidth: 2,
        margin: 1,
        padding: 2,
        borderBottomRightRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 2,
        borderTopRightRadius: 2,
        elevation: 7,
    }
})