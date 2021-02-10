import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import HomePage from "../business/home/pages";
import Routes from "./routes";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.Home} component={HomePage} />
        {/* Fallback to home */}
        <Redirect to={Routes.Home} />
      </Switch>
    </BrowserRouter>
  );
}
