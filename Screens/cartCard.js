import React from 'react';
import RatingBar from '/home/naveen/FoodCart/Screens/ratingBar.js';
import { Text, View, Modal, TouchableOpacity, Image, StyleSheet, Dimensions, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Quantitiy from '/home/naveen/FoodCart/Screens/quantity'
import {color} from "/home/naveen/FoodCart/imp.js";
const width = Dimensions.get('window').width;

export default function cartCard(props, setProp, data, setData, setBill, setShow, q, setQuantity,quantity, { navigation }) {
    // const addToCart = async() => {
    //     await AsyncStorage.setItem('cartItem', )
    // }
// var quantityTemp=0;
    function showModal() {
        // setBill(bill+q*(props.price));
        // console.log(q*(props.price) +" " + bill);
        console.log(q);
        setProp(props);
        setQuantity(q)
        setShow(true)

    }
    // function newQuantity(){
    
            
    //         AsyncStorage.getItem('Add', (err, result) => {
    //             var id = [{ "props": props, "q": quantity }];
                
    //             if (result !== null) {
        
    //                 var p = JSON.parse(result);
        
    //                 var newIds = JSON.parse(result).concat(id);
        
    //                 AsyncStorage.setItem('Add', JSON.stringify(newIds));
        
    //             } else {
        
    //                 var id = [{ "props": props, "q": quantity }];
                    
    //                 AsyncStorage.setItem('Add', JSON.stringify(id));
        
    //             }
    //         });
    //         AsyncStorage.getItem('bill', (err, result) => {
    //             console.log("aaaaaaaaaa " + result)
    //             if (result !== null) {
    //                 console.log("JSON.parse(result)")
    //                 var newIds = JSON.parse(result) + props.price * quantity;
    //                 console.log(newIds)
    //                 AsyncStorage.setItem('bill', JSON.stringify(newIds));
    //             }
    //             else {
    //                 console.log("J")
    //                 AsyncStorage.setItem('bill', "" + props.price * quantity);
    //             }
    //         });
    //         remove();
    //         setShow(false);
        
    //     }
    function remove() {
        setData(data.filter(item => item.props !== props))
        AsyncStorage.setItem('Add', JSON.stringify(data.filter(item => item.props !== props)))
        // setBill(bill-q*(props.price));
        AsyncStorage.getItem('bill', (err, result) => {

            if (result !== null) {
                var newIds = JSON.parse(result) - props.price * q;
                console.log(newIds)
                setBill(newIds);
                AsyncStorage.setItem('bill', JSON.stringify(newIds));
            }
            else {
                console.log("removed All Items")
            }
        });

        console.log("removed " + props.brand)
    }


    return (
        <View style={styles.card} >
            {/* <Modal
                transparent={true}
                visible={show}
                animationType="fade"
                statusBarTranslucent={true}
            >
                <View style={{ flex: 1, backgroundColor: '#00000044', alignContent: 'center', justifyContent: 'center' }}>

                    <View style={{ height: width / 3 }}>
                        <View style={styles.usercardmodal}>
                            <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', paddingBottom: 0 }}>
                                <View style={{ flex: 1, marginLeft: 10, justifyContent: 'center', alignContent: 'center' }}>

                                    <TextInput
                                        style={{ color: color, marginVertical: 2, fontSize: 15, padding: 0, borderColor: color, borderWidth: 1, marginRight: 60, paddingLeft: 10, borderRadius: 5 }}
                                        defaultValue={""+quantity}
                                        keyboardType='decimal-pad'
                                        placeholderTextColor=color
                                        onChange={(text) => { if (text != 0) quantityTemp ="" + text }}
                                    />

                                </View>
                            </View>

                            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end', marginRight: 10, marginBottom: 0, flexDirection: 'row' }}>
                                <TouchableOpacity activeOpacity={0.8} style={styles.btncencel} onPress={() => setShow(false)}>

                                    <Text style={styles.text, { color: color }}>Cencel</Text>

                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={styles.button}
                                    onPress={() =>newQuantity() }>

                                    <Text style={styles.text, { color: '#fff' }}>Done</Text>

                                </TouchableOpacity>
                            </View>


                        </View>

                    </View>



                </View>


            </Modal> */}
            <View style={{ alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={{ margin: 10, elevation: 10, width: 2 * width / 7, backgroundColor: 'white', height: 2 * width / 7, borderRadius: 7, alignItems: 'center' }} activeOpacity={0.8} onPress={() => navigation.navigate('Discription', { price: props.price, rating: props.rating, grade: props.grade, image: props.image, name: props.name })}>

                    <Image style={styles.image}
                        source={{ uri: props.image }}
                    />
                </TouchableOpacity>
                <Text style={{ color: color, marginTop: 5 }}>
                    {props.brand}
                </Text>

            </View>

            <View >
                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                    <View style={{ margin: 15, marginBottom: 5, marginEnd: 25 }}>

                        <Text style={ {fontSize: width / 27, marginBottom: 10, fontWeight: 'bold',color:'#000'} }>Price - {'\u20B9'} {props.price}</Text>
                        <Text style={{fontSize: width / 30, fontWeight: '200',color:'#000'}}>Total - {q * (props.price)}</Text>

                    </View>
                    <View style={styles.btns, { margin: 0 }}>
                        <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => remove()}>
                            <Text style={styles.text}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <Quantitiy maxq={10}/> */}
                <View style={{ flexDirection: 'row', marginLeft: 15, alignItems: 'center' }}>
                    <Text style={{ paddingHorizontal: 5, paddingVertical: 3, borderColor: '#d89216', borderRadius: 5, borderWidth: 1 }}>
                        {q} kg.
                    </Text>
                    <Text style={{ padding: 5, color: '#d89216' }} onPress={() => showModal()} >
                        Change
                    </Text>
                </View>
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
        height: width / 2 - 5,
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
        elevation: 7,
    },
    btncencel: {
        backgroundColor: "#fff",
        marginEnd: 10,
        alignItems: 'center',
        width: 100,
        borderColor: color,
        borderWidth: 2,
        margin: 1,
        padding: 2,
        borderBottomRightRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 2,
        borderTopRightRadius: 2,
        elevation: 7,
    }, usercardmodal: {
        padding: 20,
        flex: 0.9,
        backgroundColor: '#fff',
        margin: 20,

        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        marginBottom: 0,
        borderRadius: 10,
        elevation: 10,
    },
    btns: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 10,
        alignItems: 'center'
    },

})


