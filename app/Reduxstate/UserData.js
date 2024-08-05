import { createAction,createSlice } from "@reduxjs/toolkit";

const signOutAction = createAction('signout')


const initialState ={
    userData : null,
    token: null
}



const updateUserDataReducer = (state, action) => {
    const {user, token} = action.payload;
    state.userData = user;
    state.token =token
  };




  //Reducer

  const userSlice =createSlice({
    name:'user',
    initialState,
    extraReducers:builder =>{
        builder.addCase(signOutAction,state=>{
            return initialState;
        })
    },

reducers:{
    updateUserData: updateUserDataReducer,
},


  })

// Actions

const {
    updateUserData,
} = userSlice.actions;




//Selector


const selectUser = ({user}) => user.userData;

const userSliceReducer = userSlice.reducer;


export{
    userSliceReducer,
    updateUserData,
    selectUser,
    
}