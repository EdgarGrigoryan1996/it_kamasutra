import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const reRender = () => {
  root.render(
    <Provider store={store}>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
    </Provider>
  );
};

reRender();

store.subscribe(reRender);
