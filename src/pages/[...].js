import React from 'react';
import { Router } from '@reach/router';

import PrivateRoute from '../components/PrivateRoute';
import Feed from '../components/Page/Feed';
import ProfileDetail from '../components/Page/ProfileDetail';
import IndexPage from './index';
import NotFoundPage from './404';

function App({ params }) {
  const currentPath = params['*'];

  return (
    <Router>
      <PrivateRoute path="/feed/" component={Feed} />
      <PrivateRoute path="/profile/" component={ProfileDetail} />
      <IndexPage path="/" />
      <NotFoundPage path={`/${currentPath}`} />
    </Router>
  );
}

export default App;
