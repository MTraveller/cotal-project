import React from 'react';
import { Router } from '@gatsbyjs/reach-router';

import PrivateRoute from '../components/PrivateRoute';
import Feed from '../components/Feed';
import ProfileDetail from '../components/ProfileDetail';
import NotFoundPage from './404';

function App({ params }) {
  const currentPath = params['*'];

  return (
    <Router>
      <PrivateRoute path="/feed/" component={Feed} />
      <PrivateRoute path="/profile/me/" component={ProfileDetail} />
      <NotFoundPage path={`/${currentPath}`} />
    </Router>
  );
}

export default App;
