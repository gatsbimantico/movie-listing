import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AsyncComponentFactory } from './framework/components';

const AsyncHome = new AsyncComponentFactory(() => import("./pages/Home"));

export default ({ childProps }) => (
  <Router>
    <Switch>
      <Route
        path="/"
        exact
        component={AsyncHome}
        props={childProps}
      />
      <Route component={AsyncHome} />
    </Switch>
  </Router>
);
