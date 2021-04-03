import React from 'react';
import { Text, View, Button, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;


export default function MyProductCard(props,{navigation}) {

    


    return (
        <TouchableOpacity style={styles.card} activeOpacity={0.8} >
            <View style={{ margin: 10, elevation: 10, width: 3*width / 10, backgroundColor: 'white', height: 3*width / 10, borderRadius: 7, alignItems: 'center',flexDirection:'row',alignItems:'center' }}>
                <Image
                    style={styles.image}
                    source={{
                        uri: props.image,
                    }}
                />
                </View>
            <View style={{ marginLeft: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold',marginBottom:10 }}>
                        {props.type}
                    </Text>
                    <Text style={{ fontSize: 15 }}>
                        Price : {'\u20B9'} {props.price}
                    </Text>

                    <Text style={{ fontSize: 15 }}>
                        Max. Quantitiy : 
                        
                </Text>
                <View style={{borderWidth:1,borderRadius:4,width:100,alignItems:'center',justifyContent:'center',borderColor:'#d89216',flexDirection:'row'}}>
                        <Text >
                            200
                        </Text>
                        <Text style={{ fontSize: 15 }}> kg.</Text>

                        </View>
                
                </View>
                <View style={{alignContent:'flex-end',alignItems:'flex-end',justifyContent:'flex-end',flexDirection:'column',flex:1,height:width/2,marginBottom:40,marginRight:20}}>
                <TouchableOpacity activeOpacity={0.8} style={styles.button}>
                            <Text style={styles.text, { color: '#fff' }}>Remove</Text>
                        </TouchableOpacity>

                </View>
                
            

            




        </TouchableOpacity>

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
        alignItems:'center'
    },
    image: {
        width: 3*width / 10,
        height: 3*width / 10,
        resizeMode: "cover"
    },
    text: {
        fontSize: 15,
        color: 'black',

    },
    button: {
        backgroundColor: "#00af91",
        alignItems: 'center',
        width: 100,
        borderColor: '#fff',
        borderWidth: 2,
        margin:1,
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


