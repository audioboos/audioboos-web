import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthLayout, Layout } from './components/layout';
import AlbumPage from './pages/album-page.component';
import ArtistPage from './pages/artist-page.component';
import LoginPage from './pages/auth/LoginPage';
import DebugPage from './pages/debug-page.component';
import { SplashScreen } from './pages/splash';
import { AudioProvider } from './services/audio';
import { LoginStatus, selectLoginStatus, setCredentials, setAuthChecked } from './store/auth';
import { useSettingsQuery } from './store/redux/api';
import authService from './services/api/auth.service';
import { Profile } from './models/Profile';
import DashboardComponent from './features/dashboard/dashboard.component';
import { SetupPage } from './pages/setup';
import { Error500Page } from './pages/error';
import Greebles from './pages/greebles-page.comonent';
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
          <Routes>
            <Route path="/" element={<DashboardComponent />} />
            <Route path="/debug" element={<DebugPage />} />
            <Route path="/artist/:artistName" element={<ArtistPage />} />
            <Route path="/artist/:artistName/:albumName" element={<AlbumPage />} />
            <Route path="/setup/:stage" element={<SetupPage />} />
          </Routes>
        </AuthLayout>
      ) : loginStatus === LoginStatus.checking ? (
        <SplashScreen />
      ) : (
        <Layout>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/greebles" element={<Greebles />} />
          </Routes>
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
