import React from 'react';
import { Router } from '@reach/router';

import PrivateRoute from '../components/PrivateRoute';
import Feed from '../components/page/Feed';
import UserNetwork from '../components/page/UserNetwork';
import ProfileDetail from '../components/page/ProfileDetail';
import UserSetting from '../components/page/UserSetting';
import IndexPage from './index';
import NotFoundPage from './404';

function App({ params }) {
  const currentPath = params['*'];

  return (
    <Router>
      <PrivateRoute path="/feed/" component={Feed} />
      <PrivateRoute path="/my-network/" component={UserNetwork} />
      <PrivateRoute path="/profile/" component={ProfileDetail} />
      <PrivateRoute path="/settings/" component={UserSetting} />
      <IndexPage path="/" />
      <NotFoundPage path={`/${currentPath}`} />
    </Router>
  );
}

export default App;
