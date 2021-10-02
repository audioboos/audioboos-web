import React from "react";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
    useHistory
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useRecoilState } from "recoil";
import { AuthLayout, Layout } from "./components/layout";
import AlbumPage from "./pages/AlbumPage";
import ArtistPage from "./pages/ArtistPage";
import ArtistsPage from "./pages/ArtistsPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import Dashboard from "./pages/Dashboard";
import DebugPage from "./pages/DebugPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import authService from "./services/api/authService";
import { auth } from "./store";

const App = () => {
    return (
        <Router>
            <INNER_APP />
        </Router>
    );
};

const INNER_APP = () => {
    const history = useHistory();
    const [authSettings, setAuthSettings] = useRecoilState(auth);

    React.useEffect(() => {
        const checkIsAuth = async () => {
            try {
                const result = await authService.isAuthed(true);
                setAuthSettings({ ...authSettings, isLoggedIn: result });
            } catch (err) {
                history.push("/login");
            }
        };

        checkIsAuth();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [history]);
    const _getLayout = (children: React.ReactNode) => {
        return authSettings.isLoggedIn ? (
            <AuthLayout>{children}</AuthLayout>
        ) : (
            <Layout>{children}</Layout>
        );
    };
    return (
        <React.Fragment>
            {_getLayout(
                <Switch>
                    <Route path="/artists">
                        <ArtistsPage />
                    </Route>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                    <Route path="/register">
                        <RegisterPage />
                    </Route>
                    <Route path="/debug">
                        <DebugPage />
                    </Route>
                    <Route
                        path="/artist/:artistName/:albumName"
                        render={(props) => (
                            <AlbumPage
                                artistName={props.match.params.artistName}
                                albumName={props.match.params.albumName}
                            />
                        )}
                    />
                    <Route
                        path="/artist/:artistName"
                        render={(props) => (
                            <ArtistPage
                                artistName={props.match.params.artistName}
                            />
                        )}
                    />
                    <Route exact path="/">
                        {authSettings.isLoggedIn ? <Dashboard /> : <HomePage />}
                    </Route>
                    <Route path="/404" component={NotFoundPage} />
                    <Redirect to="/404" />
                </Switch>
            )}
        </React.Fragment>
    );
};

export default App;
