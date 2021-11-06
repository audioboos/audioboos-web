import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { useRecoilState } from 'recoil';
import { AuthLayout, Layout } from './components/layout';
import GuardedRoute from './components/providers/GuardedRoute';
import AlbumPage from './pages/AlbumPage';
import ArtistPage from './pages/ArtistPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import Dashboard from './pages/Dashboard';
import DebugPage from './pages/DebugPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import SetupPage from './pages/setup/SetupPage';
import authService from './services/api/authService';
import { AudioProvider } from './services/audio';
import { auth } from './store';

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
  const [firstRun, setIsFirstRun] = React.useState(true);

  React.useEffect(() => {
    const checkIsAuth = async () => {
      if (firstRun) {
        history.push('/setup');
        return;
      }
      try {
        const result = await authService.isAuthed(true);
        setAuthSettings({ ...authSettings, isLoggedIn: result });
      } catch (err) {
        history.push('/login');
      }
    };
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
      <AudioProvider>
        {_getLayout(
          <Switch>
            <Route exact path="/">
              {authSettings.isLoggedIn ? <Dashboard /> : <HomePage />}
            </Route>
            <Route path="/setup/:stage" component={SetupPage} />
            <GuardedRoute
              predicate={!firstRun}
              redirectTo={'/setup/first'}
              component={LoginPage}
              path="/login"
            />
            <GuardedRoute
              predicate={!firstRun}
              redirectTo={'/register'}
              component={RegisterPage}
              path="/register"
            />
            <GuardedRoute
              predicate={!firstRun && authSettings.isLoggedIn}
              redirectTo={firstRun ? '/setup/first' : '/login'}
              component={DebugPage}
              path="/debug"
            />
            <GuardedRoute
              predicate={!firstRun && authSettings.isLoggedIn}
              redirectTo={firstRun ? '/setup/first' : '/login'}
              component={<AlbumPage />}
              path="/artist/:artistName/:albumName"
            />

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
              render={(props) => <ArtistPage artistName={props.match.params.artistName} />}
            />
            <Route path="/404" component={NotFoundPage} />
            <Redirect to="/404" />
          </Switch>
        )}
      </AudioProvider>
    </React.Fragment>
  );
};

export default App;
