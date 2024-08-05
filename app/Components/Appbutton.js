import React from "react";
import { View,StyleSheet,Text, TouchableOpacity } from "react-native";
import Config from "../Config";




const Appbutton=({
    title,
   onPress,
   touchstyle
})=>{
    return(
        <View>
            <TouchableOpacity style={[styles.Touch,touchstyle]} onPress={()=>onPress()}><Text style={styles.Text} >{title} </Text></TouchableOpacity>           
        </View>
    )
}

const styles = StyleSheet.create({
Text:{
fontSize:18,textAlign:'center',top:10,color:Config.colors.white
},Touch:{
backgroundColor:Config.colors.orange,height:50,borderRadius:10,marginTop:30,
}

})
export default Appbutton