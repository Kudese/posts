import { configureStore, } from "@reduxjs/toolkit";

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

import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage'
import { sliceFolowers } from "./folowers/slice.folower";


const persistConfig = {
  key: 'followerList',
  storage,
  whitelist:['folowers']
}

const persistedReducer = persistReducer(persistConfig,sliceFolowers.reducer)

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
