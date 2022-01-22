import ApiService from './api.service';

class FileSystemService extends ApiService {
  getDirectories = async (path: string = ''): Promise<string[] | undefined> => {
    const client = await this.getInstance();
    try {
      const response = await client.get(`/filesystem/directories${path && `?path=${path}`}`, {
        withCredentials: false,
      });
      if (response && response.status === 200) {
        return response.data as string[];
      }
    } catch (err) {
      console.error('Exception fetching settings', err);
      throw err;
    }
  };
}
const fileSystemService = new FileSystemService();
export default fileSystemService;
