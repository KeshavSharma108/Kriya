import React, { useEffect } from "react";
import { View ,Image, StyleSheet} from "react-native";
import { logo } from "../assets/Images";


const SpalshScreen =({navigation})=>{

useEffect(()=>{
setTimeout(()=>{
navigation.replace('Login')
},3000)


},[])






    return(
        <View >
            
            <Image source={logo} style={{width:300,height:300,top:280,left:60 }}/>
            </View>
     
    )
}







export  default SpalshScreen