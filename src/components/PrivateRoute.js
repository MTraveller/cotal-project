import React from 'react';
import { navigate } from 'gatsby';
import { isLoggedIn } from '../services/authService';

// Private route from Gatsby's
// private route example, source:
// https://www.gatsbyjs.com/docs/how-to/routing/client-only-routes-and-user-authentication/
const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!isLoggedIn() && location.pathname !== `/`) {
    navigate('/');
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
