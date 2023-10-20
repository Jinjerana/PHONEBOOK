import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetching: false,
  // loading: false,
  //   error: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(authOperations.register.pending, (state, action) => state)
      .addCase(authOperations.register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.register.rejected, (state, action) => state)
      .addCase(authOperations.logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      }),

  // {
  //   [authOperations.register.fulfilled](state, action) {
  //     state.user = action.payload.user;
  //     state.token = action.payload.token;
  //     state.isLoggedIn = true;
  //   },
  //   [authOperations.logIn.fulfilled](state, action) {
  //     state.user = action.payload.user;
  //     state.token = action.payload.token;
  //     state.isLoggedIn = true;
  //   },
  //   [authOperations.logOut.fulfilled](state, action) {
  //     state.user = { name: null, email: null };
  //     state.token = null;
  //     state.isLoggedIn = false;
  //   },
  // [authOperations.fetchCurrentUser.pending](state, action) {
  //   state.isFetching = true;
  // },
  // [authOperations.fetchCurrentUser.fulfilled](state, action) {
  //   state.user = action.payload;
  //   state.isLoggedIn = true;
  //   state.isFetching = false;
  // },
  // [authOperations.fetchCurrentUser.rejected](state, action) {
  //   state.isFetching = false;
  // },
  // },
});

export default authSlice.reducer;
export const authReducer = authSlice.reducer;
