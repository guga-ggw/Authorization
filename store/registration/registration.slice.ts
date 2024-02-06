import { createSlice } from "@reduxjs/toolkit";


type Istate = {
    firstStep : boolean,
    finish : boolean,
    createAccount : boolean,
    Login : boolean
}

const initialState : Istate = {
    firstStep : false,
    finish : false,
    createAccount : true,
    Login : false,
};



const PageSlice = createSlice({
    name: "registration",
    initialState,
    reducers: {
        nextStep : (state, action) => {
            state.firstStep = action.payload
        },
        finishRegistration : (state, action) => {
            state.finish = action.payload
        }
    },
});

export const {nextStep, finishRegistration} = PageSlice.actions
export default PageSlice.reducer;