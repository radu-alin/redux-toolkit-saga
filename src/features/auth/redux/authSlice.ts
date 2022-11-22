import { Auth_Form } from './../types/index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  isLoggedIn: boolean;
  user: {};
  loading: boolean;
  error: null | string;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: {},
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authStart: (state, action: PayloadAction<Auth_Form>) => {
      state.loading = true;
      state.error = null;
    },
    authSuccess: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.isLoggedIn = false;
      state.user = action.payload;
    },
    authError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.isLoggedIn = false;
      state.user = {};
      state.error = action.payload;
    },
    logoutStart: (state) => {
      state.loading = true;
    },
    logoutSuccess: (state) => {
      state = { ...initialState };
    },
    logoutError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  authStart,
  authSuccess,
  authError,
  logoutStart,
  logoutSuccess,
  logoutError,
} = authSlice.actions;

export const authReducer = authSlice.reducer;
