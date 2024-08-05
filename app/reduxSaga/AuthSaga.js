import {call, put, takeLatest} from 'redux-saga/effects'
import dispatchConstant from './dispatchConstant'
import { AuthApi } from '../Api\'sCall'
import { AuthState, UserData } from '../Reduxstate'


export function* login(action){
  //console.log('action', action.payload)
   const apiResponse = yield call(AuthApi.login, action.payload)
  // console.log('apiresponse',apiResponse?.response)
      if(apiResponse?.response?.success === true)
     
      {
        yield put(UserData.updateUserData(apiResponse?.response?.data))
      }else{
      yield put(AuthState.updateLoginError(apiResponse?.response?.message))
      }
        
      


}














export function * watchAuthServices(){
    yield takeLatest(dispatchConstant.LOGIN, login )
}