import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/index";
import CountryPage from "./pages/countryPage";

import history from "./history";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";

export default function App() {
  return (
    <div className="app">
      <Router history={history} basename="/">
        <Switch>
          <Route path="/" exact component={HomePage}>
          </Route>
          <Route path="/countries/:nameParam" exact component={CountryPage}></Route>
        </Switch>
      </Router>
    </div>
  );
}
