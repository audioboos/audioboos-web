import React from "react";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import authService from "../../../services/api/authService";
import { auth } from "../../../store";

const Authentication = () => {
    const history = useHistory();
    const [authSettings, setAuthSettings] = useRecoilState(auth);

    const authenticatedView = () => {
        return (
            <React.Fragment>
                <div className="relative my-2">
                    <button
                        onClick={async () => {
                            const result = await authService.logout();
                            if (result) {
                                setAuthSettings({ isLoggedIn: false });
                                result && history.push("/");
                            }
                        }}
                        className="px-5 py-2 text-xs text-gray-600 transition duration-150 ease-in-out bg-gray-100 border border-gray-300 rounded focus:outline-none hover:bg-gray-300"
                    >
                        Logout
                    </button>
                </div>
            </React.Fragment>
        );
    };
    const anonymousView = (registerPath: string, loginPath: string) => {
        return (
            <React.Fragment>
                <div className="relative mx-2 my-2">
                    <a
                        href={registerPath}
                        className="px-5 py-2 text-xs text-gray-600 transition duration-150 ease-in-out bg-gray-100 border border-gray-300 rounded focus:outline-none hover:bg-gray-300"
                    >
                        Register
                    </a>
                </div>
                <div className="relative mx-2 my-2">
                    <a
                        href={loginPath}
                        className="px-5 py-2 text-xs text-gray-600 transition duration-150 ease-in-out bg-gray-100 border border-gray-300 rounded focus:outline-none hover:bg-gray-300"
                    >
                        Login
                    </a>
                </div>
            </React.Fragment>
        );
    };

    return authSettings.isLoggedIn
        ? authenticatedView()
        : anonymousView("/register", "/login");
};

export default Authentication;
