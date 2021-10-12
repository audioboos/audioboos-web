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
    React.useEffect(() => {
        audio.current.addEventListener("timeupdate", () => {
            dispatch(setPosition(audio.current.currentTime));
        });
        audio.current.addEventListener("ended", () => dispatch(playNext()));
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
        audio.current.volume = currentVolume;
    }, [currentVolume]);

    React.useEffect(() => {
        if (playState === PlayState.paused) {
            audio.current.pause();
        } else if (playState === PlayState.playing) {
            audio.current.play();
        }
    }, [playState]);

    return <React.Fragment>{children}</React.Fragment>;
};

export default AudioProvider;
