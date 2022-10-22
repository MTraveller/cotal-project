import React from 'react';
import { Router } from '@reach/router';
import PrivateRoute from '../components/PrivateRoute';
import ProfileDetails from '../components/ProfileDetails';

const Profile = () => (
  <Router>
    <PrivateRoute path="/profile/me" component={ProfileDetails} />
  </Router>
);

export default Profile;
