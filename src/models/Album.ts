import { Track } from ".";
import { DateOnly } from "./types/dateonly";

export interface Album {
    id: number;
    name: string;
    description: string;
    largeImage: string;
    smallImage: string;
    releaseDate: DateOnly;
    tracks?: Track[];
}
