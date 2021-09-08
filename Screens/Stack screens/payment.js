import React from 'react';
import { View, Text, StatusBar, FlatList, ScrollView,StyleSheet,Dimensions,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import paymentCard from '../paymentCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNUpiPayment from 'react-native-upi-payment';
import { color } from '../../imp';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function payment({ route, navigation }) {
    const { data, bill,setData,setBill } = route.params;

    function payNow(){
        // setData([]);
        
        RNUpiPayment.initializePayment({
            vpa: '9413614458@upi', // or can be john@ybl or mobileNo@upi
            payeeName: 'Nathu Ram',
            amount: bill,
            transactionRef: 'aasf-332-aoei-fn'
          }, ()=>{console.log("success")}, ()=>{console.log("fail")});



        // setBill(0);
        // console.log("paid")
        // AsyncStorage.removeItem('Add');
        // AsyncStorage.setItem('bill', "" + 0);

    }
    
    return (
        <View style={{ flex: 1,backgroundColor:'#fff' }}>
            <View style={{ flex: 0.1, backgroundColor: color, flexDirection: 'row', alignItems: 'center', elevation: 10 }}>
                <Icon name='arrow-left' color='#fff' size={25} style={{ marginLeft: 30 }} onPress={() =>  navigation.goBack() } />

                <Text style={{ fontSize: 22, marginLeft: 20, color: '#fff', }}>
                    Payments
                </Text>
                <StatusBar backgroundColor={color} />

            </View>
            <ScrollView style={{ flex: 1,marginTop:20 }}>
                <View style={{}}>
                    <View style={{ flex: 1, flexDirection: 'row' ,marginHorizontal: 15, borderLeftWidth: 1}}>
                        <View style={styles.box}>
                            <Text>
                                Image
                            </Text>

                        </View>
                        <View style={styles.box}>
                            <Text >
                                Brand
                            </Text>
                        </View>


                        <View style={styles.box}>
                            <Text >
                                price
                            </Text>
                        </View>


                        <View style={styles.box}>
                            <Text >
                                Quantitiy
                            </Text>
                        </View>


                        <View style={styles.box}>
                            <Text >
                                Total
                            </Text>
                        </View>

                    </View>
 
                    <FlatList
                        key={(item) => '' + item.props.id}
                        data={data}
                        renderItem={({ item }) => paymentCard(item)}
                        keyExtractor={(item) => '' + item.props.id}
                        style={{ marginHorizontal: 15, borderLeftWidth: 1 }}
                    // refreshControl={<RefreshControl
                    //     colors={["color", "#689F38"]}
                    //     refreshing={refreshing}
                    //     onRefresh={onRefresh}
                    // />}
                    />
                </View>
                <View style={{margin:15, alignContent: 'center', justifyContent: 'center', alignItems: 'flex-end', marginEnd: 40 }}>
                    <Text style={{fontSize:20}}>
                        GrandTotal = {bill}
                    </Text>

                </View>

            </ScrollView>

            <TouchableOpacity style={styles.btn1} activeOpacity={0.8} onPress={() => payNow()}>
                    <Text style={{ fontSize: height / 40, fontWeight: 'bold', color: '#fff', marginStart: width / 20 }} >
                        Pay NOW
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
    )
}

const styles=StyleSheet.create({
    box:{
        borderColor:'black',
        borderBottomWidth:1,
        borderRightWidth:1,
        borderTopWidth:1,

        flex:1,
        height:35,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center'
    },btn1: {
        width: width,
        height: height / 15,
        backgroundColor: color,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',

    },
})