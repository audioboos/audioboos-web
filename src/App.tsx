import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from './components/layout';
import { Settings } from './models';
import LoginPage from './pages/auth/LoginPage';
import HomePage from './pages/HomePage';
import SetupPage from './pages/setup/SetupPage';
import { AudioProvider } from './services/audio';
import { useSettingsQuery } from './store/redux/api';
interface IAppProps {
  settings?: Settings;
}
const App = () => {
  return (
    <AudioProvider>
      <Layout>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/setup/:stage" component={SetupPage} />
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </Layout>
    </AudioProvider>
  );
};

const AppWrapper = () => {
  const settings = useSettingsQuery();
  return <Router>{settings?.data?.siteName ? <App /> : <SetupPage />}</Router>;

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
  //               {isAuthenticated ? <Dashboard /> : <HomePage />}
  //             </Route>
  //             <Route path="/setup/:stage" component={SetupPage} />
  //             <Route exact path="/login">
  //               <LoginPage />
  //             </Route>
  //             {/* <GuardedRoute
  //               component={<LoginPage />}
  //               isAuthenticated={isAuthenticated}
  //               isLoading={isLoading}
  //               path="/login"
  //             ></GuardedRoute> */}
  //             {/* <GuardedRoute redirectTo={'/register'} component={RegisterPage} path="/register" />
  //             <GuardedRoute component={DebugPage} path="/debug" />
  //             <GuardedRoute component={<AlbumPage />} path="/artist/:artistName/:albumName" />

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
};

export default AppWrapper;
