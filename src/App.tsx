import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthLayout, Layout } from './components/layout';
import PrivateRoute from './components/providers/PrivateRoute';
import AlbumPage from './pages/AlbumPage';
import ArtistPage from './pages/ArtistPage';
import LoginPage from './pages/auth/LoginPage';
import Dashboard from './pages/Dashboard';
import DebugPage from './pages/DebugPage';
import Error500Page from './pages/error/500Page';
import LandingPage from './pages/LandingPage';
import SetupPage from './pages/setup/SetupPage';
import { AudioProvider } from './services/audio';
import UserMiddleware from './services/user-resolver.middleware';
import { selectIsLoggedIn } from './store/auth';
import { useSettingsQuery } from './store/redux/api';

const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <UserMiddleware>
      <AudioProvider>
        {isLoggedIn ? (
          <AuthLayout>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/debug" component={DebugPage} />
              <Route exact path="/artist/:artistName" component={ArtistPage} />
              <Route exact path="/artist/:artistName/:albumName" component={AlbumPage} />
              <Route path="/setup/:stage" component={SetupPage} />
            </Switch>
          </AuthLayout>
        ) : (
          <Layout>
            <LoginPage />
          </Layout>
        )}
      </AudioProvider>
    </UserMiddleware>
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
    console.log('App', 'AppWrapper', settings);
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

//   const [isAuthenticated, setIsAuthenticated] = React.useState(false);
//   const authQuery = useAuthQuery();
//   const _getLayout = (children: React.ReactNode) => {
//     return isAuthenticated ? <AuthLayout>{children}</AuthLayout> : <Layout>{children}</Layout>;
//   };

//   return (
//     <AudioProvider>
//       <Router>
//         {_getLayout(
//           <Switch>
//             <Route exact path="/">
//               {isAuthenticated ? <Dashboard /> : <LandingPage />}
//             </Route>
//             <Route path="/setup/:stage" component={SetupPage} />
//             <Route exact path="/login">
//               <LoginPage />
//             </Route>
//             {/* <PrivateRoute
//               component={<LoginPage />}
//               isAuthenticated={isAuthenticated}
//               isLoading={isLoading}
//               path="/login"
//             ></PrivateRoute> */}
//             {/* <PrivateRoute redirectTo={'/register'} component={RegisterPage} path="/register" />
//             <PrivateRoute component={DebugPage} path="/debug" />
//             <PrivateRoute component={<AlbumPage />} path="/artist/:artistName/:albumName" />

//             <Route
//               path="/artist/:artistName/:albumName"
//               render={(props) => (
//                 <AlbumPage
//                   artistName={props.match.params.artistName}
//                   albumName={props.match.params.albumName}
//                 />
//               )}
//             />
//             <Route
//               path="/artist/:artistName"
//               render={(props) => <ArtistPage artistName={props.match.params.artistName} />}
//             />
//             <Route path="/404" component={NotFoundPage} />
//             <Redirect to="/404" /> */}
//           </Switch>
//         )}
//       </Router>
//     </AudioProvider>
//   );
// };

export default AppWrapper;
