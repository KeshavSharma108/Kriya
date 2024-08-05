import { createAction,createSlice } from "@reduxjs/toolkit";

const signOutAction = createAction('signout')


const initialState = {
    loginResponse:null,
    loginError:null,

}


const updateLoginResponseReducer = (state, action) => {
    state.loginResponse = action.payload;
  };
  


const updateLoginErrorReducer = (state,action)=>{
    state.loginError = action.payload
}


//Reducer

const authSlice = createSlice({
    name:'auth',
    initialState,
    extraReducers: builder =>{
        builder.addCase(signOutAction,state=> {
            return initialState;
        })
    },

    reducers:{
        updateLoginResponse: updateLoginResponseReducer,
       updateLoginError: updateLoginErrorReducer,
    },

});


//Actions

const{
    updateLoginResponse,
   updateLoginError,
} = authSlice.actions;


const selectLoginResponse = ({ auth }) => auth.loginResponse;
const selectLoginError = ({ auth }) => auth.loginError;


const authSliceReducer = authSlice.reducer;



export{
    updateLoginResponse,
    updateLoginError,
    selectLoginResponse,
    selectLoginError,
    authSliceReducer,
}