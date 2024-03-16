import { RootState } from "../../redux/store";
import { createSlice } from "@reduxjs/toolkit";

export interface ModalState {
  isOpen: boolean;
}

const initialState: ModalState = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: "ModalState",
  initialState,
  reducers: {
    toggleModalState: (state: ModalState) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const getModalState = (state: RootState) => state.ModalState.isOpen;

export const { toggleModalState } = modalSlice.actions;

export default modalSlice.reducer;
