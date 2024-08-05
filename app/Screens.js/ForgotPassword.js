import React, { useState } from "react";
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, Pressable } from "react-native";
import Textinput from "../Components/Textinput";
import Appbutton from "../Components/Appbutton";
import Config from "../Config";
import { kriya } from "../assets/Images";

const ForgotPassword = ({ navigation }) => {

  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [emailError, setEmailError] = useState()
  const [passwordError,setPasswordError] = useState()
  const savedata = (() => {
    if (Email === '') {
      setEmailError('enter the new password ')
    }
    if (Password === '') {
      setPasswordError('enter the confirm password ')
    }



})



  return (

    <View>
      <Image source={kriya} style={styles.image} />
      <Text style={styles.text1}>Forgot Password</Text>
      <Text style={styles.text2}>Please choose your new password</Text>
      <View style={styles.container}>
      <Textinput title={'New Password'} placeholder={'Enter new password'}
        value={Email}
       errortext={emailError} onChangeText={text => {
          setEmail(text);
         setEmailError();
        }}
        ViewTextinput={styles.ViewTextinput}
        />

     <Textinput  title={'Confirm Password'} placeholder={'Enter confirm password'} secureTextEntry
      value={Password}
      errortext={passwordError} onChangeText={text => {
         setPassword(text);
        setPasswordError();
       }}
       ViewTextinput={styles.ViewTextinput}
       />
       
     <TouchableOpacity style={styles.touch}><Text style={styles.Forgot} onPress={()=>navigation.goBack()}>Forgot Password</Text></TouchableOpacity>
    <Appbutton title={'Confirm'} onPress={()=>savedata()} />
     </View>

    </View>





  )
}

const styles = StyleSheet.create({
  image: {
    left: 30, height: 100, width: 350,
  }, text1: {
    textAlign: 'center', top: 20, color: '#442A3E', fontSize: 40
  }, text2: {
    textAlign: 'center', top: 20, color: '#979797', fontSize: 15,marginBottom:40
  },container:{
    margin:40
  },Forgot:{
    fontSize:12,textAlign:'center',color:Config.colors.darkBlue,bottom:15
    },touch:{
   marginTop:10,width:100,left:220
    },ViewTextinput:{
      width:'100%',height:40,backgroundColor: Config.colors.border,marginBottom:10,borderRadius:5,padding:10,
    },

  


})

export default ForgotPassword