import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';
import App from './App';
import './index.css';
import store from './store/redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RecoilRoot>
        <HelmetProvider>
          <App />
          <ToastContainer />
        </HelmetProvider>
      </RecoilRoot>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// reportWebVitals(console.log);
