import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { State } from "zustand";
import { Album, Artist, Track } from "../../models";

export enum PlayState {
    stopped = 1,
    playing = 2,
    paused = 3,
}
interface INowPlaying {
    album: Album;
    artist: Artist;
    track: Track;
}
export interface IAudioState extends State {
    nowPlaying?: INowPlaying;
    position: number;
    seekPosition: number;
    duration: number;
    playState: PlayState;
}

const initialState: IAudioState = {
    nowPlaying: undefined,
    position: 0,
    seekPosition: 0,
    duration: 0,
    playState: PlayState.stopped,
};
export const audioSlice = createSlice({
    name: "audio",
    initialState,
    reducers: {
        setNowPlaying: (state, action: PayloadAction<INowPlaying>) => {
            state.nowPlaying = action.payload;
        },
        setPlayState: (state, action: PayloadAction<PlayState>) => {
            state.playState = action.payload;
        },
        setPosition: (state, action: PayloadAction<number>) => {
            state.position = action.payload;
        },
        setDuration: (state, action: PayloadAction<number>) => {
            state.duration = action.payload;
        },
        setSeekPosition: (state, action: PayloadAction<number>) => {
            state.seekPosition = action.payload;
        },
        togglePlayState: (state, action: PayloadAction<number>) => {
            state.playState =
                state.playState === PlayState.playing
                    ? PlayState.paused
                    : PlayState.playing;
        },
    },
});
export const {
    setNowPlaying,
    setPlayState,
    setPosition,
    setDuration,
    setSeekPosition,
    togglePlayState,
} = audioSlice.actions;
export default audioSlice.reducer;
