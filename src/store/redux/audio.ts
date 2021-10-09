import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { State } from "zustand";

export enum PlayState {
    stopped = 1,
    playing = 2,
    paused = 3,
}

export interface IAudioState extends State {
    id: string;
    url: string;
    position: number;
    seekPosition: number;
    duration: number;
    playState: PlayState;
    // setNowPlaying: (id: string, url: string) => void;
    // setPosition: (position: number) => void;
    // setDuration: (duration: number) => void;
    // setSeekPosition: (duration: number) => void;
    // setPlayState: (playState: PlayState) => void;
    // togglePlayState: () => void;
}
interface INowPlayingDispatchArgs {
    id: string;
    url: string;
}
const initialState: IAudioState = {
    id: "",
    url: "",
    position: -1,
    seekPosition: -1,
    duration: -1,
    playState: PlayState.stopped,
};
export const audioSlice = createSlice({
    name: "audio",
    initialState,
    reducers: {
        setNowPlaying: (
            state,
            action: PayloadAction<INowPlayingDispatchArgs>
        ) => {
            state.id = action.payload.id;
            state.url = action.payload.url;
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
