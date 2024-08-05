import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, Pressable } from "react-native";
import Textinput from "../Components/Textinput";
import Appbutton from "../Components/Appbutton";
import Config from "../Config";
import { useDispatch, useSelector } from "react-redux";
import dispatchConstant from "../reduxSaga/dispatchConstant";
import { AuthState, UserData } from "../Reduxstate";
import { faEye, } from "@fortawesome/free-regular-svg-icons";
import { kriya } from "../assets/Images";


const Login = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState()
  const [passwordError, setPasswordError] = useState()

  //Call the Api from saga
  const dispatch = useDispatch()
  const select = useSelector(UserData.selectUser)
  const loginError =useSelector(AuthState.selectLoginError)
  const [icon,setIcon] = useState(true)



  useEffect(() => {
    if (select) {
    navigation.navigate('Bottom')
    }

  }, [select, navigation])

useEffect(()=>{
  if(loginError){
    setPasswordError(loginError)
  
  }
 
},[loginError,dispatch])


  const savedata =()=>{
    const payload = {
      email,
      password
    }
    dispatch({ type: dispatchConstant.LOGIN, payload })

      // let result = await fetch(LOGIN_URL,{
      //   method:'POST',
       
      //   data:{
      //     email,
      //     password,
      //   }
      // })
      // result =await result.json()
      // console.log('resfgfgjhgfdghgj',result)

  }
 

 




  

  //show and hide password
const iconbutton =(()=>{
setIcon(!icon)
})

  return (

    <View>
      <Image source={kriya} style={styles.image}  />
      <Text style={styles.text1}>Welcome!</Text>
      <Text style={styles.text2}>Sign in to continue!</Text>
      <View style={styles.container}>
        <Textinput
          title={'Email'}
          placeholder={'Enter Email'}
          value={email}
          errortext={emailError}
          onChangeText={text => {
            setEmail(text);
            setEmailError();
          }}
          ViewTextinput={styles.ViewTextinput}
          />

        <Textinput title={'Password'}  secureTextEntry={icon}
          value={password}
          errortext={passwordError} onChangeText={text => {
            setPassword(text);
            setPasswordError();
          
          }}
          
            placeholder={'Enter Password'}
           press={iconbutton}
          size={22}
          fonticon={faEye}
          icontouch={styles.icontouch}
          ViewTextinput={styles.ViewTextinput}
          Textinputstyle={styles.Textinputstyle}
          />
    


        <TouchableOpacity style={styles.touch}><Text style={styles.Forgot} onPress={() => navigation.navigate('Forgot')}>Forgot Password</Text></TouchableOpacity>
        <Appbutton title={'Login'} onPress={() => savedata()} />
      </View>





    </View>





  )
}

const styles = StyleSheet.create({
  image: {
    left: 30, height: 100, width: 350,
  },
   text1: {
    textAlign: 'center', top: 20, color: '#442A3E', fontSize: 40,
  }, text2: {
    textAlign: 'center', top: 20, color: '#979797', fontSize: 15, marginBottom: 40
  }, container: {
    margin: 40
  }, Forgot: {
    fontSize: 12, textAlign: 'center', color: Config.colors.darkBlue, bottom: 15
  }, touch: {
    marginTop: 10, width: 100, left: 220
  },icontouch:{
    width:20,borderRadius:10,height:20,left:280,
},Textinputstyle:{
  width:280,height:40,marginBottom:10,borderRadius:5,padding:10,bottom:30,right:10
},ViewTextinput:{
  width:'100%',height:40,backgroundColor: Config.colors.border,marginBottom:10,borderRadius:5,padding:10,
},



})

export default Login