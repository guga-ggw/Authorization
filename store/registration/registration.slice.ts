import { createSlice } from "@reduxjs/toolkit";


type Istate = {
    firstStep : boolean,
    finish : boolean,
    createAccount : boolean,
    Login : boolean,
    userInfo : Infouser,
    User : user,
    LoginError : boolean,
}
type Infouser = {
    name : string,
    NickName : string
}

type user = {
    name : string,
    NickName : string,
    email : string,
    password : string
}
const initialState : Istate = {
    firstStep : false,
    finish : false,
    createAccount : true,
    Login : false,
    userInfo :  {name : "", NickName : ""},
    User : { 
        name : "",
        NickName : "",
        email : "",
        password : ""
    },
    LoginError : false
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
        },
        setUserInfo : (state, action) => {
            state.userInfo = action.payload
        },
        setUser : (state, action) => {
            state.User = {name : state.userInfo.name, NickName : state.userInfo.NickName, email : action.payload.email, password : action.payload.password}
        },
        setLoginErr : (state) => {
            state.LoginError = !state.LoginError
        }
    },
});

export const {nextStep, finishRegistration, setUserInfo, setUser, setLoginErr} = PageSlice.actions
export default PageSlice.reducer;