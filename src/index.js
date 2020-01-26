import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { purple, amber } from "@material-ui/core/colors/";
import { Router } from "react-router-dom";
import history from "./history";
import { store } from "./createStore";

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: {
      main: amber[500],
      light: amber[200],
      dark: amber[700]
    },
    type: "dark"
  },
  spacing: 10
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
