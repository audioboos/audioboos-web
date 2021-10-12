import { DocumentAddIcon, PlayIcon, ShareIcon } from "@heroicons/react/outline";
import React from "react";
import { useDispatch } from "react-redux";
import { Album, Artist, Track } from "../../../models";
import { setNowPlaying } from "../../../store/redux/audio";
import MiniActionButton from "../MiniActionButton";

interface ITrackListItemProps {
    artist: Artist;
    album: Album;
    track: Track;
}

const TrackListItem = ({ artist, album, track }: ITrackListItemProps) => {
    const dispatch = useDispatch();

    const _addToPlaylist = (track: Track) => {
        alert("Adding to playlist");
    };
    const _openShare = (track: Track) => {
        alert("Sharing");
    };
    const _playClick = (track: Track) => {
        dispatch(setNowPlaying({ artist, album, track }));
    };
    return (
        <tr
            key={track.id}
            className="text-sm leading-none text-gray-800 border-t border-b border-gray-100 hover:bg-gray-100"
        >
            <td className="pl-4 cursor-pointer">
                <div className="pl-4">
                    <p className="font-medium">{track.trackNumber}</p>
                </div>
            </td>
            <td className="pl-12">
                <p className="text-sm font-medium leading-none text-gray-800">
                    {track.name}
                </p>
            </td>
            <td className="float-right mx-4">
                <MiniActionButton
                    onClick={() => _playClick(track)}
                    tooltip="Play item"
                >
                    <PlayIcon />
                </MiniActionButton>
                <MiniActionButton
                    onClick={() => _addToPlaylist(track)}
                    tooltip="Add to playlist"
                >
                    <DocumentAddIcon />
                </MiniActionButton>{" "}
                <MiniActionButton
                    onClick={() => _openShare(track)}
                    tooltip="Share item"
                >
                    <ShareIcon />
                </MiniActionButton>
            </td>
        </tr>
    );
};

export default TrackListItem;
