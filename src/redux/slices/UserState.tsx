import { RootState } from "../../redux/store";
import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  isLoggedIn: boolean;
}

const initialState: UserState = {
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "UserState",
  initialState,
  reducers: {
    toggleUserLogin: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const getLoginUser = (state: RootState) => state.UserState.isLoggedIn;

export const { toggleUserLogin } = userSlice.actions;

export default userSlice.reducer;
