import React from "react";
import { useAudioStore } from "../../services/audio";
import { PlayState } from "../../services/audio/audioStore";
import MiniPlayer from "../widgets/players/MiniPlayer";

const Footer = () => {
    const playState = useAudioStore((state) => state.playState);
    return (
        <div className="sticky bottom-0 left-0 bg-gray-50 ">
            {playState === PlayState.playing ||
                true ||
                (playState === PlayState.paused && <MiniPlayer />)}
            <MiniPlayer />
        </div>
    );
};

export default Footer;
