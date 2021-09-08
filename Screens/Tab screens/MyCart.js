import React, { useState, useEffect } from 'react';
import { View, Text, Image, StatusBar, FlatList, TextInput, TouchableOpacity, StyleSheet, Dimensions, Alert, RefreshControl, ActivityIndicator, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import cartCard from '/home/naveen/FoodCart/Screens/cartCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { color } from '../../imp';
// import { connect } from 'react-redux'
// import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const columns = 2;

function MyCart({ navigation }) {
    const [data, setData] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [prop, setProp] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [bill, setBill] = useState(0);
    const [show, setShow] = useState(false);

    var quantityTemp = "" + quantity;
    var billTemp = bill;
    console.log(quantity + " " + quantityTemp)
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {

            getData();

            console.log("use Effect in cart")
        });

        return unsubscribe;
    }, [navigation]);
    //   const dataX=[
    //     {id:1,brand:'ABC',description:'Good',image:'https://freepngimg.com/thumb/potato/10-potato-png-images-pictures-download-thumb.png',type:'Potato',rating:4,price:20,grade:'A'},
    //     {id:2,brand:'DEF',description:'very Good',image:'https://freepngimg.com/thumb/potato/10-potato-png-images-pictures-download-thumb.png',type:'Onion',rating:3,price:24,grade:'B'},
    //     {id:3,brand:'AX',description:'nice',image:'https://freepngimg.com/thumb/potato/10-potato-png-images-pictures-download-thumb.png',type:'type3',rating:0,price:20,grade:'C'},
    //     {id:4,brand:'AB',description:'A1',image:'https://freepngimg.com/thumb/potato/10-potato-png-images-pictures-download-thumb.png',type:'type4',rating:4,price:10,grade:'A'},
    //     {id:5,brand:'ABX',description:'pretty',image:'https://freepngimg.com/thumb/potato/10-potato-png-images-pictures-download-thumb.png',type:'type5',rating:4,price:20,grade:'B'},
    //     {id:6,brand:'ACD',description:'Good',image:'https://freepngimg.com/thumb/potato/10-potato-png-images-pictures-download-thumb.png',type:'type1',rating:4,price:20,grade:'B'},
    //     {id:7,brand:'AB',description:'nice',image:'https://freepngimg.com/thumb/potato/10-potato-png-images-pictures-download-thumb.png',type:'type2',rating:5,price:90,grade:'A'},
    //     {id:8,brand:'ABC',description:'Good',image:'https://freepngimg.com/thumb/potato/10-potato-png-images-pictures-download-thumb.png',type:'type6',rating:4,price:25,grade:'C'},
    // ];

    function newQuantity() {

        // setData(data.filter(item => item.props !== props))
        //     AsyncStorage.setItem('Add',JSON.stringify(data.filter(item => item.props !== props)))
        //     // setBill(bill-q*(props.price));
        //     AsyncStorage.getItem('bill', (err, result) => {

        //         if (result !== null) {
        //             var newIds = JSON.parse(result) - props.price * q;
        //             console.log(newIds)
        //             setBill(newIds);
        //             AsyncStorage.setItem('bill', JSON.stringify(newIds));
        //         }
        //         else {
        //             console.log("removed All Items")
        //         }
        //     });

        setQuantity(parseInt(quantityTemp));
        console.log(quantity + " changed to " + quantityTemp);


        setData(data.filter(item => item.props !== prop))
        AsyncStorage.setItem('Add', JSON.stringify(data.filter(item => item.props !== prop)))
        // setBill(bill-q*(props.price));
        AsyncStorage.getItem('bill', (err, result) => {

            if (result !== null) {
                var newIds = JSON.parse(result) - prop.price * quantity;
                billTemp = newIds;
            }
            else {
                console.log("removed All Items")
            }
        });




        AsyncStorage.getItem('Add', (err, result) => {
            var id = [{ "props": prop, "q": parseInt(quantityTemp) }];

            if (result !== null) {

                var p = JSON.parse(result);

                var newIds = JSON.parse(result).concat(id);
                setData(newIds);
                AsyncStorage.setItem('Add', JSON.stringify(newIds));

            } else {

                var id = [{ "props": prop, "q": parseInt(quantityTemp) }];
                setData(id);
                AsyncStorage.setItem('Add', JSON.stringify(id));

            }
        });
        AsyncStorage.getItem('bill', (err, result) => {
            if (result !== null) {
                var newIds = billTemp + prop.price * parseInt(quantityTemp);
                setBill(newIds);
                AsyncStorage.setItem('bill', JSON.stringify(newIds));
            }
            else {
                console.log("J")
                AsyncStorage.setItem('bill', "" + prop.price * parseInt(quantityTemp));
            }
        });
        setShow(false);
    }
    function buyNow() {
        // setData([]);
        // setQuantity([]);

        // setBill(0);
        // AsyncStorage.removeItem('Add');
        // AsyncStorage.setItem('bill', "" + 0);

        console.log("please pay " + bill);
        if (bill != 0) {
            navigation.navigate('payment', { data: data, bill: bill, setData: setData, setBill: setBill })
        }


    }
    function getData() {
        {


            //     fetch( 'http://10.150.36.42:8800/api/products/', {
            //         method: "GET"
            //     })
            //         .then((response) => response.json())
            //         .then(json => setData(json))
            //         .catch(error =>console.log(error)
            //         )
            // }

            AsyncStorage.getItem('Add', (err, result) => {

                if (result !== null) {

                    console.log("In result", result)
                    setData(JSON.parse(result));


                }


            })
            AsyncStorage.getItem('bill', (err, result) => {

                if (result !== null) {

                    console.log("In result", result)
                    setBill(JSON.parse(result));


                }


            })
            // setBill(0);
            // console.log(bill);
            // data.map((a) => {
            //     setBill(bill + (a.props.price) * (a.q));
            // })
            // console.log(data);

        }
    }


    function onRefresh() {
        setRefreshing(true);
        getData();
        setTimeout(() => { setRefreshing(false); }, 500)

    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.93, height: 14 * height / 15 }}>
                <StatusBar backgroundColor={color} />
                {data === [] ?
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 100, color: color }}>
                            You Have No Products in Cart
                        </Text>
                    </View>
                    :
                    <FlatList
                        key={(item) => '' + item.id}
                        data={data}
                        renderItem={({ item }) => cartCard(item.props, setProp, data, setData, setBill, setShow, item.q, setQuantity, quantity, { navigation })}
                        keyExtractor={(item) => '' + item.props.id}
                        refreshControl={<RefreshControl
                            colors={[color, "#689F38"]}
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />}
                    />
                }

                {/* <Text> { props.cartItems.length }</Text> */}
                <Modal
                    transparent={true}
                    visible={show}
                    animationType="fade"
                    statusBarTranslucent={true}
                >
                    <View style={{ flex: 1, backgroundColor: '#00000044', alignContent: 'center', justifyContent: 'center' }}>

                        <View style={{ height: width / 3 }}>
                            <View style={styles.usercardmodal}>
                                <View>


                                </View>
                                <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', paddingBottom: 0 }}>
                                    <View style={{ alignItems: 'flex-start', alignItems: 'center' }} >

                                        <Image style={{ width: 50, height: 50, marginTop: 10 }}
                                            source={{ uri: prop.image }}
                                        />
                                        <Text style={{ color: color, }}>
                                            {prop.brand}
                                        </Text>
                                    </View>
                                    <View style={{ flex: 1, marginLeft: 10, justifyContent: 'center', alignContent: 'center' }}>

                                        <TextInput
                                            allowFontScaling={false}
                                            style={{ color: color, marginVertical: 2, fontSize: 15, padding: 0, borderColor: color, borderWidth: 1, marginRight: 60, paddingLeft: 10, borderRadius: 5 }}
                                            defaultValue={"" + quantity}
                                            keyboardType='decimal-pad'
                                            placeholderTextColor={color}
                                            onChangeText={(text) => {
                                                if (text != "") {
                                                    quantityTemp = "" + text;

                                                }
                                            }}
                                        />

                                    </View>
                                </View>

                                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end', marginRight: 10, marginBottom: 0, flexDirection: 'row' }}>



                                    <TouchableOpacity activeOpacity={0.8} style={styles.btncencel} onPress={() => setShow(false)}>

                                        <Text style={styles.text, { color: color}}>Cencel</Text>

                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        style={styles.button}
                                        onPress={() => newQuantity()}>

                                        <Text style={styles.text, { color: '#fff' }}>Done</Text>

                                    </TouchableOpacity>
                                </View>


                            </View>

                        </View>



                    </View>


                </Modal>

            </View>




            <View style={styles.btns}>
                <TouchableOpacity style={styles.btn1} activeOpacity={0.8} onPress={() => buyNow()}>
                    <Text style={{ fontSize: height / 40, fontWeight: 'bold', color: '#fff', marginStart: width / 20 }} >
                        BUY NOW
                    </Text>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Text style={{ fontSize: height / 40, fontWeight: 'bold', color: '#fff', marginEnd: width / 20 }}>
                            {'\u20B9'} {bill}
                        </Text>

                    </View>
                    <View style={{ alignItems: 'flex-end', marginEnd: width / 20 }}>
                        <Icon name='long-arrow-right' size={width / 10} color="#fff" />

                    </View>

                </TouchableOpacity>
            </View>

        </View>
    )
}

// const mapStateToProps = (state) =>{
//     return{
//         cartItems: state.cart
//     }
// }
export default MyCart;


const styles = StyleSheet.create({
    back: {
        width: "100%",
        height: "100%"
    }, btn1: {
        width: width,
        height: height / 15,
        backgroundColor: color,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',

    },
    btns: {
        flex: 0.07,
        height: height / 15,
        flexDirection: 'row',

    }, button: {
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
})