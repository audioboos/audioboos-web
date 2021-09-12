import { Track } from ".";

export interface Album {
  id: number;
  name: string;
  description: string;
  largeImage: string;
  smallImage: string;
  tracks?: Track[];
}
