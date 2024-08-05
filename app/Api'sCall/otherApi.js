import { RootApi } from './RootApi';
import { Doctor_List_URL } from "./ApiUrl";




export const DoctorsListApi =(payload)=>{
    // console.log(payload) 
    return RootApi({
        method:'GET',
        apiUrl:Doctor_List_URL,
        payload:{},
       
    })

}
