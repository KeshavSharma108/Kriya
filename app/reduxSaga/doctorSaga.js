import { call, put, takeLatest } from "redux-saga/effects"
import dispatchConstant from "./dispatchConstant"
import { DoctorsState } from "../Reduxstate"
import { otherApi } from "../Api'sCall"



  export function * doctorsList(action){
    console.log('doctorsapi',action.type)
const apiresponse = yield call(otherApi.DoctorsListApi,action.payload)
    console.log('apiresponseapi',JSON.stringify(apiresponse.response))
    // if(apiresponse.response.success === true)
    // {
    //  yield put (DoctorsState.DoctorListSaveReducer(apiresponse.response.data)) 
      
    // }
    // console.log('afterTrue', apiresponse.response.data)
  } 


























export function * watchDoctorsServices(){
    yield takeLatest(dispatchConstant.DOCTOR_LIST,doctorsList)
}