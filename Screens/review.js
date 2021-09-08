import React from 'react';
import RatingBar from '/home/naveen/FoodCart/Screens/ratingBar.js';
import { Text, View, Button, TouchableOpacity, Image, StyleSheet, Dimensions, TextInput, ToastAndroid } from 'react-native';

const width = Dimensions.get("window").width;
export default function review(item) {
    return (
        <View style={styles.card}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 17, marginRight: 10 }}>
                    {item.name}
                </Text>
                <View style={{justifyContent:'flex-end',alignContent:'flex-end',alignItems:'flex-end',flex:1}}>
                    <RatingBar
                        rating={item.rate}
                    />
                </View>


            </View>

            <Text style={{ marginTop: 10 }}>
                {item.review}
            </Text>

        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        width: width,
        paddingHorizontal: width / 10,
        borderTopColor: '#DCDCDC',
        borderTopWidth: 1,
        paddingVertical: 10

    }
})