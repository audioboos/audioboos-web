import ApiService from "./apiService";

class JobService extends ApiService {
    startJob = async (jobName: string): Promise<boolean> => {
        const client = await this.requestClient();

        try {
            const response = await client.post(`/job/start?name=${jobName}`);
            if (response && response.status === 200) {
                return true;
            }
        } catch (err) {
            console.error("Exception fetching settings", err);
        }
        return false;
    };
}
const jobService = new JobService();
export default jobService;
