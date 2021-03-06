import { Album } from ".";

export interface Artist {
    id: number;
    name: string;
    description: string;
    largeImage: string;
    smallImage: string;
    thumbnail: string;
    albums: Album[];
}
