import React from 'react';
import {View,Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer ,} from '@react-navigation/native';
function Contact(){
return(<View>
    <Text style={{fontSize:30}}>Please Contact Us</Text>
</View>)
}
const Stack = createStackNavigator();

function ContactUs() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Contact Us" component={Contact} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
export default Contact;