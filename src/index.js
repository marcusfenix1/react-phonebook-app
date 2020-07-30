import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/AppContainer";
import "./base.css";

import { StylesProvider } from "@material-ui/core/styles";

import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <StylesProvider injectFirst>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </StylesProvider>
  </Provider>,
  document.getElementById("root")
);
