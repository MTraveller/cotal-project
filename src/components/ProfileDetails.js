import * as React from 'react';
import { Link } from 'gatsby';

import http from '../services/httpService';
import Seo from './seo';

const ProfileDetails = async () => {
  const res = await http.get(`${process.env.API_URL}/profiles/me/`);
  console.log('ProfileDetails');
  console.log(res);

  return (
    <>
      <Seo title="Me" />
      <h1>
        This page is <b>User Page</b>
      </h1>
      <p>
        This page is for the user <code>{res.statusText}</code> on the DRF db.
      </p>
    </>
  );
};

export default ProfileDetails;
