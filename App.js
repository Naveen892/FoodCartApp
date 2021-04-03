import * as React from 'react';

import { NavigationContainer ,} from '@react-navigation/native';
import { createDrawerNavigator,DrawerActions, DrawerContent } from '@react-navigation/drawer';

import Drawerx from '/home/naveen/FoodCart/Screens/drower screens/drawer'
import Offers from '/home/naveen/FoodCart/Screens/drower screens/offers'
import MyProfile from '/home/naveen/FoodCart/Screens/drower screens/MyProfile'
import Consumer from './Screens/drower screens/profilepage/consumer/consumer'
import LogInConsumer from './Screens/drower screens/profilepage/consumer/loginConsumer'
import ConsumerProfile from './Screens/drower screens/profilepage/consumer/cosumerProfile'
import Tabs from './Screens/Tab screens/screen';
import products from '/home/naveen/FoodCart/Screens/Stack screens/products';

import MyOrder from '/home/naveen/FoodCart/Screens/drower screens/My Order';
import Discription from '/home/naveen/FoodCart/Screens/Stack screens/Discription';
import OrderHistory from '/home/naveen/FoodCart/Screens/drower screens/profilepage/OrderHistory'
import Notification from '/home/naveen/FoodCart/Screens/drower screens/profilepage/Notification';
import RetailerProfile from '/home/naveen/FoodCart/Screens/drower screens/profilepage/retailer/RetailerProfile';
import Retailer from '/home/naveen/FoodCart/Screens/drower screens/profilepage/retailer/retailer';

import LogInRetailer from '/home/naveen/FoodCart/Screens/drower screens/profilepage/retailer/LogInRetailer'
import UploadProduct from '/home/naveen/FoodCart/Screens/drower screens/profilepage/uploadProduct';
import MyProducts from '/home/naveen/FoodCart/Screens/drower screens/MyProducts';

const drawer =createDrawerNavigator();


export default function App() {
  return (
  
    <NavigationContainer>
      <drawer.Navigator 
      drawerContentOptions={{backgroundColor:'#00af91',activeTintColor:'#00af91',inactiveTintColor:'white',inactiveBackgroundColor:'#00af91',activeBackgroundColor:'#fff'}} 
      drawerContent={props => <Drawerx {...props}/>}
      
      >
        <drawer.Screen name='FoodCart' component={Tabs}/>
            <drawer.Screen name='products' component={products}/>
            <drawer.Screen name='Discription' component={Discription}/>
        <drawer.Screen name='My Profile' component={MyProfile}/>
            <drawer.Screen name='Consumer' component={Consumer}/> 
            <drawer.Screen name='LogInConsumer' component={LogInConsumer}/>
            <drawer.Screen name='ConsumerProfile' component={ConsumerProfile}/>
                <drawer.Screen name='OrderHistory' component={OrderHistory}/>
                <drawer.Screen name='Notification' component={Notification}/>
            <drawer.Screen name='LogInRetailer' component={LogInRetailer}/>
            <drawer.Screen name='Retailer' component={Retailer}/>
            <drawer.Screen name='RetailerProfile' component={RetailerProfile}/>
                <drawer.Screen name='UploadProduct' component={UploadProduct}/>
                <drawer.Screen name='MyProducts' component={MyProducts}/>
        <drawer.Screen name='MyOrder' component={MyOrder}/>
        <drawer.Screen name='Offers' component={Offers}/>
      </drawer.Navigator>
    </NavigationContainer>
  
    
    
  );
}
