import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
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
    const [audio, setAudio] = React.useState<HTMLAudioElement>();
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
        //TODO: This smells a bit?
        if (!nowPlaying?.track.audioUrl) return;
        if (audio) {
            audio.pause();
            setAudio(undefined);
            dispatch(setSeekPosition(0));
            dispatch(setPosition(0));
            setAudio(new Audio(nowPlaying?.track.audioUrl));
            audio.currentTime = 0;
        } else {
            setAudio(new Audio(nowPlaying?.track.audioUrl));
        }
    }, [nowPlaying]);

    React.useEffect(() => {
        if (!audio) return;
        audio.currentTime = seekPosition;
    }, [seekPosition, audio]);

    React.useEffect(() => {
        if (!audio) return;
        audio.volume = currentVolume;
    }, [currentVolume]);

    React.useEffect(() => {
        if (!audio) return;
        if (playState === PlayState.paused) {
            audio.pause();
        } else if (playState === PlayState.playing) {
            audio.play();
        }
    }, [playState, audio]);

    React.useEffect(() => {
        console.log("audioProvider", "useEffect_audio, dispatch", audio);
        if (!audio || !dispatch) return;
        audio.volume = currentVolume;
        audio.play();
        audio.addEventListener("loadeddata", () => {
            dispatch(setDuration(audio.duration));
            dispatch(setPlayState(PlayState.playing));
        });
        audio.addEventListener("timeupdate", () => {
            dispatch(setPosition(audio.currentTime));
        });
    }, [audio, dispatch]);

    return <React.Fragment>{children}</React.Fragment>;
};

export default AudioProvider;
