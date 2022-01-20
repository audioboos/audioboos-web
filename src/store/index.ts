import store, { RootState } from './redux/store';
export enum LoginStatus {
  checking,
  loggedIn,
  notLoggedIn,
}
export type { RootState };

export default store;
