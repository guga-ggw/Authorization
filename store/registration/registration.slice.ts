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
        nextStep : (state) => {
            state.firstStep = true
        },
        finishRegistration : (state) => {
            state.finish = true
        }
    },
});

export const {nextStep} = PageSlice.actions
export default PageSlice.reducer;