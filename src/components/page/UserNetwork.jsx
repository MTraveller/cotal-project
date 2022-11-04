import * as React from 'react';
// import { Link } from 'gatsby';

import Seo from '../Seo';

const UserNetwork = (rest) => {
  return (
    <>
      <h1>
        This page is <b>Network Page</b>
      </h1>
      <p>
        This Network page is for the user <code>hello</code> on the DRF db.
      </p>
    </>
  );
};

export const Head = () => <Seo title="My Network" />;

export default UserNetwork;
