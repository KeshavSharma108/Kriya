import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import '../FontAwesome/Font'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faUserDoctor, faUser  } from '@fortawesome/free-solid-svg-icons';
import HomeScreen from '../Screens.js/HomeScreen';
import Doctors from '../Screens.js/Doctors';
import Profile from '../Screens.js/Profile';
const Tab = createBottomTabNavigator();

export default function Bottom() {
  return (
  <NavigationContainer independent={true} >
    <Tab.Navigator
     screenOptions={{
      headerShown:false,
     tabBarStyle:{
      backgroundColor:'#442A3E',
     borderTopLeftRadius:10,
     borderTopRightRadius:10,
     tabBarActiveTintColor:{color:"red"}
     }
    }}> 

     <Tab.Screen name='Home'  component={HomeScreen} 
     options={{
      tabBarIcon: () => (
        <FontAwesomeIcon icon={faHome}  size={20}  color='#FF9632' />
      ),
      tabBarLabelStyle:{color:'#FF9632'}
     }}/>  
     <Tab.Screen name='Doctor' component={Doctors}
      options={{
        tabBarIcon: () => (
          <FontAwesomeIcon icon={faUserDoctor}  size={20} color='#FF9632' />
        ),
        tabBarLabelStyle:{color:'#FF9632'}
       }}/>

        <Tab.Screen name='Profile' component={Profile}
      options={{
        tabBarIcon: () => (
          <FontAwesomeIcon icon={faUser}  size={20} color='#FF9632' />
        ),
        tabBarLabelStyle:{color:'#FF9632'}
       }}/>
    </Tab.Navigator>
  </NavigationContainer>
  )
}


