import React from "react";
import ReactDOM from "react-dom";
import { Router} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import history from "./services/history";
import { store } from "./redux-store";
import App from "./containers/App";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
