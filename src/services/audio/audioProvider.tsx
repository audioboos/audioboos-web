import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    playNext,
    PlayState,
    setDuration,
    setPlayState,
    setPosition,
    setSeekPosition
} from "../../store/redux/audio";
import { RootState } from "../../store/redux/store";
export interface IAudioProviderProps {
    children: React.ReactNode;
}

const AudioProvider: React.FC<IAudioProviderProps> = ({ children }) => {
    const dispatch = useDispatch();
    const audio = React.useRef<HTMLAudioElement>(new Audio());

    const nowPlaying = useSelector(
        (state: RootState) => state.audio.nowPlaying
    );
    const playState = useSelector((state: RootState) => state.audio.playState);
    const seekPosition = useSelector(
        (state: RootState) => state.audio.seekPosition
    );
    const currentVolume = useSelector(
        (state: RootState) => state.audio.currentVolume
    );
    const muted = useSelector((state: RootState) => state.audio.muted);

    React.useEffect(() => {
        const cleanup = audio.current;
        audio.current.addEventListener("timeupdate", () => {
            dispatch(setPosition(audio.current.currentTime));
        });
        audio.current.addEventListener("ended", () => dispatch(playNext()));
        return () => {
            cleanup.removeEventListener("timeupdate", () => {});
            cleanup.removeEventListener("ended", () => {});
        };
    }, [dispatch]);

    React.useEffect(() => {
        //TODO: This smells a bit?
        if (!nowPlaying?.track.audioUrl) return;
        audio.current.pause();
        dispatch(setSeekPosition(0));
        dispatch(setPosition(0));
        audio.current.src = nowPlaying?.track.audioUrl;
        audio.current.currentTime = 0;

        if (!audio || !dispatch) return;
        audio.current.play().then(() => {
            dispatch(setDuration(audio.current.duration));
            dispatch(setPlayState(PlayState.playing));
        });
    }, [nowPlaying, dispatch]);

    React.useEffect(() => {
        audio.current.currentTime = seekPosition;
    }, [seekPosition]);

    React.useEffect(() => {
        audio.current.volume = currentVolume >= 0 ? currentVolume : 0;
    }, [currentVolume]);

    React.useEffect(() => {
        if (playState === PlayState.paused) {
            audio.current.pause();
        } else if (playState === PlayState.playing) {
            audio.current.play();
        }
    }, [playState]);

    React.useEffect(() => {
        audio.current.muted = muted;
    }, [muted]);

    return <React.Fragment>{children}</React.Fragment>;
};

export default AudioProvider;
