import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  fetchCurrentUser,
  logout,
  updateUserInfo,
} from './auth-operations';

const handelPending = state => {
  state.isRefreshing = true;
  state.isLoggedIn = false;
};
const handelRejected = state => {
  state.isLoggedIn = false;
  state.isRefreshing = false;
  state.error = true;
};

const initialState = {
  user: {
    email: null,
    _id: null,
    avatarURL: null,
    phone: null,
    skype: null,
    name: null,
    birthday: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      // Register
      .addCase(register.pending, handelPending)
      .addCase(register.fulfilled, (state, action) => {
        state.user.email = action.payload.user.email;
        state.user.name = action.payload.user.name;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(register.rejected, handelRejected)

      // LogIn
      .addCase(login.pending, handelPending)
      .addCase(login.fulfilled, (state, action) => {
        state.user.email = action.payload.user.email;
        state.user.name = action.payload.user.name;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(login.rejected, handelRejected)

      // Fetch current user
      .addCase(fetchCurrentUser.pending, handelPending)
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(fetchCurrentUser.rejected, handelRejected)

      // Update user info
      .addCase(updateUserInfo.pending, handelPending)
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.user = { ...state.user, ...action.payload.updatedUser };
        state.isLoggedIn = true;
      })
      .addCase(updateUserInfo.rejected, handelRejected)

      // Log out
      .addCase(logout.fulfilled, state => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;
