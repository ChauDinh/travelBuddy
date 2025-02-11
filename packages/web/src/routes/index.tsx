import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";

import { Login } from "../components/Login";
import { Register } from "../components/Register";

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={App} />
      <Route exact={true} path="/register" component={Register} />
      <Route exact={true} path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);
