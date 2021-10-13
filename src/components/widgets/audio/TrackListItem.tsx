import React from "react";
import {
    MdAddCircleOutline,
    MdOutlineIosShare,
    MdOutlinePauseCircleOutline,
    MdOutlinePlayCircleOutline,
    MdPostAdd
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Album, Artist, Track } from "../../../models";
import {
    addToQueue,
    PlayState,
    setNowPlaying,
    togglePlayState
} from "../../../store/redux/audio";
import { RootState } from "../../../store/redux/store";
import MiniActionButton from "../MiniActionButton";

interface ITrackListItemProps {
    artist: Artist;
    album: Album;
    track: Track;
}

const TrackListItem = ({ artist, album, track }: ITrackListItemProps) => {
    const dispatch = useDispatch();
    const nowPlaying = useSelector(
        (state: RootState) => state.audio.nowPlaying
    );
    const playState = useSelector((state: RootState) => state.audio.playState);
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
        if (nowPlaying?.track.id === track.id) {
            dispatch(togglePlayState());
        } else {
            dispatch(setNowPlaying({ artist, album, track }));
        }
    };
    return (
        <tr
            key={track.id}
            className="leading-none text-gray-800 border-t border-b border-gray-100 text-md hover:bg-gray-100"
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
                    {playState === PlayState.playing &&
                    nowPlaying?.track.id === track.id ? (
                        <MdOutlinePauseCircleOutline />
                    ) : (
                        <MdOutlinePlayCircleOutline />
                    )}
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
