import ApiService from './api.service';

class JobService extends ApiService {
  scanArtist = async (artistName: string): Promise<boolean> => {
    const client = await this.getInstance();

    try {
      const response = await client.post(
        `/job/scanartist?artistName=${encodeURIComponent(artistName)}`
      );
      if (response && response.status === 200) {
        return true;
      }
    } catch (err) {
      console.error('Exception fetching settings', err);
    }
    return false;
  };
  startJob = async (jobName: string): Promise<boolean> => {
    const client = await this.getInstance();

    try {
      const response = await client.post(`/job/start?name=${jobName}`);
      if (response && response.status === 200) {
        return true;
      }
    } catch (err) {
      console.error('Exception fetching settings', err);
    }
    return false;
  };
}
const jobService = new JobService();
export default jobService;
