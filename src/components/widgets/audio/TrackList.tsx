import React from "react";
import { Album } from "../../../models";
import TrackListItem from "./TrackListItem";

interface ITrackListProps {
    artistName: string;
    album: Album | undefined;
}
const TrackList = ({ artistName, album }: ITrackListProps) => {
    return (
        <table className="w-full bg-white table-auto whitespace-nowrap">
            <thead className="">
                <tr className="w-full h-16 text-sm leading-none text-gray-800">
                    <th className="pl-4 font-normal text-left">#</th>
                    <th className="pl-12 font-normal">Name</th>
                    <th className="pl-12 font-normal text-right"></th>
                </tr>
            </thead>
            <tbody className="w-full">
                {album?.tracks?.map((t) => {
                    return <TrackListItem key={t.id} track={t} />;
                })}
            </tbody>
        </table>
    );
};

export default TrackList;
