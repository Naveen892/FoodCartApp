import React ,{useEffect}from 'react';
import { View, Text,BackHandler, StatusBar, FlatList, ImageBackground, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TraceOrder from '/home/naveen/FoodCart/Screens/drower screens/profilepage/TraceOrder';
import {color} from "/home/naveen/FoodCart/imp.js";
function MyOrder({ navigation }) {
    function handleBackButtonClick() {
        console.log('back ');
        
            navigation.goBack();
            
            return true;
       
      }
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        handleBackButtonClick
      );
      useEffect(() => {
            
          return () => backHandler.remove();
        
      }, [navigation]);

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.09, backgroundColor: color, flexDirection: 'row', alignItems: 'center', elevation: 10 }}>
                <Icon name='arrow-left' color='#fff' size={25} style={{ marginLeft: 30 }} onPress={() => { navigation.navigate('FoodCart') }} />

                <Text style={{ fontSize: 22, marginLeft: 20, color: '#fff',  }}>
                    My Orders
                </Text>
            </View>
            
        <TraceOrder/>


        </View>
    )
}
export default MyOrder;
const styles = StyleSheet.create({
    back: {
        width: "100%",
        height: "100%"
    }
})