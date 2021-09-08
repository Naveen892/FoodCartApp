
import React from 'react';
import { Text, View, Button, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import {color} from "/home/naveen/FoodCart/imp.js";
const width = Dimensions.get('window').width;
import Icon from 'react-native-vector-icons/FontAwesome'

export default function orederHistoryCard(props, { navigation }) {




    return (
        // onpress for card
        // onPress={()=>navigation.navigate('Discription',{price: props.price , rating: props.rating ,grade: props.grade,image: props.image,type: props.type })}


        <TouchableOpacity style={styles.card} activeOpacity={0.9} >
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Icon name='check-square-o' size={60} color={color} style={{ marginLeft: 20 }} />
                <View style={{ marginLeft: 30 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold',marginBottom:10 }}>
                        {props.type}
                    </Text>
                    <Text style={{ fontSize: 15 }}>
                        Price : {'\u20B9'} {props.price}
                    </Text>

                    <Text style={{ fontSize: 15 }}>
                        Quantiiy : {props.quantity} kg.
                </Text>
                </View>
            </View>

            <View style={{ flex: 1, alignItems: 'flex-end'}}>
                <Text style={{marginRight:15,marginTop:15}}>
                    {props.grade}
                </Text>
                <Text style={{marginRight:70,fontSize:10, fontStyle:'italic',marginTop:10,color:'#aaa'}} >
                    Order Delivered At
                </Text>
                <Text style={{marginRight:10,borderColor:'#d89216',borderWidth:1,paddingHorizontal:7,borderRadius:5,color:'#d89216'}}>
                    Date : 26 / 3 / 21
                </Text>
            </View>


        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        marginHorizontal: 10,
        margin: 6,

        elevation: 2,
        padding: 2,
        borderRadius: 7,
        height: width / 3,
        backgroundColor: '#fff',
        flexDirection: 'row',
    },

})


