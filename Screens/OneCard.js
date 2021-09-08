import React from 'react';
import RatingBar from '/home/naveen/FoodCart/Screens/ratingBar.js';
import { Text, View, Button, TouchableOpacity, Image, StyleSheet, Dimensions, TextInput, ToastAndroid } from 'react-native';

// import { connect } from 'react-redux'
import {color} from "/home/naveen/FoodCart/imp.js";
import Quantitiy from '/home/naveen/FoodCart/Screens/quantity'
// import { State } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
const width = Dimensions.get('window').width;


function OneCard(props, i, setI, type, {navigation}) {


    var t = true;
    var quantity = 0;
    function qu(q) {
        quantity = q;
    }

    function addToCart() {


        // try {
        //     // console.log("1")
        //     // var item = AsyncStorage.getItem('cartItem') ;
        //     // console.log(item)
        //     // item.push({ "brand": props.brand });
        //     // AsyncStorage.setItem('cartItem', JSON.stringify(item));
        //     // console.log("3")
        //     // console.log(JSON.parse(AsyncStorage.getItem('cartItem')))

        // }
        // catch (error) {
        //     console.log(error)
        // }
        if (quantity !== 0) {
            setI(i + 1);

            AsyncStorage.getItem('Add', (err, result) => {

                var id = [{ "props": props, "q": quantity }];
                
                if (result !== null) {

                    var p = JSON.parse(result);

                    var newIds = JSON.parse(result).concat(id);

                    AsyncStorage.setItem('Add', JSON.stringify(newIds));

                } else {

                    var id = [{ "props": props, "q": quantity }];
                    
                    AsyncStorage.setItem('Add', JSON.stringify(id));

                }
            });
            AsyncStorage.getItem('bill', (err, result) => {
                console.log("aaaaaaaaaa " + result)
                if (result !== null) {
                    console.log("JSON.parse(result)")
                    var newIds = JSON.parse(result) + props.price * quantity;
                    console.log(newIds)
                    AsyncStorage.setItem('bill', JSON.stringify(newIds));
                    ToastAndroid.showWithGravity(quantity+"kg. of "+props.brand+"'s "+type+" Added to cart",ToastAndroid.SHORT,ToastAndroid.BOTTOM)
                }
                else {
                    console.log("J")
                    AsyncStorage.setItem('bill', "" + props.price * quantity);
                }
            });

        }
        else{
            ToastAndroid.showWithGravity("Please Add Some more quantity",ToastAndroid.SHORT,ToastAndroid.BOTTOM)
        }


    }
    return (
        <View style={styles.card} >
            <View style={{ alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={{ margin: 10, elevation: 10, width: 2 * width / 7, backgroundColor: 'white', height: 2 * width / 7, borderRadius: 7, alignItems: 'center' }} activeOpacity={0.8} onPress={() => navigation.navigate('Discription', { props:props, name: type  })}>

                    <Image style={styles.image}
                        source={{ uri: props.image }}
                    />
                </TouchableOpacity>
                <Text style={{ color: color , marginTop: 5 }}>
                    {props.brand}
                </Text>

            </View>

            <View >
                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                    <View style={{ margin: 15, marginBottom: 5, marginEnd: 25 }}>

                        <Text style={styles.text, { fontSize: width / 27, marginBottom: 10, fontWeight: 'bold' }}>Price - {'\u20B9'} {props.price}</Text>
                        <RatingBar rating={props.rating} />

                    </View>
                    <View style={styles.btns, { margin: 0 }}>
                        <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => addToCart()} >
                                    <Text style={styles.text}>
                                        Add
                                    </Text>

                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
                            <Text style={styles.text}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginLeft: 15, marginTop: 7 }}>
                    <Text style={{ fontSize: width / 30 }}>
                        Discription : {(props.description).length < 12 ? props.description : ("" + props.description).substring(0, 12) + "..."}
                    </Text>
                </View>
                <Quantitiy maxq={10} Quantitiy={(q) => qu(q)} />

            </View>




        </View>

    )
}

// const mapDispatchToProps = async(dispatch, getState) => {
//     return ({
//         addItemToCart:(product) => dispatch({ type:
//         'CART_ADD_ITEM', payload: product})

//     },
//     await AsyncStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
//     )



// }

export default OneCard;

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
        width: 2 * width / 7,
        height: 2 * width / 7,
        resizeMode: 'contain',
        borderRadius: 3
    },
    text: {
        fontSize: width / 30,
        color: '#fff',

    },
    button: {
        backgroundColor: color,
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


