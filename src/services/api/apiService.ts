import axios, { AxiosInstance } from "axios";

class ApiService {
    private static _client: AxiosInstance | undefined = undefined;
    private static _cancelToken: any;
    private static _source: any;

    public cancel = () => {
        if (
            ApiService._client !== undefined &&
            ApiService._source !== undefined
        ) {
            ApiService._source().cancel();
        }
    };
    protected getInstance = async (): Promise<AxiosInstance> => {
        if (!ApiService._client) {
            ApiService._client = await this.__requestClient();
            ApiService._cancelToken = axios.CancelToken;
            ApiService._source = axios.CancelToken.source;
        }
        if (ApiService._client === undefined) {
            throw Error("Unable to resolve axios client");
        }
        return ApiService._client;
    };
    private __requestClient = async () => {
        process.env.NODE_TLS_REJECT_UNAuthorisED = "0";
        const instance = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            maxRedirects: 0,
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
        });
        return instance;
    };
}
export default ApiService;
