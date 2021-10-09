import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/redux/store";
export interface IAudioProviderProps {
    children: React.ReactNode;
}

const AudioProvider: React.FC<IAudioProviderProps> = ({ children }) => {
    const [audio, setAudio] = React.useState<HTMLAudioElement>();
    const url = useSelector((state: RootState) => state.audio.url);

    // const progressTimer = useRef<NodeJS.Timeout>();
    // const dispatch = useDispatch();

    //
    // const playState = useSelector((state: RootState) => state.audio.playState);

    React.useEffect(() => {
        if (!url) return;

        setAudio(new Audio(url));
    }, [url]);
    React.useEffect(() => {
        if (!audio) return;

        audio.play();
    }, [audio]);
    return <React.Fragment>{children}</React.Fragment>;
};

export default AudioProvider;
