import React from 'react'
import { Route, Switch } from 'react-router-dom'

import MeetupsRoutes from './MeetupsRoute';
import EventsRoutes from './EventsRoute'

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <MeetupsRoutes />
    </Route>
    <Route exact path="/meetups/events/:meetupId?">
      <EventsRoutes/>
    </Route>
  </Switch>
);

export default Routes
