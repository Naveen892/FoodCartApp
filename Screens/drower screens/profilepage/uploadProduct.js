import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions, StyleSheet, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';
import {color} from "/home/naveen/FoodCart/imp.js";
import Quantitiy from '/home/naveen/FoodCart/Screens/quantity'
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
export default function UploadProduct({ navigation }) {
    const [checked, setChecked] = React.useState('A');
    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: height / 12, backgroundColor: color, flexDirection: 'row', alignItems: 'center', elevation: 10 }}>
                <Icon name='arrow-left' color='#fff' size={25} style={{ marginLeft: 30 }} onPress={() => { navigation.navigate('RetailerProfile') }} />

                <Text style={{ fontSize: 22, marginLeft: 20, color: '#fff', }}>
                    Upload Product
                </Text>
            </View>
            <View style={{ flex: 1 }}>
                <ScrollView style={{ backgroundColor: '#fff' }}>


                    <View style={{ flexDirection: 'row', }}>
                        <View style={{alignItems:'center'}}>
                            <Text style={{ fontSize: 15, color: color, marginTop: height / 20 }}>
                                <Text style={{ color: 'red' }}>*</Text>Upload Image
                            </Text>
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: width / 2, marginTop: 15 }}>
                                <TouchableOpacity style={{ height: height / 10, width: height / 10, borderRadius: height / 20, borderWidth: 2, borderColor: '#bbb', alignItems: 'center', justifyContent: 'center' }} activeOpacity={0.9} >
                                    <Image source={{ uri: 'https://freepngimg.com/thumb/potato/10-potato-png-images-pictures-download-thumb.png' }} style={{ height: height / 11, width: height / 11, borderRadius: height / 20, }} />


                                </TouchableOpacity>

                            </View>
                        </View>

                        <View style={{}}>
                            <Text style={{ fontSize: 15, color: color, marginTop: height / 20 }}>
                                <Text style={{ color: 'red' }}>*</Text>Product Grade
                            </Text>
                            <View style={{ flexDirection: 'row', marginLeft: 15 }}>
                                <View style={{ flexDirection: 'column', justifyContent: 'center' }}>


                                    <RadioButton
                                        value="A"
                                        status={checked === 'A' ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked('A')}
                                    />
                                    <RadioButton
                                        value="B"
                                        status={checked === 'B' ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked('B')}
                                    />
                                    <RadioButton
                                        value="C"
                                        status={checked === 'C' ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked('C')}
                                    />


                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 20, marginLeft: 5, marginTop: 2 }}>
                                        A
                                    </Text>
                                    <Text style={{ fontSize: 20, marginLeft: 5, marginTop: 7 }}>
                                        B
                                    </Text>
                                    <Text style={{ fontSize: 20, marginLeft: 5, marginTop: 7 }}>
                                        C
                                    </Text>
                                </View>

                            </View>



                        </View>





                    </View>
                    <Text style={{ marginLeft: height / 16, fontSize: 15, color: color, marginTop: height / 20 }}>
                        <Text style={{ color: 'red' }}>*</Text>Product Name
                        </Text>
                    <View style={styles.input}>

                        <TextInput
                        allowFontScaling={false}
                            placeholder='Please Enter Name Of Product'
                            placeholderTextColor='#ccc'
                            style={{color:'black'}}
                        />

                    </View>
                    <Text style={{ marginLeft: height / 16, fontSize: 15, color: color, marginTop: height / 30 }}>
                        <Text style={{ color: 'red' }}>*</Text>Product Price
                        </Text>
                    <View style={styles.input}>

                        <TextInput
                        allowFontScaling={false}
                            placeholder='Please Enter Price Of Product'
                            placeholderTextColor='#ccc'
                            style={{color:'black'}}
                            keyboardType='decimal-pad'
                        />

                    </View>


                    <Text style={{ marginLeft: height / 16, fontSize: 15, color: color, marginTop: height / 30 }}>
                        <Text style={{ color: 'red' }}>*</Text>Product Discription
                        </Text>
                    <View style={styles.input}>

                        <TextInput
                        allowFontScaling={false}
                            placeholder='Please Enter Some Discription Of Product'
                            placeholderTextColor='#ccc'
                            keyboardType='default'
                            style={{color:'black'}}
                        />

                    </View>


                    <Text style={{ marginLeft: height / 16, fontSize: 15, color: color, marginTop: height / 30 }}>
                        <Text style={{ color: 'red' }}>*</Text>Max Quantity That you can Provide To Consumer
                        </Text>
                    <View style={{ alignItems: 'center' }}>
                        <Quantitiy maxq={9999} />

                    </View>


                </ScrollView>
            </View>
            <TouchableOpacity style={{ height: height / 18, backgroundColor: color, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} activeOpacity={0.8}>
                <Icon name='upload' color='#fff' size={height / 40} style={{ marginRight: 10 }} /><Text style={{ fontSize: height / 40, color: '#fff' }}> Upload</Text>
            </TouchableOpacity>
        </View>
    )
}



const styles = StyleSheet.create({
    input: {
        marginHorizontal: height / 20,
        marginBottom: 10,
        alignItems:'center',
        backgroundColor: '#fff',
        borderColor: color,
        borderWidth: 2,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 5,
        borderTopRightRadius: 5,
        elevation: 7,
    },
})