import React from 'react';

import Seo from '../Seo';

const UserSetting = ({ userData }) => (
  <>
    <h1>
      This page is <b>User Settings Page</b>
    </h1>
    <p>
      This page is for the user <code>hello</code> on the DRF db.
    </p>
  </>
);

export const Head = () => <Seo title="User Settings" />;

export default UserSetting;
