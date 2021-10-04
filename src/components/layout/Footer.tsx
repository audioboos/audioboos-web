import React from "react";
import { useAudioStore } from "../../services/audio";
import { PlayState } from "../../services/audio/audioStore";
import MiniPlayer from "../widgets/players/MiniPlayer";

const Footer = () => {
    const playState = useAudioStore((state) => state.playState);
    return (
        <React.Fragment>
            {playState === PlayState.playing ||
                (playState === PlayState.paused && (
                    <div>
                        <MiniPlayer />
                    </div>
                ))}
        </React.Fragment>
    );
};

export default Footer;
