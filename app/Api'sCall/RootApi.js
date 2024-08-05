import axios from "axios";
import Config from "../Config";


const getAccessToken =()=>{
    
    const authToken =   Config.store.getState().user.token;
   
 //   console.log("Text==============",authToken)
    return authToken ?? '';

}


export const RootApi= async ({method,apiUrl,payload})=>{
    
    let response = {};
    await axios({
        method,
        url: apiUrl,
        data:payload,
        headers: {'Content-Type': 'application/json', Authorization:getAccessToken()}, 
        
        json:true,     
      })
      
    .then(res=> {
         //console.log('Data Success',res?.data)
         response = { response : res.data }
         console.log(' Success response',JSON.stringify(response))
    })
    .catch(error => {
        console.error('Error',error?.response?.data)
        response = { response : error?.response?.data ?? { message : ""}}
        
    })
    console.log('response', response)
    return response;
}


