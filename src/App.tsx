import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthLayout, Layout } from './components/layout';
import AlbumPage from './pages/AlbumPage';
import ArtistPage from './pages/ArtistPage';
import LoginPage from './pages/auth/LoginPage';
import Dashboard from './pages/Dashboard';
import DebugPage from './pages/DebugPage';
import Error500Page from './pages/error/500Page';
import SplashScreen from './pages/splash/SplashScreen';
import LandingPage from './pages/LandingPage';
import SetupPage from './pages/setup/SetupPage';
import { AudioProvider } from './services/audio';
import UserMiddleware from './services/user-resolver.middleware';
import {
  selectIsLoggedIn,
  LoginStatus,
  selectLoginStatus,
  setCredentials,
  setAuthChecked,
} from './store/auth';
import { useSettingsQuery } from './store/redux/api';
import { useAuthUser } from './services/use-user.hook';
import api from './store/redux/api';
import authService from './services/api/authService';
import { Profile } from './models/Profile';

const App = () => {
  const [user, setUser] = React.useState<Profile | null>(null);
  const checkLoginStatus = () => {
    authService
      .getProfile()
      .then((r) => {
        console.log('App', 'loggedIn?', r);
        if (r) {
          setUser(r);
          dispatch(setCredentials(r));
        } else {
          dispatch(setAuthChecked(true));
        }
      })
      .catch((err) => console.log('App', 'errorCheckingLogin', err));
  };
  React.useEffect(() => {
    checkLoginStatus();
  }, []);
  const dispatch = useDispatch();
  const loginStatus = useSelector(selectLoginStatus);
  return (
    <AudioProvider>
      {loginStatus === LoginStatus.loggedIn ? (
        <AuthLayout>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/debug" component={DebugPage} />
            <Route exact path="/artist/:artistName" component={ArtistPage} />
            <Route exact path="/artist/:artistName/:albumName" component={AlbumPage} />
            <Route path="/setup/:stage" component={SetupPage} />
          </Switch>
        </AuthLayout>
      ) : loginStatus === LoginStatus.checking ? (
        <SplashScreen />
      ) : (
        <Layout>
          <LoginPage />
        </Layout>
      )}
    </AudioProvider>
  );
};
enum State {
  Loading,
  Authing,
  Loaded,
  Error,
}
const AppWrapper = () => {
  const settings = useSettingsQuery();
  const [state, setState] = React.useState<State>(State.Loading);

  React.useEffect(() => {
    if (settings.isLoading || settings.isFetching) {
      setState(State.Loading);
    } else if (settings.isSuccess && settings.data) {
      setState(State.Loaded);
    } else if (settings.isError) {
      setState(State.Error);
    }
  }, [settings]);

  const _renderLayout = (): React.ReactNode => {
    if (state === State.Error) {
      return <Error500Page />;
    } else if (state === State.Loading) {
      return <div>Loading...</div>;
    } else if (settings?.data?.siteName) {
      return <App />;
    } else {
      return <SetupPage />;
    }
  };
  return <Router>{_renderLayout()}</Router>;
};

export default AppWrapper;
