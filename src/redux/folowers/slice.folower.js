import { createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState.json";

export const sliceFolowers = createSlice({
    name: "folowers",
    initialState: initialState.folowers,
    reducers: {
      changStatusFolofer(state){
        state.folowers=true
        
      }
    },
  });
  export const {changStatusFolofer}= sliceFolowers.actions
