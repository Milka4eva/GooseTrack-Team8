import { createSlice } from "@reduxjs/toolkit";
import { createOwnerReview, deleteReviewOwn, getAllReviews, getOwnerReview, updateOwnerReview } from "./reviews-operations";



const pendingReducer = state => {
  state.isLoading = true;
};

const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const fetchReviewsFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.reviews = action.payload;
};

const createOwnerReviewFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.ownReview=action.payload;
};

const ownerReviewFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.ownReview=action.payload;
};

const deleteOwnerReviewFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
 state.ownReview={}
};



const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: {
      reviews: [],
      ownReview: {},
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(getAllReviews.pending, pendingReducer)
      .addCase(getAllReviews.fulfilled, fetchReviewsFulfilledReducer)
      .addCase(getAllReviews.rejected, rejectedReducer)
      .addCase(createOwnerReview.pending, pendingReducer)
      .addCase(createOwnerReview.fulfilled, createOwnerReviewFulfilledReducer)
      .addCase(createOwnerReview.rejected, rejectedReducer)
      .addCase(getOwnerReview.pending, pendingReducer)
      .addCase(getOwnerReview.fulfilled, ownerReviewFulfilledReducer)
      .addCase(getOwnerReview.rejected, rejectedReducer)
      .addCase(updateOwnerReview.pending, pendingReducer)
      .addCase(updateOwnerReview.fulfilled, ownerReviewFulfilledReducer)
      .addCase(updateOwnerReview.rejected, rejectedReducer)
      .addCase(deleteReviewOwn.pending, pendingReducer)
      .addCase(deleteReviewOwn.fulfilled, deleteOwnerReviewFulfilledReducer)
      .addCase(deleteReviewOwn.rejected, rejectedReducer)
 
});


export const reviewsReducer = reviewsSlice.reducer;




