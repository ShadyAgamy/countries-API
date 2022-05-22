import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/index";

import history from "./history";

import "./app.scss";

export default function App() {
  return (
    <div className="app">
      <Router history={history} basename="/">
        <Switch>
          <Route path="/" exact component={HomePage}></Route>{" "}
        </Switch>{" "}
      </Router>{" "}
    </div>
  );
}
