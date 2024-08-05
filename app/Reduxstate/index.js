import { combineReducers } from "@reduxjs/toolkit";

import * as AuthState from './Auth'
import * as UserData from './UserData'
import * as DoctorsState from './Doctors'
import * as SettingsState from './Setting'


const reducers = combineReducers({
    auth: AuthState.authSliceReducer,
    user : UserData.userSliceReducer,
    doctors : DoctorsState.DoctorsSliceReducers,
    settings : SettingsState.settingSliceReducer
})



export {
    reducers,
     AuthState,
     UserData,
     DoctorsState,
     SettingsState,
}