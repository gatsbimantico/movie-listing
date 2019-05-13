import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { APP_IS_LOADED } from '../business-logic/actions'

import { AsyncComponentFactory } from '../framework/components';

const AsyncHome = new AsyncComponentFactory(() => import('../pages/Home'));

const mapDispatchToProps = dispatch => ({
  appIsLoaded: () => dispatch({ type: APP_IS_LOADED, dispatch }),
});

const AppRouter = ({ appIsLoaded, childProps }) => appIsLoaded() && (
  <Router>
    <Switch>
      <Route path="/" exact component={AsyncHome} props={childProps} />
      <Route component={AsyncHome} />
    </Switch>
  </Router>
);

export default connect(null, mapDispatchToProps)(AppRouter);