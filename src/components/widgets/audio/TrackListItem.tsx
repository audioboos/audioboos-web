import React from "react";
import { Track } from "../../../models";
import useAudioStore from "../../../services/audio/audioStore";
interface ITrackListItemProps {
    track: Track;
}

const TrackListItem = ({ track: t }: ITrackListItemProps) => {
    const setNowPlaying = useAudioStore((state) => state.setNowPlaying);
    const nowPlayingId = useAudioStore((state) => state.id);
    const togglePlayState = useAudioStore((state) => state.togglePlayState);
    const playState = useAudioStore((state) => state.playState);
    const loading = false;

    const _playClick = (track: Track) => {
        if (nowPlayingId !== track.id && track.audioUrl) {
            setNowPlaying(track.id, track.audioUrl);
        } else if (nowPlayingId === track.id) {
            togglePlayState();
        }
    };
    return (
        <tr
            key={t.id}
            className="h-10 text-sm leading-none text-gray-800 border-t border-b border-gray-100 hover:bg-gray-100"
        >
            <td className="pl-4 cursor-pointer">
                <div className="pl-4">
                    <p className="font-medium">{t.trackNumber}</p>
                </div>
            </td>
            <td className="pl-12">
                <p className="text-sm font-medium leading-none text-gray-800">
                    {t.name}
                </p>
            </td>
            <td>
                <button onClick={() => _playClick(t)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </button>
            </td>
        </tr>
    );
};

export default TrackListItem;
