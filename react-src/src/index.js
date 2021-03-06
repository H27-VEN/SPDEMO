/* global document */
import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from 'react-redux';
import { Provider } from "redux-zero/react";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import store from "./store";
import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
