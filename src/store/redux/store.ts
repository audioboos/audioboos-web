import { configureStore } from "@reduxjs/toolkit";
import api from "./api";
import audio from "./audio";

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        audio: audio,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
