import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { reducers } from "./logic/rootReducer";

const store = createStore(reducers);

const TheApp = () => (
  <Provider store={store} className="Providoer">
    <App />
  </Provider>
);

ReactDOM.render(<TheApp />, document.getElementById("root"));
registerServiceWorker();
