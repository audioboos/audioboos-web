import { StyledEngineProvider, ThemeProvider } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from "react-router-dom";
import { useRecoilState } from "recoil";
import { Layout } from "./components/layout";
import AlbumPage from "./pages/AlbumPage";
import ArtistPage from "./pages/ArtistPage";
import ArtistsPage from "./pages/ArtistsPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import DebugPage from "./pages/DebugPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import authService from "./services/api/authService";
import { auth, siteConfig } from "./store";
import theme from "./themes";

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
    const [settings] = useRecoilState(siteConfig);
    return (
        <Router>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme(settings)}>
                    <Layout>
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
                            <Route path="/artist/:artistName">
                                <ArtistPage />
                            </Route>
                            <Route exact path="/">
                                <HomePage />
                            </Route>
                            <Route path="/404" component={NotFoundPage} />
                            <Redirect to="/404" />
                        </Switch>
                    </Layout>
                </ThemeProvider>
            </StyledEngineProvider>
        </Router>
    );
}

export default App;
