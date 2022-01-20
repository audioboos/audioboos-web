import React from "react";
import { useSelector } from "react-redux";
import { PlayState } from "../../store/redux/audio";
import { RootState } from "../../store/redux/store";
import MiniPlayer from "../widgets/players/MiniPlayer";

const Footer = () => {
    const playState = useSelector((state: RootState) => state.audio.playState);
    return (
        <div className="sticky bottom-0 left-0 ">
            {(playState === PlayState.playing ||
                playState === PlayState.paused) && <MiniPlayer />}
        </div>
    );
};

export default Footer;
