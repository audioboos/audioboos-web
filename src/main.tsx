import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import App from './App';
import './index.css';
import store from './store/redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <App />
        <ToastContainer />
      </HelmetProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// reportWebVitals(console.log);
