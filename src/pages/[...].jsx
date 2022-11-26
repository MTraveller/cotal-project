import React from 'react';
import { Router } from '@reach/router';

import PrivateRoute from '../components/PrivateRoute';
import UserFeed from '../components/page/UserFeed';
import UserNetwork from '../components/page/UserNetwork';
import UserDetail from '../components/page/UserDetail';
import UserSetting from '../components/page/UserSetting';
import IndexPage from './index';
import NotFoundPage from './404';
import Seo from '../components/Seo';

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

export function Head({ params }) {
  const path = params[`*`].split(/(?:-|\/)+/);
  path.forEach((word, idx) => {
    path.splice(idx, 1, [...word].shift().toUpperCase() + word.slice(1));
  });

  return <Seo title={path.join(` `)} />;
}

export default App;
