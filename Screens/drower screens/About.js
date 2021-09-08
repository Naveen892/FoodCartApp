import React from 'react';
import {View,Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer ,} from '@react-navigation/native';
import {color} from "/home/naveen/FoodCart/imp.js";
function About(){
return(<View>
    <Text style={{fontSize:30}}>This is About Us</Text>
</View>)
}
const Stack = createStackNavigator();

function AboutUs() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="About Us" component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
export default About;