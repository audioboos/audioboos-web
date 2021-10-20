import React, { useState } from "react";
import {
    MdFavoriteBorder,
    MdPauseCircleFilled,
    MdPlayCircleFilled,
    MdSkipNext
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { MiniActionButton, QueueControl, VolumeControl } from "..";
import {
    playNext,
    PlayState,
    setCurrentVolume,
    setSeekPosition,
    togglePlayState
} from "../../../store/redux/audio";
import { RootState } from "../../../store/redux/store";
import { makeRangeMapper } from "../../../utils/ranges";
import { secondsToReadableString } from "../../../utils/time";

const MiniPlayer = () => {
    const dispatch = useDispatch();
    const duration = useSelector((state: RootState) => state.audio.duration);
    const position = useSelector((state: RootState) => state.audio.position);
    const playState = useSelector((state: RootState) => state.audio.playState);
    const currentVolume = useSelector(
        (state: RootState) => state.audio.currentVolume
    );
    const nowPlaying = useSelector(
        (state: RootState) => state.audio.nowPlaying
    );

    const [progressPercentage, setProgressPercentage] = useState(0);

    const _handleTimeClick = ($event: React.MouseEvent<HTMLDivElement>) => {
        let currentTargetRect = $event.currentTarget.getBoundingClientRect();
        const eventOffsetX = $event.pageX - currentTargetRect.left;
        let mapFn = makeRangeMapper(0, currentTargetRect.width, 0, duration);
        let position = mapFn(eventOffsetX);
        dispatch(setSeekPosition(position));
    };

    React.useEffect(() => {
        // unload the player on unmount
        return () => {
            setProgressPercentage((position / duration) * 100);
        };
    }, [position, progressPercentage, duration]);

    return (
        <div className="flex items-center h-16 p-2 bg-gray-800">
            <div
                className="flex-none w-16 p-1 text-gray-300 cursor-pointer stroke-0 align-center"
                onClick={() => dispatch(togglePlayState())}
            >
                {playState === PlayState.playing ? (
                    <MdPauseCircleFilled className="w-full h-full delay-100 hover:text-gray-400" />
                ) : (
                    <MdPlayCircleFilled className="w-full h-full delay-100 hover:text-gray-400" />
                )}
            </div>
            <div className="flex-none w-16 p-2">
                <img
                    src={nowPlaying?.album.smallImage}
                    alt={nowPlaying?.album.name}
                />
            </div>
            <div className="flex-none">
                <div className="flex flex-col px-2 text-sm">
                    <div className="flex-grow font-medium text-gray-200">
                        {nowPlaying?.artist.name}
                    </div>
                    <div className="font-light text-gray-200">
                        {nowPlaying?.track.name}
                    </div>
                </div>
            </div>
            <div
                id="left-button-bar"
                className="flex flex-row px-1 space-x-1 text-gray-400"
            >
                <MiniActionButton
                    tooltip="Add to favourites"
                    onClick={() => console.log("MiniPlayer", "Favey")}
                >
                    <MdFavoriteBorder />
                </MiniActionButton>
                <MiniActionButton onClick={() => dispatch(playNext())}>
                    <MdSkipNext />
                </MiniActionButton>
            </div>
            <div className="flex items-center flex-grow w-full px-1">
                <div className="mr-4 text-sm text-gray-400">
                    {secondsToReadableString(position)}
                </div>
                <div className="w-full h-full progress">
                    <div
                        className="h-3 bg-indigo-100 rounded-full"
                        onClick={_handleTimeClick}
                    >
                        <div
                            className="relative h-3 bg-indigo-600 rounded-l-full rounded-r-none"
                            style={{ width: `${progressPercentage}%` }}
                        ></div>
                    </div>
                </div>
                <div className="ml-4 text-sm text-gray-400">
                    {secondsToReadableString(duration)}
                </div>
            </div>
            <div
                id="right-button-bar"
                className="flex flex-row space-x-1 text-gray-400"
            >
                <div id="volume">
                    <VolumeControl
                        volume={currentVolume}
                        onVolumeChanged={(volume) =>
                            dispatch(setCurrentVolume(volume))
                        }
                    />
                </div>
                <div id="queue">
                    <QueueControl />
                </div>
            </div>
        </div>
    );
};

export default MiniPlayer;
