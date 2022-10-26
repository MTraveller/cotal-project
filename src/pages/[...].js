import React from 'react';
import { Router } from '@reach/router';

import PrivateRoute from '../components/PrivateRoute';
import Feed from '../components/Page/Feed';
import ProfileDetail from '../components/Page/ProfileDetail';
import NotFoundPage from './404';
import IndexPage from '.';

function App({ params }) {
  const currentPath = params['*'];

  return (
    <Router>
      <PrivateRoute path="/feed/" component={Feed} />
      <PrivateRoute path="/profile/me/" component={ProfileDetail} />
      <IndexPage path="/" />
      <NotFoundPage path={`/${currentPath}`} />
    </Router>
  );
}

export default App;
