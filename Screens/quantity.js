


import React, { useState } from 'react';
import { View, TouchableOpacity, Dimensions, TextInput, Text } from 'react-native';
const width = Dimensions.get('window').width;

import Icon from 'react-native-vector-icons/FontAwesome';


const Quantitiy = ({ maxq }) => {

    function changeText(inputText) {
        const x = inputText;
        if (x.length > 0) {
            setQ(parseInt(x));
        }
    }
    function endEditing() {
        const x = q;
        setQ(parseInt(x));
    }


    const [q, setQ] = useState(0);
    return (
        <View style={{ flexDirection: 'row', borderRadius: 5, borderWidth: 1, borderColor: '#d89216', width: width / 3, marginLeft: 15, flex: 0.3, marginTop: 15 }}>
            <TouchableOpacity style={{ backgroundColor: '#d89216', borderTopLeftRadius: 5, borderBottomLeftRadius: 5, width: width / 12, alignContent: 'center', alignItems: 'center', justifyContent: 'center' }} onPress={() => { if (q > 0) setQ(q - 1) }} activeOpacity={0.8}>
                <Icon name='minus' color='#fff' size={width / 30} />
            </TouchableOpacity>
            <TextInput style={{ width: width / 6, color: '#d89216', fontSize: width / 26, height: width / 15, padding: 0, paddingStart: 10, paddingRight: 10, textAlign: 'center' }} defaultValue={"" + q} keyboardType={'decimal-pad'} maxLength={4} onChangeText={(text) => changeText(text)} onEndEditing={() => endEditing()} />

            <TouchableOpacity style={{ backgroundColor: '#d89216', borderTopRightRadius: 5, borderBottomRightRadius: 5, width: width / 12, alignContent: 'center', alignItems: 'center', justifyContent: 'center' }} onPress={() => { if (q < maxq) setQ(q + 1) }} activeOpacity={0.8}>
                <Icon name='plus' color='#fff' size={width / 30} />
            </TouchableOpacity>
            <Text style={{ fontSize: width / 28, marginLeft: 10 }}>kg.</Text>

        </View>
    )
}


export default Quantitiy;


