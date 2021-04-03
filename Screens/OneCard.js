import React from 'react';
import RatingBar from '/home/naveen/FoodCart/Screens/ratingBar.js';
import { Text, View, Button, TouchableOpacity, Image, StyleSheet, Dimensions, TextInput } from 'react-native';

import Quantitiy from '/home/naveen/FoodCart/Screens/quantity'
const width = Dimensions.get('window').width;

export default function OneCard(props, { navigation }) {
    return (
        <View style={styles.card} >
            <View style={{alignContent:'center',justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity style={{ margin: 10, elevation: 10, width: 2*width / 7, backgroundColor: 'white', height: 2*width / 7, borderRadius: 7, alignItems: 'center' }} activeOpacity={0.8} onPress={() => navigation.navigate('Discription', { price: props.price, rating: props.rating, grade: props.grade, image: props.image, type: props.type })}>
                <Image
                    style={styles.image}
                    source={{
                        uri: props.image,
                    }}
                />
                
            </TouchableOpacity>
            <Text style={{color:'#00af91',marginTop:5}}>
                    Brand Name
                </Text>

            </View>
            
            <View >
                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                    <View style={{ margin: 15, marginBottom: 5,marginEnd:25 }}>

                        <Text style={styles.text, {fontSize: width/27, marginBottom: 10, fontWeight: 'bold' }}>Price - {'\u20B9'} {props.price}</Text>
                        <RatingBar rating={props.rating} />

                    </View>
                    <View style={styles.btns, { margin: 0 }}>
                        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
                            <Text style={styles.text, { color: '#fff' }}>Add</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
                            <Text style={styles.text, { color: '#fff' }}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginLeft: 15,marginTop:7 }}>
                    <Text style={{fontSize:width/30}}>
                        Discription : adasf ,asdas ...
                    </Text>
                </View>
                <Quantitiy maxq={10}/>
                
            </View>




        </View>

    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        margin: 6,
        elevation: 2,
        padding: 2,
        borderRadius: 7,
        height: width / 2,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 2*width / 7,
        height: 2*width / 7,
        resizeMode: "cover"
    },
    text: {
        fontSize: width/30,
        color: 'black',

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
        elevation: 7
    },
    btns: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 10,
        alignItems: 'center'
    },

})


