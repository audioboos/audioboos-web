import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAudioStore } from "../../../services/audio";
import { setSeekPosition } from "../../../store/redux/audio";
import { RootState } from "../../../store/redux/store";
import { makeRangeMapper } from "../../../utils/ranges";
import { secondsToReadableString } from "../../../utils/time";

const MiniPlayer = () => {
    const duration = useSelector((state: RootState) => state.audio.duration);
    const position = useSelector((state: RootState) => state.audio.position);
    const dispatch = useDispatch();

    const togglePlayState = useAudioStore((state) => state.togglePlayState);
    const playState = useAudioStore((state) => state.playState);

    const [progressPercentage, setProgressPercentage] = useState(0);

    const _handleTimeClick = ($event: React.MouseEvent<HTMLDivElement>) => {
        let currentTargetRect = $event.currentTarget.getBoundingClientRect();
        const eventOffsetX = $event.pageX - currentTargetRect.left;
        let mapFn = makeRangeMapper(0, currentTargetRect.width, 0, duration);
        if (mapFn) {
            let position = mapFn(eventOffsetX);
            dispatch(setSeekPosition(position));
        }
    };

    React.useEffect(() => {
        // unload the player on unmount
        return () => {
            setProgressPercentage((position / duration) * 100);
        };
    }, [position, progressPercentage, duration]);

    return (
        <div className="flex h-full p-2 justify-items-stretch ">
            <div
                className="w-8 cursor-pointer stroke-1 "
                onClick={() => togglePlayState()}
            >
                {playState === 1 ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                )}
            </div>
            <div className="flex items-center w-full pl-2">
                <div className="mr-4 text-sm text-gray-400 elapsed">
                    {secondsToReadableString(position)}
                </div>
                <div
                    className="w-full h-full progress"
                    onClick={_handleTimeClick}
                >
                    <div className="mt-4">
                        <div className="h-1 bg-purple-100 rounded-full">
                            <div
                                className="relative h-1 bg-purple-400 rounded-full"
                                style={{ width: `${progressPercentage}%` }}
                            >
                                <span className="invisible w-4 h-4 bg-indigo-600 absolute right-0 bottom-0 -mb-1.5 rounded-full shadow"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ml-4 text-sm text-gray-400 total">
                    {secondsToReadableString(duration)}
                </div>
            </div>
        </div>
    );
};

export default MiniPlayer;
