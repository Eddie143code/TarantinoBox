import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import reviewReducer from "../features/review/reviewSlice";
import modalReducer from "../features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    review: reviewReducer,
    modal: modalReducer,
  },
});
