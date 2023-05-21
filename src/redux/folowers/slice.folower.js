import { createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState.json";

export const sliceFolowers = createSlice({
  name: "folowers",
  initialState: initialState.folowers,
  reducers: {
    changStatusFolofer(state, { payload }) {
      if ([...state.folowers].includes(payload)) {
        const list = [...state.folowers]
        list.splice(
          [...state.folowers].indexOf(payload),
          1
        );
        state.folowers= list
      } else {
        state.folowers.push(payload);
      }
    },
  },
});
export const { changStatusFolofer } = sliceFolowers.actions;
