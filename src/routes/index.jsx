import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MeetupsRoutes from './MeetupsRoute';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <MeetupsRoutes />
    </Route>
  </Switch>
);

export default Routes
