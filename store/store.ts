import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import registrationSlice from "./registration/registration.slice";



const rootReducer = combineReducers({
    Registration: registrationSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof rootReducer>> = useSelector;