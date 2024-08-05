
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { faBell } from "@fortawesome/free-regular-svg-icons";
import '../FontAwesome/Font'


const Profile = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container1}>
                <Text style={styles.home}>Profile</Text>
                <View style={styles.notification}>
                    <TouchableOpacity>
                    <FontAwesomeIcon icon={faBell} size={30} transform={{rotate:30}} />
                </TouchableOpacity>
                </View>
             
            </View>
  
    
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container1: {
        width: '100%', height: 150, backgroundColor: '#FF9632',marginBottom:5
    },home: {
        fontSize: 28, top: 70, left: 30, color: '#FFFFFF',fontWeight:'500'
    },notification:{
        left:320,top:30,width:50,height:50,backgroundColor:'white',borderRadius:80,padding:10,
    },



})




export default Profile