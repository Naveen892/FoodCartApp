import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Dimensions, StyleSheet } from 'react-native';
import RatingBar from '/home/naveen/FoodCart/Screens/ratingBar'
import Icon from 'react-native-vector-icons/FontAwesome';
const width = Dimensions.get("window").width;
export default function Discription({ route ,navigation}) {
    const { price, rating, grade, image, type } = route.params;
    return (
        <View style={{flex:1}}>
            <View style={{ flex: 0.075, backgroundColor: '#00af91', flexDirection: 'row', alignItems: 'center',elevation:10 }}>
                <Icon name='arrow-left' color='#fff' size={25} style={{ marginLeft: 30 }} onPress={() => {navigation.navigate('products')}} />

                <Text style={{ fontSize: 22, marginLeft: 20, color: '#fff', fontWeight: 'bold' }}>
                    Discription
                </Text>
            </View>
            <View style={{ flexDirection: 'column', flex: 1, backgroundColor: '#fff' }}>
            
            <ScrollView style={{ flex: 0.855 }}>
                <View style={styles.imgView}>
                    <View style={styles.imgBox}>
                        <Image source={{ uri: "http://10.150.42.223:8000/"+image }} style={{ flex: 1 }} />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 30 }}>
                            {type}
                        </Text>
                    </View>

                </View>
                <View style={styles.discripView}>
                    <Text style={styles.txtprice}>
                        Price   :   {'\u20B9'} {price}
                    </Text>
                    <View style={styles.ratingbar}>
                        
                        <RatingBar rating={rating} />
                    </View>

                    <Text style={styles.txt}>
                        Grade   :   {grade}
                    </Text>
                    <View
                        style={{
                            borderBottomColor: '#DCDCDC',
                            borderBottomWidth: 1,
                            marginVertical:10
                        }}
                    />
                    <Text style={styles.txt}>
                        Discription   :   xyz
                    </Text>


                </View>

            </ScrollView>

            <View style={styles.btns}>
                <TouchableOpacity style={styles.btn1} activeOpacity={0.8}>
                    <Text style={{ fontSize: 20, fontWeight: '300', color: '#00af91' }}>
                        Buy Now
                </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn2} activeOpacity={0.8}>
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
        elevation: 4,
        padding: 10,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        backgroundColor: 'white',
        height: 4 * width / 5,
        width: 4 * width / 5
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
        borderColor: '#00af91',
        alignItems: 'center',
        justifyContent: 'center',

    },
    btn2: {
        flex: 1,
        height: '100%',
        backgroundColor: '#00af91',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtprice: {
        fontSize: 23,
        margin: 10,
        marginLeft:width/10,
        fontWeight:'600'
    },
    txt:{
        fontSize: 20,
        margin: 10,
        marginLeft:width/10
    },
    discripView: {
        flex: 1,
        backgroundColor: '#fff',
        
    },
    ratingbar: {
        marginHorizontal: width/10,
        margin:10,
        flexDirection:'row'
    }
})