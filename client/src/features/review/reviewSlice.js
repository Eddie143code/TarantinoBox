import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "/api/review/";
const API_URL_SEARCH = "/api/search";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  reviews: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const createReview = createAsyncThunk(
  "/review/create",
  async (reviewData) => {
    try {
      const response = await axios.post(API_URL, reviewData);
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return message;
    }
  }
);

export const getAllUserReview = createAsyncThunk(
  "/review/getAllUserReview",
  async () => {
    try {
      const review = localStorage.getItem("user");

      const reviewData = {
        headers: {
          id: review,
        },
      };

      const response = await axios.get(API_URL, reviewData);
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return message;
    }
  }
);

export const deleteReview = createAsyncThunk(
  "/review/delete",
  async (reviewid) => {
    try {
      const idreview = reviewid;
      const reviewData = {
        headers: {
          id: idreview,
        },
      };
      const response = await axios.delete(API_URL + reviewData, reviewData);
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return message;
    }
  }
);

export const getAllSearchReview = createAsyncThunk(
  "/review/getAllSearchReview",
  async (search) => {
    try {
      const response = await axios.get(API_URL_SEARCH);
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return message;
    }
  }
);

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    reset: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createReview.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.reviews.push(action.payload);
      })
      .addCase(createReview.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAllUserReview.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllUserReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.reviews = action.payload;
      })
      .addCase(getAllUserReview.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteReview.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.reviews = state.reviews.filter(
          (review) => review._id !== action.payload.id
        );
        state.message = "deleted";
      })
      .addCase(deleteReview.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAllSearchReview.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllSearchReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.reviews = action.payload;
      })
      .addCase(getAllSearchReview.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = reviewSlice.actions;
export default reviewSlice.reducer;
