import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Bottom from './BottomNavigation';
import HomeScreen from '../Screens.js/HomeScreen';
import ForgotPassword from '../Screens.js/ForgotPassword';
import Login from '../Screens.js/Login';
import SpalshScreen from '../Screens.js/SpalshScreen';



const Stack = createNativeStackNavigator();




export default function RootNavigation() {
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}> 
        <Stack.Screen name='Splash' component={SpalshScreen}/>
       <Stack.Screen name='Login' component={Login}/>
       <Stack.Screen name='Forgot' component={ForgotPassword}/>
       <Stack.Screen name='Home' component={HomeScreen}/>
       <Stack.Screen name='Bottom' component={Bottom}/>      
    </Stack.Navigator>
  </NavigationContainer>
  )
}


