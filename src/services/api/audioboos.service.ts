import { Album, Artist } from "../../models";
import ApiService from "./api.service";

class AudioBoosService extends ApiService {
    getArtists = async (): Promise<Artist[] | undefined> => {
        const client = await this.getInstance();

        try {
            const response = await client.get("/artists", {
                withCredentials: true,
            });
            if (response && response.status === 200) {
                return response.data as Artist[];
            }
        } catch (err) {
            console.error("Exception fetching settings", err);
            throw err;
        }
    };
    getArtist = async (artistName: string): Promise<Artist | undefined> => {
        const client = await this.getInstance();
        try {
            const response = await client.get(`/artists/${artistName}`, {
                withCredentials: true,
            });
            if (response && response.status === 200) {
                return response.data as Artist;
            }
        } catch (err) {
            console.error("Exception fetching settings", err);
            throw err;
        }
    };

    getAlbums = async (artistName: string): Promise<Album[] | undefined> => {
        const client = await this.getInstance();

        try {
            const response = await client.get(`album/${artistName}`);
            if (response && response.status === 200) {
                return response.data as Album[];
            }
        } catch (err) {
            console.error("Exception fetching settings", err);
            throw err;
        }
    };
    getAlbum = async (
        artistName: string,
        albumName: string
    ): Promise<Album | undefined> => {
        const client = await this.getInstance();

        try {
            const response = await client.get(
                `album/${artistName}/${albumName}`
            );
            if (response && response.status === 200) {
                return response.data as Album;
            }
        } catch (err) {
            console.error("Exception fetching settings", err);
            throw err;
        }
    };
}
const audioBoosService = new AudioBoosService();
export default audioBoosService;
