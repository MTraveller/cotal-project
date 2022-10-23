import React from 'react';
import { Router } from '@reach/router';
import PrivateRoute from '../components/PrivateRoute';
import Feed from '../components/Feed';
import ProfileDetail from '../components/ProfileDetail';

const endPoints = ['/feed/', '/profile/me/'];

const App = ({ location }) => {
  const path = location.pathname;
  if (!endPoints.includes(path)) console.log('Not Included');
  return (
    <Router>
      <PrivateRoute path="/feed/" component={Feed} />
      <PrivateRoute path="/profile/me/" component={ProfileDetail} />
    </Router>
  );
};

export default App;
