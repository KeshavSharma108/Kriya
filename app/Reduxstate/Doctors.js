import { createAction,createSlice } from "@reduxjs/toolkit";

const signOutAction =createAction('signout')


const initialState = {
    Doctors:[]
}



const DoctorListSaveReducer =(state,action)=>{
        const {Doctors = []} = action.payload;
        state.Doctors = Doctors
     
}


//Reducer

const DoctorsSlice =createSlice({
    name:'doctors',
    initialState,
    extraReducers:builder =>{
        builder.addCase(signOutAction,state=>{
            return initialState;
        })
    },

        reducers:{
            DoctorListSave:DoctorListSaveReducer,
        },


})





//Action

const{
    DoctorListSave,
}=DoctorsSlice.actions;

//Selector

const selectDoctorsList = ({doctors}) => doctors.doctorsSave;


const DoctorsSliceReducers = DoctorsSlice.reducer

export {
        DoctorsSliceReducers,
        selectDoctorsList,
        DoctorListSaveReducer,
}














