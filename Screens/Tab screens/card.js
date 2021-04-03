import { WrapText } from '@material-ui/icons';
import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width;


export default function Card( props, {navigation }) {

    return (
        <TouchableOpacity onPress={() => navigation.navigate('products')} style={styles.card} activeOpacity={0.7}>

            <Image
                style={styles.image}
                source={{
                    uri: props.image,
                }}
            />

            <Text style={styles.text}>{props.type}</Text>


        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        margin: 6,
        elevation: 2,
        padding: 10,
        borderRadius: 7,
        width: width / 2,
        height: width / 2,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "center",
        
    },
    image: {
        width: 2 * width / 5,
        height: width / 4 + 1,
        margin: 20
    },
    text: {
        fontSize: width/21,
        color: 'black'
    }

})


