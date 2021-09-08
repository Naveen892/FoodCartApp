


import React, { useState,useEffect } from 'react';
import { View,Vibration, TouchableOpacity, Dimensions, TextInput, Text ,ToastAndroid} from 'react-native';
import { max } from 'react-native-reanimated';
const width = Dimensions.get('window').width;

import Icon from 'react-native-vector-icons/FontAwesome';


export default Quantitiy = ({ maxq ,Quantitiy}) => {
    const [q, setQ] = useState(0);
    
   
    function changeText(inputText) {
        const x = inputText;
        if (x.length > 0) {
            if (parseInt(x) > maxq) {
                ToastAndroid.show("Sorry We Have Maximum "+ maxq+" kg !",
                
                ToastAndroid.LONG,ToastAndroid.BOTTOM);
                Vibration.vibrate(500)
            }
            else {
                setQ(parseInt(x));
                Quantitiy(parseInt(x))
            }
        }
    }
    function endEditing() {
        const x = q;
        setQ(parseInt(x));
        Quantitiy(parseInt(x))
    }


    
    return (
        <View style={{ flexDirection: 'row', borderRadius: 5, borderWidth: 1, borderColor: '#d89216', width: width / 3, marginLeft: 15,height:width/15, marginTop: 15 }}>
            <TouchableOpacity style={{ backgroundColor: '#d89216', borderTopLeftRadius: 5, borderBottomLeftRadius: 5, width: width / 12, alignContent: 'center', alignItems: 'center', justifyContent: 'center' }} onPress={() => { if (q > 0) {setQ(q - 1),Quantitiy(q-1)}}} activeOpacity={0.8}>
                <Icon name='minus' color='#fff' size={width / 30} />
            </TouchableOpacity>
            <TextInput allowFontScaling={false} style={{ width: width / 6, color: '#d89216', fontSize: width / 26, height: width / 15, padding: 0, paddingStart: 10, paddingRight: 10, textAlign: 'center' }} defaultValue={"" + q} keyboardType={'decimal-pad'} maxLength={maxq.toString().length} onChangeText={(text) => changeText(text)} onEndEditing={() => endEditing()} />

            <TouchableOpacity style={{ backgroundColor: '#d89216', borderTopRightRadius: 5, borderBottomRightRadius: 5, width: width / 12, alignContent: 'center', alignItems: 'center', justifyContent: 'center' }} onPress={() => { if (q < maxq) {setQ(q + 1),Quantitiy(q+1)} }} activeOpacity={0.8}>
                <Icon name='plus' color='#fff' size={width / 30} />
            </TouchableOpacity>
            <Text style={{ fontSize: width / 28, marginLeft: 10 }}>kg.</Text>

        </View>
    )
}


