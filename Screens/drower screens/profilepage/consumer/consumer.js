import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Dimensions } from 'react-native';
import { pink200 } from 'react-native-paper/lib/typescript/styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
const height = Dimensions.get('window').height;

function Consumer({ navigation }) {
    const pin1 = useRef();
    const pin2 = useRef();
    const pin3 = useRef();
    const pin4 = useRef();
    return (

        <ScrollView >
            <View style={styles.upperView}>
                <View style={{ flexDirection: 'row', }}>
                    <Icon name='arrow-left' style={{ marginLeft: 40,marginTop:40 }} size={25} color='#fff' onPress={() => navigation.navigate('LogInConsumer')} />
                    <View style={{ alignItems: 'flex-end', flex: 1 }}>
                        <Text style={styles.name}>Consumer</Text>

                    </View>
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                </View>
                <Text style={{ marginHorizontal: 80, marginBottom: 5, fontSize: 15, color: '#fff' }}>
                    <Text style={{ color: 'red' }}>*</Text>Your Name
                        </Text>
                <View style={{ marginBottom: 20 }}>

                    <TextInput
                        placeholder='Please Enter Your Name'
                        placeholderTextColor='#ccc'
                        style={styles.input}
                    />

                </View>
                <Text style={{ marginHorizontal: 80, marginBottom: 5, fontSize: 15, color: '#fff' }}>
                    <Text style={{ color: 'red' }}>*</Text>Your Contact Number
                        </Text>
                <View style={{ marginBottom: 20 }}>

                    <TextInput
                        placeholder='Please Enter Your Mobile Number'
                        placeholderTextColor='#ccc'
                        keyboardType='phone-pad'
                        style={styles.input}
                    />

                </View>
                <Text style={{ marginHorizontal: 80, marginBottom: 5, fontSize: 15, color: '#fff' }}>
                        <Text style={{color:'red'}}>*</Text>Make Your Password
                        </Text>
                <View style={{ marginBottom: 20 }}>

                    <TextInput
                        placeholder='Please Enter Your Password'
                        placeholderTextColor='#ccc'
                        style={styles.input}
                    />

                </View>

                <Text style={{ marginLeft: 80, marginBottom: 5, fontSize: 15, color: '#fff' }}>
                    Your Address (Optional)
                        </Text>

                <View style={{ marginBottom: 20 }}>

                    <TextInput
                        placeholder='Please Enter Your Address (Optional)'
                        placeholderTextColor='#ccc'
                        style={styles.input}
                    />
                    <TouchableOpacity activeOpacity={0.8} style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end', marginEnd: 80, marginBottom: 10 }}>
                        <Icon name='map-marker' color="#fff" size={20} style={{}} />
                        <Text style={{ color: '#fff', marginLeft: 10, fontSize: 15 }}>
                            Choose from map
                            </Text>

                    </TouchableOpacity>

                </View>




            </View>
            <View style={styles.lowerView}>
                <View style={{ flex: 1, alignItems: 'flex-end', marginHorizontal: 30, marginTop: 20 }}>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Text style={{ fontSize: 15, color: '#00af91' }}>
                            <Icon name='send-o' size={15} /> Send OTP
                            </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginBottom: 20, marginTop: 20 }}>
                    <TextInput ref={pin1} placeholder='_' placeholderTextColor='#ccc' onChangeText={(pin1) => { if (pin1 != "") { pin2.current.focus() } }} style={{ borderWidth: 2, borderColor: '#00af91', width: 40, textAlign: 'center', fontSize: 20, color: '#00af91', marginHorizontal: 5, borderRadius: 10 }} maxLength={1} keyboardType='numeric' />
                    <TextInput ref={pin2} placeholder='_' placeholderTextColor='#ccc' onChangeText={(pin2) => { if (pin2 != "") { pin3.current.focus() } }} style={{ borderWidth: 2, borderColor: '#00af91', width: 40, textAlign: 'center', fontSize: 20, color: '#00af91', marginHorizontal: 5, borderRadius: 10 }} maxLength={1} keyboardType='numeric' />
                    <TextInput ref={pin3} placeholder='_' placeholderTextColor='#ccc' onChangeText={(pin3) => { if (pin3 != "") { pin4.current.focus() } }} style={{ borderWidth: 2, borderColor: '#00af91', width: 40, textAlign: 'center', fontSize: 20, color: '#00af91', marginHorizontal: 5, borderRadius: 10 }} maxLength={1} keyboardType='numeric' />
                    <TextInput ref={pin4} placeholder='_' placeholderTextColor='#ccc' style={{ borderWidth: 2, borderColor: '#00af91', width: 40, textAlign: 'center', fontSize: 20, color: '#00af91', marginHorizontal: 5, borderRadius: 10 }} maxLength={1} keyboardType='numeric' />

                </View>
                <TouchableOpacity style={styles.signinbtn} activeOpacity={0.8} onPress={() => navigation.navigate('ConsumerProfile')}>
                    <Text style={{ fontSize: 20, fontWeight: '300', color: '#00af91' }}>
                        Create Account
                </Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity style={styles.privacy} activeOpacity={0.8}>
                        <Text style={{ fontSize: 15, fontWeight: '200', color: '#00af91', textDecorationLine: 'underline' }}>
                            Terms and condition
                </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.privacy} activeOpacity={0.8}>
                        <Text style={{ fontSize: 15, fontWeight: '200', color: '#00af91', textDecorationLine: 'underline' }}>
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
        backgroundColor: '#00af91',
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
        marginTop:40,
        fontSize: 25,
        color: '#fff',
    },
    loginbtn: {
        marginHorizontal: 60,
        marginBottom: 30,
        alignItems: 'center',
        backgroundColor: '#00af91',
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
        borderColor: '#00af91',
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
        marginBottom: 10,
        textAlign: 'center',
        backgroundColor: '#00af91',
        borderColor: '#fff',
        borderWidth: 2,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 5,
        borderTopRightRadius: 5,
        elevation: 7
    },

})