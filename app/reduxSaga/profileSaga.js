import { put, call, takeLatest } from 'redux-saga/effects';
import { ProfileServices } from '../Api\'sCall';
import dispatchConstant from './dispatchConstant';
import { SettingsState } from '../Reduxstate';




export function* updateDeviceToken(action) {
  const apiResponse = yield call(
    ProfileServices.saveDeviceToken,
    action.payload
  );
console.log('profileSaga',apiResponse)

if(apiResponse?.response?.success === true){
  yield put(SettingsState.updateTokenRegisterResponse(apiResponse?.response?.message))
}

}






export function* watchProfileServices() {
 
  yield takeLatest(dispatchConstant.UPDATE_DEVICE_TOKEN, updateDeviceToken);
}
