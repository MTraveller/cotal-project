import React from 'react';
import { Router } from '@reach/router';
import PrivateRoute from '../components/PrivateRoute';
import Feed from '../components/Feed';
import ProfileDetail from '../components/ProfileDetail';
import NotFoundPage from './404';

const App = () => {
  return (
    <Router>
      <PrivateRoute path="/feed/" component={Feed} />
      <PrivateRoute path="/profile/me/" component={ProfileDetail} />
      <NotFoundPage default />
    </Router>
  );
};

export default App;
