import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppWrapper from './App';
import './index.css';
import store from './store/redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <AppWrapper />
        <ToastContainer />
      </HelmetProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// reportWebVitals(console.log);
