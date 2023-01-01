import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loginOpen: false,
  signupOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    loginModal: (state) => {
      state.loginOpen = !state.loginOpen;
      state.signupOpen = false;
    },
    signupModal: (state) => {
      state.signupOpen = !state.signupOpen;
      state.loginOpen = false;
    },
    successModal: (state) => {
      state.loginOpen = false;
      state.signupOpen = false;
    },
  },
});

export const { loginModal, signupModal, successModal } = modalSlice.actions;
export default modalSlice.reducer;
