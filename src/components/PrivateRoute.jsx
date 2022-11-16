import React from 'react';
import { navigate } from 'gatsby';
import { toast } from 'react-toastify';
import { globalHistory } from '@reach/router';

import { isLoggedIn } from '../services/authService';

// Private route from Gatsby's
// private route example, source:
// https://www.gatsbyjs.com/docs/how-to/routing/client-only-routes-and-user-authentication/
const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const previousPath = globalHistory.location.pathname;

  if (!isLoggedIn() && previousPath !== `/` && location.pathname !== `/`) {
    navigate(`/`);
    toast(`Please login, to continue.`);
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
