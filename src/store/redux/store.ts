import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../auth';
import api from './api';
import audio from './audio';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    audio: audio,
    authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
