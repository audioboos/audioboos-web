import { configureStore } from "@reduxjs/toolkit";
import artistsReducer from "./artists";

const store = configureStore({
    reducer: {
        artists: artistsReducer,
    },
});

export default store;
