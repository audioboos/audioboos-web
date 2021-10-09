import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    PlayState,
    setDuration,
    setPlayState,
    setPosition
} from "../../store/redux/audio";
import { RootState } from "../../store/redux/store";
export interface IAudioProviderProps {
    children: React.ReactNode;
}

const AudioProvider: React.FC<IAudioProviderProps> = ({ children }) => {
    const dispatch = useDispatch();
    const [audio, setAudio] = React.useState<HTMLAudioElement>();
    const url = useSelector((state: RootState) => state.audio.url);

    // const progressTimer = useRef<NodeJS.Timeout>();

    //

    React.useEffect(() => {
        if (!url) return;

        setAudio(new Audio(url));
    }, [url]);

    React.useEffect(() => {
        if (!audio || !dispatch) return;

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
