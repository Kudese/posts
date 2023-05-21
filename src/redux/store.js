import { configureStore, createSlice } from "@reduxjs/toolkit";

import initialState from "./initialState.json";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage'

const sliceFolowers = createSlice({
  name: "folowers",
  initialState: initialState.folowers,
  reducers: {
    changStatusFolofer(state){
      state.folowers=true
      
    }
  },
});
const sliceBaseFolowers= createSlice({
  name:'basefolowers',
  initialState:initialState.basefolowers,
  reducers:{
    changValueFolofer(state){
      state.basefolowers++
    }
  }
})

const persistConfig = {
  key: 'root',
  storage
}

const rootReduser = combineReducers({ folowers: sliceFolowers.reducer,
basefolowers: sliceBaseFolowers.reducer });
const persistedReducer = persistReducer(persistConfig, rootReduser)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
