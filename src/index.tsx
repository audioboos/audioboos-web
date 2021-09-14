import React from "react";
import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <HelmetProvider>
                <App />
                <ToastContainer />
            </HelmetProvider>
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals(console.log);
