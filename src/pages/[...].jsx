import React from 'react';
import { Router } from '@reach/router';

import PrivateRoute from '../components/PrivateRoute';
import UserFeed from '../components/page/UserFeed';
import UserNetwork from '../components/page/UserNetwork';
import UserDetail from '../components/page/UserDetail';
import UserSetting from '../components/page/UserSetting';
import IndexPage from './index';
import NotFoundPage from './404';

function App({ params }) {
  const currentPath = params['*'];

  return (
    <Router>
      <PrivateRoute path="/feed/" component={UserFeed} />
      <PrivateRoute path="/my-network/" component={UserNetwork} />
      <PrivateRoute path="/profile/" component={UserDetail} />
      <PrivateRoute path="/settings/" component={UserSetting} />
      <IndexPage path="/" />
      <NotFoundPage path={`/${currentPath}`} />
    </Router>
  );
}

export default App;
