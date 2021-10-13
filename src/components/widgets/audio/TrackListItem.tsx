import React from "react";
import {
    MdAddCircleOutline,
    MdOutlineIosShare,
    MdOutlinePlayCircleOutline,
    MdPostAdd
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { Album, Artist, Track } from "../../../models";
import { addToQueue, setNowPlaying } from "../../../store/redux/audio";
import MiniActionButton from "../MiniActionButton";

interface ITrackListItemProps {
    artist: Artist;
    album: Album;
    track: Track;
}

const TrackListItem = ({ artist, album, track }: ITrackListItemProps) => {
    const dispatch = useDispatch();

    const _addToPlayQueue = () => {
        dispatch(
            addToQueue({
                artist,
                album,
                track,
            })
        );
    };
    const _addToPlaylist = () => {
        alert("Adding to playlist");
    };
    const _openShare = () => {
        alert("Sharing");
    };
    const _playClick = () => {
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
                <MiniActionButton onClick={_playClick} tooltip="Play item">
                    <MdOutlinePlayCircleOutline />
                </MiniActionButton>
                <MiniActionButton
                    onClick={_addToPlayQueue}
                    tooltip="Add to play queue"
                >
                    <MdAddCircleOutline />
                </MiniActionButton>
                <MiniActionButton
                    onClick={_addToPlaylist}
                    tooltip="Add to playlist"
                >
                    <MdPostAdd />
                </MiniActionButton>{" "}
                <MiniActionButton onClick={_openShare} tooltip="Share item">
                    <MdOutlineIosShare />
                </MiniActionButton>
            </td>
        </tr>
    );
};

export default TrackListItem;
