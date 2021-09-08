import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Dimensions, StyleSheet, ToastAndroid, Alert } from 'react-native';
import RatingBar from '/home/naveen/FoodCart/Screens/ratingBar'
import Icon from 'react-native-vector-icons/FontAwesome';
import { BackHandler } from 'react-native';
import { Badge } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList } from 'react-native-gesture-handler';
import review from '../review';
import { color } from '../../imp';
 
const width = Dimensions.get("window").width;

const reviews = [
    { id: 1, name: "Naveen", rate: 4, review: "The mangoes are properly packed and looked fresh without any damage. Good that it comes with expiry date. However the mangoes are slightly raw when received. I kept it for 2 two days in haystraws to ripen and it got ripened. However the final taste is not sweet" },
    { id: 2, name: "Virender", rate: 5, review: 'I received very decent mangoes in size and Quality. I received 6 mangoes for 2kgs and two of them were sour but fruit wise n quality wise is very good. Taste no one can predict however other mangoes were sweet n good to taste. I have given 4 Stars for this reason for this delivery ofcourse.I definitely n once more recommend this to me or for anyone but this is out of stock currently.' },
    { id: 3, name: "Rahul", rate: 3, review: 'I brought 1kg for Rs.66 and got 3 mangoes. Mangoes are fresh and not even one black spot. Really loved the flavor and my kids enjoyed eating them. Thank you Amazon for maintaining the quality.' },
    { id: 4, name: "Sushil", rate: 4, review: 'The mangoes received were ripe but did not taste sweet. Somehow the mangoes purchased in local markets taste better than Amazon mangoes' }

]
var refx;
export default function Discription({ route, navigation }) {
    
    const { props, name } = route.params;
    const [data, setData] = useState({})
    const [bill, setBill] = useState(0);
    const [i, setI] = useState(0);
    var quantity = 0;
    function qu(q) {
        quantity = q;

    }
    function handleBackButtonClick() {
        console.log('back ');
        
        navigation.goBack();

        return true;

    }
    function getData() {
        {
            AsyncStorage.getItem('Add', (err, result) => {

                if (result !== null) {

                    console.log(JSON.parse(result).length)
                    setI(JSON.parse(result).length);
                }
                else {
                    setI(0);
                }


            })
        }
    }
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getData()
            refx.scrollTo({
                y: 0,
                animated:true
            })
            return () => backHandler.remove();

        });

        return unsubscribe;
    }, [navigation])
    const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        handleBackButtonClick
    );



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
                    setData(newIds)

                    AsyncStorage.setItem('Add', JSON.stringify(newIds));

                } else {

                    var id = [{ "props": props, "q": quantity }];
                    setData(id)
                    AsyncStorage.setItem('Add', JSON.stringify(id));

                }
            });
            AsyncStorage.getItem('bill', (err, result) => {
                console.log("aaaaaaaaaa " + result)
                if (result !== null) {
                    console.log("JSON.parse(result)")
                    var newIds = JSON.parse(result) + props.price * quantity;
                    console.log(newIds)
                    setBill(newIds);
                    AsyncStorage.setItem('bill', JSON.stringify(newIds));
                    ToastAndroid.showWithGravity(quantity + "kg. of " + props.brand + "'s " + { name } + " Added to cart", ToastAndroid.SHORT, ToastAndroid.BOTTOM)
                }
                else {
                    console.log("J")
                    AsyncStorage.setItem('bill', "" + props.price * quantity);
                }
            });

        }
        else {
            ToastAndroid.showWithGravity("Please Add Some more quantity", ToastAndroid.SHORT, ToastAndroid.BOTTOM)
        }


    }
    function buy() {

        if (quantity !== 0) {
            if (i == 0) {
                navigation.navigate('payment', { data: [{ "props": props, "q": quantity }], bill: props.price * quantity, setData: setData, setBill: setBill })
            }
            else {
                Alert.alert("You have " + i + " items in your cart.", "Can you want to buy them also ", [{
                    text: "No",
                    onPress: async () => {
                        // setBill(props.price * quantity)
                        // setData({ "props": props, "q": quantity })

                        navigation.navigate('payment', { data: [{ "props": props, "q": quantity }], bill: props.price * quantity, setData: setData, setBill: setBill })
                    }
                },
                {
                    text: "Sure", onPress: async () => {
                        addToCart()
                        navigation.navigate("MyCart")
                        console.log("->" + bill)
                        
                    }
                }
                ]);
            }
        }
        else {
            ToastAndroid.showWithGravity("Please Add Some more quantity", ToastAndroid.SHORT, ToastAndroid.BOTTOM)
        }

    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.075, backgroundColor: color, flexDirection: 'row', alignItems: 'center', elevation: 10 }}>
                <Icon name='arrow-left' color='#fff' size={25} style={{ marginLeft: 30 }} onPress={() => { navigation.goBack()}} />

                <Text style={{ fontSize: 22, marginLeft: 20, color: '#fff', fontWeight: 'bold' }}>
                    Discription
                </Text>
                <View style={{ marginEnd: width / 15, flex: 1, justifyContent: 'flex-end', flexDirection: 'row' }} >
                    <Icon allowFontScaling={false} name='shopping-cart' color='#fff' size={width / 17} onPress={() => navigation.navigate('MyCart')} />
                    {i > 0 ?
                        <Badge value={i} status="error" containerStyle={styles.badgeStyle} onPress={() => navigation.navigate('MyCart')} />
                        :
                        <View onPress={() => navigation.navigate('MyCart')} ></View>
                    }

                </View>
            </View>
            <View style={{ flexDirection: 'column', flex: 1, backgroundColor: '#fff' }}>

                <ScrollView style={{ flex: 0.855 }} ref={(ref) => refx = ref}>
                    <View style={styles.imgView}>
                        <View style={styles.imgBox}>
                            <Image source={{ uri: props.image }} style={{ flex: 1, resizeMode: 'contain' }} />
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 30, color: 'black' }}>
                                {name}
                            </Text>
                        </View>

                    </View>
                    <View style={styles.discripView}>
                        <Text style={styles.txtprice}>
                            Price   :   {'\u20B9'} {props.price}
                        </Text>


                        <Text style={styles.txt}>
                            Grade   :   {props.grade}
                        </Text>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={styles.txt}>
                                Set Quantitiy :
                            </Text>
                            <Quantitiy maxq={10} Quantitiy={(q) => qu(q)} />
                        </View>

                        <View
                            style={{
                                borderBottomColor: '#DCDCDC',
                                borderBottomWidth: 1,
                                marginVertical: 10
                            }}
                        />
                        <Text style={styles.txt}>
                            Discription   :   {props.description}
                        </Text>
                        <View
                            style={{
                                borderBottomColor: '#DCDCDC',
                                borderBottomWidth: 1,
                                marginVertical: 10
                            }}
                        />
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.txt}>
                                Ratings & Reviews :-
                            </Text>
                            <View style={styles.ratingbar}>

                                <RatingBar rating={props.rating} />
                            </View>
                        </View>

                        <FlatList
                            key={(item) => '' + item.id}
                            data={reviews}
                            renderItem={({ item }) => review(item)}
                            keyExtractor={(item) => '' + item.id}
                            style={{ marginTop: 10 }}
                        />


                    </View>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: "#ddd", marginHorizontal: width / 4 }}></View>
                    <View style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#aaa' }}>
                            {'\u00A9'} FoodCart Pvt Ltd
                        </Text>
                    </View>

                </ScrollView>

                <View style={styles.btns}>
                    <TouchableOpacity style={styles.btn1} activeOpacity={0.8} onPress={() => buy()}>
                        <Text style={{ fontSize: 20, fontWeight: '300', color: color }}>
                            Buy Now
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn2} activeOpacity={0.8} onPress={() => addToCart()}>
                        <Text style={{ fontSize: 20, fontWeight: '300', color: '#fff' }}>
                            Add To Cart
                        </Text>
                    </TouchableOpacity>


                </View>

            </View>

        </View>

    )
}

const styles = StyleSheet.create({

    imgView: {
        height: width,
        backgroundColor: 'white',
        alignItems: 'center',
        elevation: 1,
    },
    imgBox: {
        elevation: 1,
        padding: 10,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        backgroundColor: 'white',
        height: 4 * width / 5,
        width: 4 * width / 5,
        resizeMode: 'contain'
    },
    btns: {
        flex: 0.07,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center"

    },
    btn1: {
        flex: 1,
        height: '100%',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: color,
        alignItems: 'center',
        justifyContent: 'center',

    },
    btn2: {
        flex: 1,
        height: '100%',
        backgroundColor: color,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtprice: {
        fontSize: 23,
        margin: 10,
        marginLeft: width / 10,
        fontWeight: '600'
    },
    txt: {
        fontSize: 20,
        margin: 10,
        marginLeft: width / 10
    },
    discripView: {
        flex: 1,
        backgroundColor: '#fff',

    },
    ratingbar: {
        marginHorizontal: width / 10,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'flex-end'
    }
})