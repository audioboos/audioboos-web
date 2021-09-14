import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useRecoilState } from "recoil";
import { AuthLayout, Layout } from "./components/layout";
import AlbumPage from "./pages/AlbumPage";
import ArtistPage from "./pages/ArtistPage";
import ArtistsPage from "./pages/ArtistsPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import DebugPage from "./pages/DebugPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import authService from "./services/api/authService";
import { auth } from "./store";

function App() {
    const [authSettings, setAuthSettings] = useRecoilState(auth);

    useEffect(() => {
        const checkIsAuth = async () => {
            const result = await authService.isAuthed();
            setAuthSettings({ ...authSettings, isLoggedIn: result });
        };

        checkIsAuth();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const _getLayout = (children: React.ReactNode) => {
        return authSettings.isLoggedIn ? (
            <AuthLayout>{children}</AuthLayout>
        ) : (
            <Layout>{children}</Layout>
        );
    };
    return (
        <Router>
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
                    <Route path="/artist/:artistName/:albumName">
                        <AlbumPage />
                    </Route>
                    <Route
                        path="/artist/:artistName"
                        render={(props) => (
                            <ArtistPage
                                artistName={props.match.params.artistName}
                            />
                        )}
                    />
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/404" component={NotFoundPage} />
                    <Redirect to="/404" />
                </Switch>
            )}
        </Router>
    );
}

export default App;
