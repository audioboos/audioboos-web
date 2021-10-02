import { configureStore } from "@reduxjs/toolkit";
import api from "./api";
import artistsReducer from "./artists";

const store = configureStore({
    reducer: {
        artists: artistsReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export default store;
