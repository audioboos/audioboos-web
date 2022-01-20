import store, { RootState } from './redux/store';
export enum LoginStatus {
  checking,
  loggedIn,
  notLoggedIn,
}
export { RootState };

export default store;
