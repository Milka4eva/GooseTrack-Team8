import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



export const getAllReviews = createAsyncThunk(
  'get/reviews/getAllReviews',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/reviews`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const createOwnerReview= createAsyncThunk(
  'post/createOwnerReview',
  async ({ comment, rating }, thunkAPI) => {
  
    try {
      const { data } = await axios.post(`/reviews/own`, { comment, rating } );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getOwnerReview  = createAsyncThunk(
  'get/reviews/getOwnerReview',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/reviews/own`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateOwnerReview= createAsyncThunk(
  'post/updateOwnerReview',
  async ({ comment, rating }, thunkAPI) => {
  
    try {
      const { data } = await axios.patch(`/reviews/own`, { comment, rating } );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

 export const deleteReviewOwn = createAsyncThunk(
    "reviews/deleteReviewOwn",
    async (_, thunkAPI) => {
      try {
        const response = await axios.delete(`/reviews/own`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
