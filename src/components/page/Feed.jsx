import * as React from 'react';
// import { Link } from 'gatsby';

// import http from '../services/httpService';
import Seo from '../Seo';

const Feed = (rest) => {
  // console.log('Feed Page');
  // console.log(rest);
  return (
    <>
      <h1>Feed Page</h1>
      <p>
        This feed page is for the user <code>hello</code> on the DRF db.
      </p>
    </>
  );
};

export const Head = () => <Seo title="Feed" />;

export default Feed;
