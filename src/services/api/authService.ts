import ApiService from "./apiService";

class AuthService extends ApiService {
    isAuthenticated = async (redirect: boolean = false): Promise<boolean> => {
        const client = await this.getInstance();

        try {
            const response = await client.get("/auth/p");
            return response && response.status === 200;
        } catch (err) {
            console.error("Exception fetching settings", err);
            if (redirect) throw err;
        }
        return false;
    };
    logout = async (): Promise<boolean> => {
        const client = await this.getInstance();

        try {
            const response = await client.post("/auth/logout");
            return response.status === 200;
        } catch (err) {
            console.error("authService", "logout", err);
        }
        return false;
    };

    login = async (username: string, password: string): Promise<boolean> => {
        const client = await this.getInstance();

        try {
            const response = await client.post("/auth/login", {
                email: username,
                password: password,
            });
            return response && response.status === 200;
        } catch (err) {
            console.error("Exception fetching settings", err);
        }
        return false;
    };
    register = async (
        username: string,
        password: string,
        confirmPassword: string
    ): Promise<boolean> => {
        const client = await this.getInstance();

        try {
            const response = await client.post("/auth/register", {
                email: username,
                password: password,
                confirmPassword: confirmPassword,
            });
            return response && response.status === 200;
        } catch (err) {
            console.error("Exception fetching settings", err);
        }
        return false;
    };
}
const authService = new AuthService();
export default authService;
