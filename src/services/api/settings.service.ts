import { InitialSettings, Settings } from '../../models';
import ApiService from './api.service';

class SettingsService extends ApiService {
  getSettings = async (): Promise<Settings | undefined> => {
    const client = await this.getInstance();

    try {
      const response = await client.get('/settings');
      if (response && response.status === 200) {
        return response.data as Settings;
      }
    } catch (err) {
      console.error('Exception fetching settings', err);
      throw err;
    }
  };
  postSettings = async (settings: InitialSettings): Promise<Settings | undefined> => {
    const client = await this.getInstance();

    try {
      const response = await client.post('/settings', settings);
      if (response && response.status === 200) {
        return response.data as Settings;
      }
    } catch (err) {
      console.error('Exception posting settings', err);
      throw err;
    }
  };
}
const settingsService = new SettingsService();
export default settingsService;
