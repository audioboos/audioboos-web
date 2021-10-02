import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Artist } from "../../models";
import audioBoosService from "../../services/api/audiosBooService";

export interface IArtistState {
    list: Artist[];
    status: "idle" | "loading" | "success" | "error";
}
const initialState: IArtistState = {
    list: [],
    status: "idle",
};
export const getArtists = createAsyncThunk(
    "artists/getArtists",
    async (): Promise<Artist[] | undefined> => {
        const results = await audioBoosService.getArtists();
        return results;
    }
);

const artistsSlice = createSlice({
    name: "artists",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getArtists.pending, (state, action) => {
            state.list = [];
            state.status = "loading";
        });

        builder.addCase(getArtists.fulfilled, (state, {payload}) => {
            state.list = payload ?? [];
            state.status = "success";
        });

        builder.addCase(getArtists.rejected, (state, action) => {
            state.list = [];
            state.status = "error";
        });
    },
});
export const selectArtists = (result: any): IArtistState => {
    return result.artists;
};
export default artistsSlice.reducer;
