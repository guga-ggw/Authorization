import { combineReducers, configureStore } from '@reduxjs/toolkit';
import formSlice from './registration/registration.slice';

const rootReducer = combineReducers({
  formReducer: formSlice,
});

const makeStore = () => {
  return configureStore({
    reducer: rootReducer, // Pass rootReducer directly, not inside an object
  });
};

export default makeStore;
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];