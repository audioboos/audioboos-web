import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile } from '../../models/Profile';
import authService from '../../services/api/auth.service';
import { RootState } from './store';
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
  loginStatus: LoginStatus.checking,
};
export const login = createAsyncThunk('auth/login', async (args) => {
  const profile = await authService.getProfile();
  return profile;
});
export const logout = createAsyncThunk('auth/logout', async (args) => {
  await authService.logout();
  return true;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: () => initialState,
    setAuthChecked: (state: IAuthState, action: PayloadAction<true>) => {
      if (action.payload) {
        state.user = initialState.user;
        state.loginStatus = LoginStatus.notLoggedIn;
      }
    },
    setCredentials: (state: IAuthState, action: PayloadAction<Profile>) => {
      state.user = action.payload;
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
    [logout.fulfilled.toString()]: (state, { payload }) => {
      localStorage.removeItem('storageHash');
      localStorage.clear();
      state = initialState;
    },
  },
});
export default authSlice;

export const { setCredentials, setAuthChecked } = authSlice.actions;
export const authReducer = authSlice.reducer;
export const selectCurrentUser = (state: RootState) => state.authReducer.user;
export const selectLoginStatus = (state: RootState) => state.authReducer.loginStatus;
export const selectIsLoggedIn = (state: RootState) =>
  state.authReducer.loginStatus === LoginStatus.loggedIn;
