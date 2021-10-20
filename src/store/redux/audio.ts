import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Album, Artist, Track } from '../../models';

export enum PlayState {
  stopped = 1,
  playing = 2,
  paused = 3,
}
export interface INowPlaying {
  album: Album;
  artist: Artist;
  track: Track;
}
export interface IAudioState {
  nowPlaying?: INowPlaying;
  position: number;
  seekPosition: number;
  duration: number;
  playState: PlayState;
  currentVolume: number;
  muted: boolean;
  playQueue: Array<INowPlaying>;
}

const initialState: IAudioState = {
  nowPlaying: undefined,
  position: 0,
  seekPosition: 0,
  duration: 0,
  playState: PlayState.stopped,
  currentVolume: parseFloat(localStorage.getItem('vol') ?? '1'),
  muted: false,
  playQueue: [],
};

export const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    setNowPlaying: (state, action: PayloadAction<INowPlaying>) => {
      state.nowPlaying = action.payload;
    },
    setPlayState: (state, action: PayloadAction<PlayState>) => {
      if (state.position <= action.payload) {
        state.playState = action.payload;
      }
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
    togglePlayState: (state) => {
      state.playState =
        state.playState === PlayState.playing ? PlayState.paused : PlayState.playing;
    },
    setCurrentVolume: (state, action: PayloadAction<number>) => {
      localStorage.setItem('vol', action.payload.toString());
      state.currentVolume = action.payload;
    },
    addToQueue: (state, action: PayloadAction<INowPlaying>) => {
      //check if item exists in queue already
      const exists = state.playQueue.find((r) => r.track.id === action.payload.track.id);
      if (!exists) {
        state.playQueue.push(action.payload);
      }
    },
    setMuted: (state, action: PayloadAction<boolean>) => {
      state.muted = action.payload;
    },
    addAllToQueue: (state, action: PayloadAction<Array<INowPlaying>>) => {
      action.payload.forEach((a) => {
        const exists = state.playQueue.find((r) => r.track.id === a.track.id);
        if (!exists) {
          state.playQueue.push(a);
        }
      });
    },
    clearQueue: (state) => {
      state.playQueue = initialState.playQueue;
    },
    removeFromQueue: (state, action: PayloadAction<string>) => {
      state.playQueue = state.playQueue.filter((q) => q.track.id !== action.payload);
    },
    play: (state, action: PayloadAction<string>) => {
      const queueItem = state.playQueue.filter((q) => q.track.id !== action.payload);
      if (queueItem && queueItem.length !== 0) {
        state.nowPlaying = queueItem[0];
      }
    },
    playNext: (state) => {
      const nextItem: INowPlaying | undefined = state.playQueue.shift();
      if (nextItem) {
        state.nowPlaying = nextItem;
      } else {
        state.playState = PlayState.stopped;
        state.nowPlaying = undefined;
      }
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
  setCurrentVolume,
  setMuted,
  removeFromQueue,
  addToQueue,
  addAllToQueue,
  clearQueue,
  play,
  playNext,
} = audioSlice.actions;
export default audioSlice.reducer;
