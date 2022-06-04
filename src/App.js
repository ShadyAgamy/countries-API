import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/index";
import CountryPage from "./pages/countryPage";
import { useSelector } from "react-redux";


import "./app.scss";

export default function App() {
  const darkTheme = useSelector((state) => state.theme_switcher.darkMode);
  return (
    <div className="app" data-theme={darkTheme? "dark" : ""}>
      <HashRouter >
        <Switch>
          <Route path="/" exact component={HomePage}>
          </Route>
          <Route path="/countries/:nameParam" exact component={CountryPage}></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}
