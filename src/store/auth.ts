import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile } from '../models/Profile';
import ApiService from '../services/api/apiService';
import authService from '../services/api/authService';
export enum LoginStatus {
  checking,
  loggedIn,
  notLoggedIn,
}
interface IAuthState {
  user: Profile | null;
  loginStatus: LoginStatus;
}
const initialState: IAuthState = {
  user: null,
  loginStatus: LoginStatus.notLoggedIn,
};
export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }: { email: string; password: string }) => {
    const result = await authService.login(email, password);
    if (result) {
      const profile = await authService.getProfile();
      return profile;
    }
    return null;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: () => initialState,
    setCredentials: (state: IAuthState, action: PayloadAction<IAuthState>) => {
      state.user = action.payload.user;
      state.loginStatus = LoginStatus.loggedIn;
    },
  },
  extraReducers: {
    [login.pending.toString()]: (state) => {
      console.log('auth', 'loginPending');
      state.loginStatus = LoginStatus.checking;
    },
    [login.fulfilled.toString()]: (state, { payload }) => {
      console.log('auth', 'loginFulfilled');
      localStorage.setItem('storageHash', window.URL.createObjectURL(new Blob([])).substring(31));
      state.user = payload;
      state.loginStatus = LoginStatus.loggedIn;
    },
    [login.rejected.toString()]: (state, { payload }) => {
      console.log('auth', 'loginRejected');
      localStorage.removeItem('storageHash');
      state = initialState;
    },
  },
});
export const { setCredentials } = authSlice.actions;
export const authReducer = authSlice.reducer;
export default authSlice;
