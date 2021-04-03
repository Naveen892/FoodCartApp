import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Profile({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.upperView}>
        <View style={{ flexDirection: 'row', }}>
          <Icon name='arrow-left' style={{ margin: 40 }} size={25} color='#fff' onPress={() => navigation.navigate('FoodCart')} />
          <View style={{ alignItems: 'flex-end', flex: 1 }}>
            <Text style={styles.name}>FoodCart</Text>

          </View>
        </View>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 40, color: '#fff' }}>
            Make Life
          </Text>
          <Text style={{ fontSize: 40, color: '#fff' }}>Easier</Text>
        </View>
      </View>
      <View style={styles.lowerView}>
        <TouchableOpacity style={styles.loginbtn} activeOpacity={0.8} onPress={()=> navigation.navigate('LogInConsumer')}>
          <Text style={{ fontSize: 20, fontWeight: '300', color: '#fff' }}>
            LogIn As Consumer
                </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginbtn} activeOpacity={0.8} onPress={()=> navigation.navigate('LogInRetailer')}>
          <Text style={{ fontSize: 20, fontWeight: '300', color: '#fff' }}>
            LogIn As Retailer
                </Text>
        </TouchableOpacity>
        <View style={{  flexDirection: 'row' ,justifyContent:'center' }}>
          <TouchableOpacity style={styles.privacy} activeOpacity={0.8}>
            <Text style={{ fontSize: 15, fontWeight: '200', color: '#00af91',textDecorationLine: 'underline' }}>
              Terms and condition
                </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.privacy} activeOpacity={0.8}>
            <Text style={{ fontSize: 15, fontWeight: '200', color: '#00af91',textDecorationLine: 'underline' }}>
              Privacy policy
                </Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>

  )
}

export default Profile;

const styles = StyleSheet.create({
  upperView: {
    flex: 2,
    backgroundColor: '#00af91',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    flexDirection: 'column',
    
    elevation: 7
  },
  lowerView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  name: {
    margin: 40,
    fontSize: 25,
    color: '#fff',
  },
  loginbtn: {
    marginHorizontal: 60,
    marginBottom: 30,
    alignItems: 'center',
    backgroundColor: '#00af91',
    borderColor:'#fff',
        borderWidth:2,
    padding: 5,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 5,
    elevation: 7
  },
  privacy: {
    margin:10,
    marginTop:0,
    marginBottom:40
  }

})