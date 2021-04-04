import React , {useState,useEffect} from 'react';
import { View, Text, StatusBar, FlatList, ImageBackground, StyleSheet,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBar from 'react-native-searchbar';
import OneCard from '/home/naveen/FoodCart/Screens/OneCard.js';
const height=Dimensions.get('window').height;
const width =Dimensions.get('window').width;
const columns = 2;
function products({ navigation }) {

const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://10.150.42.223:8000/api/products/',{
            method:"GET"
        })
          .then((response) => response.json())
          .then(json => setData(json))
          .catch(error => console.log('error'))
      } , []);
    return (
        <View style={{ flex: 1 }}>
            
            <View style={{ height:height/11, backgroundColor: '#00af91', flexDirection: 'row', alignItems: 'center',elevation:10 }}>
            <SearchBar
                
                ref={(ref) => searchBar2 = ref}
                heightAdjust={height/65}

            />
                <Icon name='arrow-left' color='#fff' size={25} style={{ marginLeft: 30 }} onPress={() => {navigation.navigate('FoodCart')}} />

                <Text style={{ fontSize: 22, marginLeft: 20, color: '#fff', fontWeight: 'bold' }}>
                    Products
                </Text>
                <View style={{ flex: 1,justifyContent:'flex-end',  marginEnd: width / 15 ,flexDirection:'row'}}>
                    <View >
                        <Icon name='search' color='#fff' size={width/17} onPress={() => searchBar2.show()} />
                    </View>

                </View>
            </View>
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor="#00af91" />

                <FlatList
                    key={(item) => '' + item.id}
                    data={data}
                    renderItem={({ item }) => OneCard(item, { navigation })}
                    keyExtractor={(item) => '' + item.id}
                />

            </View>
        </View>

    )
}
export default products;
const styles = StyleSheet.create({
    back: {
        width: "100%",
        height: "100%"
    }
})