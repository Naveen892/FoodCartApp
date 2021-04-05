import React ,{useState,useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Dimensions,Vibration,ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
const height = Dimensions.get('window').height;

function LogInConsumer({ navigation }) {
    const [username,setUserName] = useState("");
    const [password,setPassword] = useState("");

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          console.log('Refreshed!');
          window.location.reload(false);
        });
        return unsubscribe;
      }, [navigation]);


    
    
    const logIn=async()=>{
        if(username === user && password === pass){
            navigation.navigate('ConsumerProfile')
            await AsyncStorage.setItem('isLoggedIn', '1')
        }
        else{
            ToastAndroid.show("Incorrect User Name or Password",
                
                ToastAndroid.LONG,ToastAndroid.BOTTOM);
            Vibration.vibrate(600);
    
        }
    }
    const user='Naveen';
    const pass='Naveen@123';

    return (
        <ScrollView>
            <View style={{ flex: 1, height: height }}>
                <View style={styles.upperView}>
                    <View style={{ flexDirection: 'row', }}>
                        <Icon name='arrow-left' style={{ margin: 40 }} size={25} color='#fff' onPress={() => navigation.navigate('My Profile')} />
                        <View style={{ alignItems: 'flex-end', flex: 1 }}>
                            <Text style={styles.name}>Consumer</Text>

                        </View>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{fontSize: 25,color: '#fff',}}>
                            LogIn In Your Existing 
                        </Text>
                        <Text style={{fontSize: 25,color: '#fff',}}>
                            Account
                        </Text>
                    </View>
                    
                    <Text style={{ marginHorizontal: 80, marginBottom: 5, fontSize: 15, color: '#fff' }}>
                        <Text style={{color:'red'}}>*</Text>Your UserName
                        </Text>
                    <View style={styles.input}>

                        <TextInput
                            placeholder='Please Enter Your User Name'
                            placeholderTextColor='#ccc'
                            onChangeText={(text)=>setUserName(text)}
                        />

                    </View>
                    <Text style={{ marginHorizontal: 80, marginBottom: 5, fontSize: 15, color: '#fff' }}>
                        <Text style={{color:'red'}}>*</Text>Your Password
                        </Text>
                    <View style={styles.input}>

                        <TextInput
                            placeholder='Please Enter Your Password'
                            placeholderTextColor='#ccc'
                            onChangeText={(text)=>setPassword(text)}
                        />

                    </View>
                    
                    
                    
                </View>
                
                <View style={styles.lowerView}>
                <View style={{alignItems:'center'}}>
                        <TouchableOpacity activeOpacity={0.8}>
                            <Text style={{fontSize:15,color: '#00af91',textDecorationLine: 'underline' ,marginBottom:17}}>
                             Forgot Password 
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.loginbtn} activeOpacity={0.8} onPress={()=>logIn()}>
                        <Text style={{ fontSize: 20, fontWeight: '300', color: '#fff' }}>
                            LogIn
                </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signinbtn} activeOpacity={0.8} onPress={()=>navigation.navigate('Consumer')}>
                        <Text style={{ fontSize: 20, fontWeight: '300', color: '#00af91' }}>
                            Create New Account
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

            </View>
        </ScrollView>


    )
}

export default LogInConsumer;

const styles = StyleSheet.create({
    upperView: {
        flex: 2,
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
        margin: 40,
        fontSize: 25,
        color: '#fff',
    },
    loginbtn: {
        marginHorizontal: 60,
        marginBottom: 30,
        alignItems: 'center',
        backgroundColor: '#00af91',
        borderColor:'#fff',
        borderWidth:2,
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
        margin: 40,
        fontSize: 25,
        color: '#fff',
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
        marginBottom: 30,
        alignItems: 'center',
        backgroundColor: '#00af91',
        borderColor: '#fff',
        borderWidth: 2,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 5,
        borderTopRightRadius: 5,
        elevation: 7
    }

})