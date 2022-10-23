import React from 'react';
import { Router } from '@reach/router';
import PrivateRoute from '../components/PrivateRoute';
import ProfileDetail from '../components/ProfileDetail';

const Profile = (rest) => (
  <Router>
    <PrivateRoute path="/profile/me" component={ProfileDetail} {...rest} />
  </Router>
);

export default Profile;
