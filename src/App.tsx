import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from './components/layout';
import PrivateRoute from './components/providers/PrivateRoute';
import ArtistPage from './pages/ArtistPage';
import LoginPage from './pages/auth/LoginPage';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
import SetupPage from './pages/setup/SetupPage';
import { AudioProvider } from './services/audio';
import { useSettingsQuery } from './store/redux/api';

const App = () => {
  return (
    <AudioProvider>
      <Layout>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} fallback={LandingPage} />
          <PrivateRoute path="/artist/:artistName" component={ArtistPage} redirect={'/login'} />
          <Route path="/setup/:stage" component={SetupPage} />
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </Layout>
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
      return <h1>ERROR ERROR ERROR</h1>;
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
