import { createAction, createSlice } from "@reduxjs/toolkit";
const signOutAction = createAction('signout')



const initialState = {
    tokenRegisterResponse: null,
};




const updateTokenRegisterResponseReducer = (state,action) =>{
    state.tokenRegisterResponse = action.payload;
}





//Reducer

const settingSlice = createSlice({
    name:'settings',
    initialState,
    extraReducers: builder =>{
        builder.addCase(signOutAction,()=>{
            return initialState
        });
    },
    reducers:{
        updateTokenRegisterResponse : updateTokenRegisterResponseReducer
    },
});



// Actions

const {
    updateTokenRegisterResponse
} = settingSlice.actions;


const selectTokenRegisterResponse = ({settings}) => settings.tokenRegisterResponse;



const settingSliceReducer = settingSlice.reducer;


export {
    settingSliceReducer,
    selectTokenRegisterResponse,
    updateTokenRegisterResponse
}