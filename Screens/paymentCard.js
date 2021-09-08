import React from 'react';
import { Text, View, Button, TouchableOpacity, Image, StyleSheet, Dimensions, TextInput, ToastAndroid } from 'react-native';


export default function paymentCard(data) {

    return (
        <View style={{flex:1,flexDirection:'row'}}>
            <View style={styles.box}>
                <Image style={{height:40,width:40}}
                source={{uri:data.props.image}}
                />
                    
            </View>
            
            
            
            
            
            <View style={styles.box}>
                <Text >
                    {data.props.brand}
                </Text>
            </View>
            
            
            <View style={styles.box}>
                <Text >
                    {data.props.price}
                </Text>
            </View>
            
            
            <View style={styles.box}>
                <Text >
                    {data.q}
                </Text>
            </View>
            
            
            <View style={styles.box}>
                <Text >
                    {data.props.price * data.q}
                </Text>
            </View>

        </View>

    )
}

const styles=StyleSheet.create({
    box:{
        borderColor:'black',
        borderBottomWidth:1,
        borderRightWidth:1,
        flex:1,
        height:35,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center'
    }
})