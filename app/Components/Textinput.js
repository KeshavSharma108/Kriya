import React, { useState } from "react";
import { View,TextInput,StyleSheet,Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Config from "../Config";

const Textinput=({
    title,
    placeholder,
    errortext,
    fonticon,
    size,
    coloring,
    icon,
    icontouch,
    ViewTextinput,
    Textinputstyle,
    textInputRef,
    press,
    ...props
})=>{


    return(
        <View>
{title && <Text style={[styles.Text]} >{title} </Text>}
<View style={[ViewTextinput,styles.ViewTextinput]} >
    <TouchableOpacity style={[icontouch]} onPress={press}>
    {fonticon && <FontAwesomeIcon icon={fonticon} size={size} color={coloring} style={[icon]}/>}
    </TouchableOpacity>

<TextInput 
{...props} 
placeholder={placeholder}
 title={title} 
 style={[Textinputstyle]}
ref={textInputRef}

 />


</View>

{errortext ? (
        <Text style={[styles.errorText,]}>{errortext}</Text>
      ) : null}
        </View>
    )
}

const styles = StyleSheet.create({
Text:{
fontSize:18,
},
errorText:{
color:'red', bottom:10
}
})
export default Textinput